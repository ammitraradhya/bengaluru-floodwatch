# AGENTS.md: Multi-Agent Coordination Contract (template v1)

Kilo Code, OpenCode and Cline all load `AGENTS.md` from the project root, so this one file briefs every agent.
Agents cannot talk to each other directly. They coordinate only through files on disk and git, as defined below.

- **Kilo Code:** loads it at the start of each task and cannot edit it without your approval. Start a new task after you change it.
- **OpenCode:** finds it by searching upward from its working directory (so each worktree must contain a committed copy).
- **Cline:** loads it automatically; open the Rules panel once and confirm `AGENTS.md` is toggled on. If it is not picked up, add `.clinerules/00-coordination.md` containing one line: `Read and obey AGENTS.md before doing anything.`

---

## Part 0: How to use this template (HUMAN ONLY; agents skip Parts 0 and 8)

1. Keep a pristine copy of this file (for example `AGENTS.template.md`). For each project or session, copy it to the repo root as `AGENTS.md`.
2. Fill in every `[FILL]` in Part 1. Do not leave a zone blank; an unowned path is a collision waiting to happen.
3. Run the setup in Part 8A.
4. Commit `AGENTS.md` on the base branch **before** creating worktrees. Worktrees only receive committed files.
5. Start each agent with its kickoff prompt (Part 8B).
6. Merge with Part 7, then clean up with Part 8D.

---

## Part 1: Session setup (HUMAN FILLS; agents treat this as read-only)

**Project:** [FILL]
**Session goal:** [FILL: one or two sentences]
**Base branch:** [FILL: main]
**Isolation mode:** [FILL: A = git worktrees (recommended) | B = one shared working tree]
**Integrator** (the only agent or person who edits shared files and merges): [FILL: human | kilo | opencode | cline]
**Lock expiry:** [FILL: 30 minutes]
**Checkpoint interval:** [FILL: after every subtask, or every 15 minutes, whichever comes first]
**Coordination folder:** `.coord/` (one real folder in the hub checkout; in Mode A every worktree links to it)

### Roster and zones

A zone is the only set of paths an agent may write. Zones must not overlap. Everything outside your zone is read-only.

| Agent ID | Tool | Role | May WRITE (zone) | Worktree and branch | Port | Test DB or namespace |
| --- | --- | --- | --- | --- | --- | --- |
| kilo | Kilo Code | [FILL] | [FILL: e.g. `src/api/**`, `tests/api/**`] | `../<PROJECT>-kilo`, `agent/kilo/<TASK>-<slug>` | [FILL: 3001] | [FILL: `<project>_test_kilo`] |
| opencode | OpenCode | [FILL] | [FILL] | `../<PROJECT>-opencode`, `agent/opencode/<TASK>-<slug>` | [FILL: 3002] | [FILL: `<project>_test_opencode`] |
| cline | Cline | [FILL] | [FILL] | `../<PROJECT>-cline`, `agent/cline/<TASK>-<slug>` | [FILL: 3003] | [FILL: `<project>_test_cline`] |

To add an agent, add a row here, a folder `.coord/inbox/<id>/done/`, and a kickoff prompt.

### Shared files (Integrator only; everyone else sends an inbox request)

`package.json`, lockfiles, `tsconfig*.json`, lint and format config, CI config, `.env.example`, database migrations, generated code, `README.md`, `AGENTS.md`, [FILL: anything else many people touch]

Dependency changes, migrations and generated files are Integrator-only, always.

### Contracts (interfaces that cross zones)

Only the owner may change a contract. Consumers read it and ask for changes through the inbox. Agree contracts before parallel work starts.

| Contract | Path | Owner (only writer) | Consumers (read-only) |
| --- | --- | --- | --- |
| [FILL: e.g. API types] | [FILL: `src/contracts/**`] | [FILL] | [FILL] |

### Tasks (index only; the truth is each task file in `.coord/tasks/`)

| ID | Title | Owner | Zone | Depends on |
| --- | --- | --- | --- | --- |
| TASK-001 | [FILL] | [FILL] | [FILL] | none |

---

## Part 2: Prime directives (all agents)

