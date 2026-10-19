// Illustrative local state model. Not the package API; no network or persistence.
export function traceFor(scenario = 'recover') {
  if (!['success', 'recover', 'fail'].includes(scenario)) throw new Error('Use success, recover or fail');
  const events = [{state:'queued', attempt:0}, {state:'running', attempt:1}];
  if (scenario === 'success') return [...events, {state:'completed', attempt:1}];
  return [...events, {state:'retrying', attempt:1, error:'Illustrative temporary error'},
    {state:'running', attempt:2}, {state:scenario === 'recover' ? 'completed' : 'failed', attempt:2}];
}
if (typeof process !== 'undefined' && process.argv[1]?.endsWith('demo.mjs')) {
  for (const event of traceFor(process.argv[2] || 'recover')) console.log(JSON.stringify({id:'job-001', ...event}));
}
