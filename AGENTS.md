<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Session Handoff Rule

When the remaining context or token budget is estimated to be below 5%, the active agent must update this file before the session ends.

The handoff update must be appended under `## Session:` and include:

- **Agent:** active agent name
- **Task:** what was being done
- **Completed:** concrete work already finished
- **Pending:** the next exact steps to continue
- **Files:** files created or changed in the session
- **Checks:** tests, lint, build, graph, or verification already run and their results
- **Blockers:** anything unresolved, risky, or intentionally deferred

Handoff notes must be short, factual, and continuation-oriented so the next session can resume without re-discovery.

# Sub-Agents Work Log

## Session: 2026-04-25
- **Agent:** codebase_investigator
- **Task:** Analyze project structure and dependency mapping.
- **Outcome:** Identified Public API violations and verified FSD layer integrity.
- **Note:** Invoked by Gemini.
