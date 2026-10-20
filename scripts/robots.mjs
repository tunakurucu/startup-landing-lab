// robots.txt check for the measurement scripts, following RFC 9309 for the "*" group:
// consecutive user-agent lines form one group; Allow and Disallow patterns support "*" and a trailing "$";
// the longest matching pattern wins and Allow wins a tie. A site whose homepage is allowed is measured
// even when everything else is disallowed (for example "Allow: /$" followed by "Disallow: /").

export function parseStarGroup(txt) {
  const rules = [];
  let inGroup = false, lastWasAgent = false, matched = false;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.split('#')[0].trim();
    if (!line) continue;
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase(), val = m[2].trim();
    if (key === 'user-agent') {
      if (!lastWasAgent) matched = false;
      if (val === '*') matched = true;
      inGroup = matched;
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!inGroup) continue;
    if ((key === 'allow' || key === 'disallow') && val) rules.push({allow: key === 'allow', pattern: val});
  }
  return rules;
}

function toRegex(pattern) {
  const anchored = pattern.endsWith('$');
  const body = (anchored ? pattern.slice(0, -1) : pattern).split('*').map(s => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*');
  return new RegExp('^' + body + (anchored ? '$' : ''));
}

export function isAllowed(rules, path) {
  let best = null;
  for (const r of rules) {
    if (!toRegex(r.pattern).test(path)) continue;
    const len = r.pattern.length;
    if (!best || len > best.len || (len === best.len && r.allow)) best = {len, allow: r.allow};
  }
  return best ? best.allow : true;
}

export async function robotsBlocked(ctx, url) {
  try {
    const u = new URL(url);
    const r = await ctx.request.get(new URL('/robots.txt', url).href, {timeout: 10000});
    if (!r.ok()) return false;
    return !isAllowed(parseStarGroup(await r.text()), u.pathname + u.search);
  } catch { /* no robots.txt reachable: proceed */ }
  return false;
}
