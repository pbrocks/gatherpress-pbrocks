# Personal Fork Workflow

This document describes the workflow for maintaining personal customizations (like enhanced CLAUDE.md) while creating clean PRs to upstream.

## Creating PRs to Upstream GatherPress

When creating a feature branch for a PR to the main GatherPress repository:

```bash
# 1. Create your feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# 2. Make your changes and commit them
# ... work on your feature ...
git add .
git commit -m "Your feature description"

# 3. Reset CLAUDE.md to upstream version (IMPORTANT!)
git fetch upstream
git checkout upstream/develop -- CLAUDE.md
git commit -m "Reset CLAUDE.md to upstream version for PR"

# 4. Push to your fork
git push origin feature/your-feature-name

# 5. Create PR from pbrocks/gatherpress-pbrocks:feature/your-feature-name
#    to GatherPress/gatherpress:develop
```

## Quick Command

You can also use this one-liner after creating your feature branch:

```bash
# Reset CLAUDE.md to upstream version
git fetch upstream && git checkout upstream/develop -- CLAUDE.md && git commit -m "Reset CLAUDE.md to upstream version for PR"
```

## Keeping Personal Changes

Your enhanced CLAUDE.md lives in:
- `origin/develop` - Your fork's develop branch (for daily work)
- `origin/main-pbrocks` - Your personal main branch (backup)

These branches will always have your enhancements, so Claude Code can use them.

## After PR is Merged

After your PR is merged to upstream:

```bash
# Update from upstream
git checkout develop
git fetch upstream
git merge upstream/develop

# Re-apply your CLAUDE.md enhancements
git checkout origin/develop -- CLAUDE.md
git commit -m "Restore enhanced CLAUDE.md after upstream sync"
git push origin develop
```

Or if your CLAUDE.md was overwritten:

```bash
git checkout main-pbrocks -- CLAUDE.md
git commit -m "Restore enhanced CLAUDE.md"
git push origin develop
```