1. You are exactly one agent. Your ID is in your kickoff prompt. If it is missing or unclear, ask the human. Never act as another agent.
2. Write only inside your zone (Part 1). Anything else is read-only. If you need a change outside your zone, send an inbox request (Part 4). Do not make the change yourself.
3. Never edit `AGENTS.md`. Never edit another agent's files in `.coord/`, except to create a new message in their inbox.
4. Shared files belong to the Integrator. Ask for changes through the inbox.
5. At the start of every task and at every checkpoint: read your inbox, list `.coord/locks/`, and read the other agents' status files.
6. Take a lock (Part 4) before touching anything that is not exclusively yours: an unowned path, a shared file you have been granted permission to edit, or an exclusive resource such as the shared dev database or a migration run.
7. Never work around a lock, a boundary or a rule. If one blocks you, stop and follow Part 6.
8. Use only your own port, test database, temp folder and `.env.local`. Never stop a process you did not start.
9. Make small, frequent commits of your own files only, using explicit paths (Part 5).
10. Do only your task. No drive-by refactors, renames, formatting sweeps or "while I'm here" fixes. Note ideas in your log instead.
11. Keep your status file current and leave a log entry when you finish.
12. When in doubt, stop and ask. A paused agent costs minutes; a collision costs hours.

---

## Part 3: Isolation rules

### 3.1 Mode A: worktrees (recommended)
- Work only inside your own worktree. Never edit files in another agent's worktree or in the hub checkout.
- `.coord/` inside your worktree is a link to the one shared folder. Treat it as shared state, not as your private notes. If your tool asks permission to access it as "outside the workspace", approve that path only.
- Your branch is `agent/<id>/<TASK>-<slug>`. Never switch branches inside your worktree.

### 3.2 Mode B: one shared working tree (stricter, because everything is shared)
- Never switch branches, stash, or restore anything. The one branch is shared by all agents.
- Before editing any file you did not create in this task, re-read it first. Another agent or the human may have changed it.
- If a write fails because a file changed, re-read it and redo your edit on top of the new version. Never overwrite.
- Never use your tool's checkpoint, restore, revert-workspace or undo-all feature. It can roll back other agents' files.
- No dependency installs; ask the Integrator.
- Commit with explicit paths only: `git commit -m "[id] TASK-001: summary" -- path1 path2`.
- If `.git/index.lock` exists, wait 10 seconds and retry. Never delete it.

### 3.3 Ports, processes and data
- Start servers only on your port. Check that the port is free before binding.
- Never run `killall`, `pkill`, `taskkill /IM` or anything that stops processes by name. Stop only the process ID you started.
- Use only your test database or namespace. Never touch another agent's, and never touch real or production data.
- Put temporary files in your own folder (for example `.tmp/<id>/`, which must be git-ignored), not in shared locations.

### 3.4 Dependencies and configuration
- Do not add, remove or upgrade dependencies. Send the Integrator an inbox request naming the package, the version and the reason.
- In Mode A, installing the already-declared dependencies inside your own worktree is fine.
- Do not change build, lint, format, TypeScript or CI configuration.

### 3.5 Formatting and linting
- Run formatters and linters only on files you changed.
- Never run a repo-wide `--fix`, `format`, `prettier --write .` or similar. It rewrites other agents' files.
- Do not move, rename or mass-edit files outside your zone.

### 3.6 Tests
- Run only the tests for your zone. The full suite runs at integration time (Part 7).
- Never edit another zone's tests to make them pass. If their tests fail because of your work or theirs, report it in the inbox.
- Do not weaken, skip or delete a failing test to get green.

### 3.7 Environment and secrets
- Use a per-worktree `.env.local` (git-ignored). Never commit secrets. Never copy another agent's environment file.

### 3.8 New files
- Create new files only inside your zone. Check that the name does not already exist first.

---

## Part 4: Coordination protocol (`.coord/`)

Every file has exactly one writer, so nothing is ever edited by two agents at once.

```
.coord/
  tasks/TASK-###.md           writer: the task owner (human creates it)
  status/<id>.md              writer: that agent only (overwrite)
  inbox/<id>/<UTC>-from-<sender>-<topic>.md   writer: any agent CREATES; never edited afterwards
  inbox/<id>/done/            the recipient moves handled messages here
  locks/<slug>/owner.txt      writer: the lock holder
  log/<UTC>-<id>-<TASK>.md    writer: its author, created once
```

Get the time with `date -u +%Y%m%dT%H%M%SZ` (PowerShell: `(Get-Date).ToUniversalTime().ToString('yyyyMMdd\THHmmss\Z')`). Never guess it.

### 4.1 Checkpoints (do all four steps)
Checkpoint: before you start, after each subtask, before each commit, and every checkpoint interval from Part 1.
1. Update `.coord/status/<id>.md` (format in the Appendix).
2. Read your inbox. Handle every message, then move it to `done/`.
3. List `.coord/locks/`. Do not touch anything another agent has locked.
4. Re-read the other agents' status files for overlap with what you are about to edit.

