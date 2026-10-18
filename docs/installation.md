# Install the skill

Install only `skills/startup-landing-design/`. The gallery, Node dependencies and research tooling are unnecessary for normal skill use. No API key is required.

## Copy into a project

From the target project directory:

```bash
git clone https://github.com/tunakurucu/startup-landing-lab.git
mkdir -p .agents/skills
cp -R startup-landing-lab/skills/startup-landing-design .agents/skills/
```

Codex and Cursor document `.agents/skills/` for project discovery. For Claude Code, replace `.agents/skills` with `.claude/skills`. For Cursor-specific placement, `.cursor/skills` is also documented. Do not overwrite an existing skill with the same name without reviewing it.

## User-level copy

After cloning, choose the client you use:

| Client | User-level directory | Project directory |
| --- | --- | --- |
| Codex | `~/.agents/skills/` | `.agents/skills/` |
| Claude Code | `~/.claude/skills/` | `.claude/skills/` |
| Cursor | `~/.cursor/skills/` or `~/.agents/skills/` | `.cursor/skills/` or `.agents/skills/` |

Example for Codex:

```bash
mkdir -p "$HOME/.agents/skills"
cp -R startup-landing-lab/skills/startup-landing-design "$HOME/.agents/skills/"
```

Restart or refresh the client's skill discovery, then explicitly invoke `startup-landing-design` using its skill selector or natural-language request. Automatic activation depends on the client's version and policies. These directory conventions were checked against official documentation on 2026-10-18. They are not a claim that this repository was exercised end-to-end inside all three clients.

Cloud sessions may not include local user directories. For portable team use, commit the project-local skill to the target repository. Check the client's current cloud skill synchronization guidance.

## Example prompts

> Use startup-landing-design to build a landing page for a webhook API. Explain integration reliability through an original local trace explorer, then inspect and refine the mobile layout.

> Use startup-landing-design for a playful consumer creativity tool. Choose an expressive visual direction and make the creative experience understandable through a useful interaction.

> Use startup-landing-design to redesign our B2B operations page. Preserve our framework and brand, explain ownership through a concrete workflow, and verify keyboard navigation.

## Verified sources

- [Agent Skills specification](https://agentskills.io/specification)
- [Codex skill locations](https://learn.chatgpt.com/docs/build-skills)
- [Claude Code skills](https://code.claude.com/docs/en/skills)
- [Cursor skill directories](https://cursor.com/docs/skills)

The package follows the open standard. Other clients may load it through their documented skills directory; their discovery behavior has not been tested here. No third-party installer command is required or claimed as tested.