### 4.2 Locks
A lock is a folder. Creating a folder is atomic, so only one agent can succeed.

Take a lock:
```bash
SLUG="src__shared"        # the path with / replaced by __
mkdir ".coord/locks/$SLUG" && printf 'agent=%s\ntask=%s\ntime=%s\npaths=%s\nreason=%s\n' \
  "<id>" "<TASK>" "$(date -u +%Y%m%dT%H%M%SZ)" "<paths>" "<why>" > ".coord/locks/$SLUG/owner.txt"
```
PowerShell: `New-Item -ItemType Directory -ErrorAction Stop ".coord/locks/$slug"`, then write `owner.txt`.

- **Never use `mkdir -p`** for a lock. It succeeds when the folder already exists and defeats the lock.
- If `mkdir` fails, the lock is held. Read its `owner.txt`, do something else, and retry at the next checkpoint.
- Overlaps count. Before locking `a/b`, check that no lock is named `a`, `a__b` or `a__b__...`. If one is, treat the path as locked.
- Release your lock as soon as you have committed: `rm -r ".coord/locks/$SLUG"`. Release only locks whose `owner.txt` names you.
- A lock older than the lock expiry in Part 1 is stale. Do not delete it. Report it in your status as BLOCKED and tell the human.

### 4.3 Inbox
- Create a new file in the recipient's inbox: `.coord/inbox/<to>/<UTC>-from-<you>-<topic>.md`. Never append to or edit an existing message.
- One request per file. Use the Appendix format. Say whether it is blocking you.
- Reply by creating a new message in the sender's inbox.
- For work in another zone, or for a shared-file or contract change, ask the owner. Do not wait silently: set your status to blocked on that request, and meanwhile do any other part of your task that stays inside your zone.

### 4.4 Finishing
When your task is done: commit, release your locks, write a log entry, set your task file to `review`, set your status to `done`, and stop. The Integrator or human marks it `done` after merging.

---

## Part 5: Git rules

| Do | Never |
| --- | --- |
| `git status` and `git diff` often | `git add -A`, `git add .`, `git commit -a` |
| `git add <explicit paths>` | `git stash`, `git reset --hard`, `git clean`, `git checkout -- .`, `git restore .` |
| Commit small: `[<id>] TASK-###: what changed` | `git push --force`, `git rebase` on a shared branch |
| Commit only files in your zone | Merge into the base branch (Integrator only) |
| Leave unexpected changes alone and report them | "Clean up" changes you did not make |
| Stay on your own branch (Mode A) | Switch branches (Mode B: always) |

If `git status` shows changes in paths that are not yours, someone else is working there. Do not stage, revert or fix them.

---

## Part 6: Stop and ask the human

Set your status to `blocked`, write what you need in your status file, create an inbox message to `human` if useful (`.coord/inbox/human/`), and stop working on the blocked part when any of these happens:

- You need to edit outside your zone, and the owner has not replied by your next checkpoint.
- Two tasks need the same file, or two zones seem to overlap.
- Files in your zone changed and you did not change them.
- A lock is stale, or you cannot get a lock you need.
- Tests outside your zone fail and block you.
- The task needs a new dependency, a migration, a config change or a secret.
- A command would be destructive or irreversible, or would affect real data.
- The requirements are unclear or contradict a contract.

Never guess your way past one of these.

---

## Part 7: Integration and merge (Integrator or human)

1. Merge in dependency order, one branch at a time. A task whose "Depends on" is not `done` does not merge.
2. For each branch: merge into the base, run the full test suite, and resolve conflicts yourself (agents do not).
3. After the first merge, bring the base into every remaining agent branch (`git -C ../<PROJECT>-<id> merge <base>`), then re-test before merging that branch.
4. Apply any dependency, migration and generated-file requests from the inboxes, in one pass, after merging.
5. Mark merged tasks `done` and remove their worktrees and branches (Part 8D).

---

## Part 8: Human runbook (agents skip this part)

### 8A. Setup (Mode A), run once per session from the hub checkout

```bash
# 1. Shared coordination folder (git-ignored; no trailing slash so the links are ignored too)
mkdir -p .coord/tasks .coord/locks .coord/status .coord/log \
         .coord/inbox/kilo/done .coord/inbox/opencode/done .coord/inbox/cline/done .coord/inbox/human
echo ".coord" >> .gitignore
echo ".tmp" >> .gitignore

# 2. Create the task files from the Appendix template, one per task, in .coord/tasks/

# 3. Commit the filled-in contract BEFORE making worktrees
git add AGENTS.md .gitignore && git commit -m "chore: agents session setup"

# 4. One worktree and branch per agent, each linked to the shared .coord
git worktree add ../<PROJECT>-kilo     -b agent/kilo/TASK-001-<slug>
git worktree add ../<PROJECT>-opencode -b agent/opencode/TASK-002-<slug>
git worktree add ../<PROJECT>-cline    -b agent/cline/TASK-003-<slug>
ln -s "$(pwd)/.coord" ../<PROJECT>-kilo/.coord
ln -s "$(pwd)/.coord" ../<PROJECT>-opencode/.coord
ln -s "$(pwd)/.coord" ../<PROJECT>-cline/.coord
```

Windows PowerShell: replace each `ln -s` with `New-Item -ItemType Junction -Path ..\<PROJECT>-kilo\.coord -Target .coord` (a junction needs no admin rights).

Then open each worktree in its own VS Code window: Kilo Code in `<PROJECT>-kilo`, Cline in `<PROJECT>-cline`, and OpenCode in a terminal inside `<PROJECT>-opencode`. Create a `.env.local` in each worktree with that agent's port and test database.

Mode B (shared tree): do steps 1 to 3, skip step 4 (no worktrees, no links), keep `.coord/` as a normal folder in the project, and open one VS Code window for Kilo Code and Cline. Expect more friction; prefer Mode A.

In each tool, keep auto-approve switched off for shell commands that delete files or change git history.

### 8B. Kickoff prompts (paste one into each agent)

Start:
```
You are `<id>` (one of: kilo, opencode, cline). Read AGENTS.md fully, then your task file
.coord/tasks/<TASK>.md, your inbox, and the other agents' status files. Write your first
status file, then begin. Obey every rule in AGENTS.md. If anything is unclear or conflicts
with another agent's work, stop, set your status to blocked and ask me.
```

Finish:
```
You are `<id>`. Wrap up now: commit your own files, release your locks, write your log entry,
set your task file to review and your status to done. Then stop.
```

### 8C. During the session
- Look at `.coord/status/` and `.coord/locks/` now and then (or `ls -R .coord`). A status that has not changed for much longer than the checkpoint interval means that agent is stuck or finished.
- Check `.coord/inbox/human/` for questions.
- Never edit Part 1 mid-session. If you must change zones: stop all agents, edit and commit on the base branch, merge the base into each worktree branch, then start new tasks.

### 8D. End of session
1. Run Part 7.
2. Remove worktrees and branches: `git worktree remove ../<PROJECT>-<id>` and `git branch -d agent/<id>/<TASK>-<slug>`.
3. Archive or delete `.coord/` (keep `.coord/log/` if you want a history).
4. Restore `AGENTS.md` from your pristine template.

---

## Appendix: file formats

### Task file: `.coord/tasks/TASK-###.md`
```
# TASK-001: <title>
- Owner: <agent id>
- Status: todo | in-progress | blocked | review | done
- Branch: agent/<id>/TASK-001-<slug>
- Zone (may write): <paths>
- Read-only inputs: <paths, contracts>
- Depends on: <TASK ids that must be done> | none

## Goal
<what and why, 2 to 4 sentences>

## Acceptance criteria
- [ ] <testable item>

## How to verify (scoped to this zone)
<exact commands>

## Notes and decisions (owner appends)
```

### Status file: `.coord/status/<id>.md` (overwrite each checkpoint)
```
# Status: <id>
- Updated: <UTC>
- Task: <TASK id>
- State: working | blocked | review | done | idle
- Currently editing: <paths>
- Locks held: <slugs> | none
- Done since last checkpoint: <one line>
- Next: <one line>
- Blocked by or needs from others: <inbox file names> | none
```

### Inbox message: `.coord/inbox/<to>/<UTC>-from-<from>-<topic>.md`
```
# <topic>
- From: <id>   To: <id>   Date: <UTC>   Task: <TASK id>
- Blocking me: yes | no
## Request
<what you need, one request only>
## Why
## Exact change wanted
<paths, proposed diff, or contract change>
## Reply by
<time, or "before your next commit">
```

### Log entry: `.coord/log/<UTC>-<id>-<TASK>.md`
```
# <UTC> <id> <TASK>: done | partial
## Summary
## Files changed
## How I verified
## Follow-ups and risks
## Commits
```

### Lock owner file: `.coord/locks/<slug>/owner.txt`
```
agent=<id>
task=<TASK id>
time=<UTC>
paths=<paths covered>
reason=<why>
```
