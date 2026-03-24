#!/usr/bin/env bash
# Usage: ./pull.sh
#        ./pull.sh <branch>     (optional; defaults to main)
#
# Fetches and merges the latest commits from GitHub into this clone.
# Works from any cwd if you invoke this file by path (uses the script's directory as repo root).
#
# Windows: run in Git Bash, or: bash pull.sh
# macOS/Linux: chmod +x pull.sh && ./pull.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"

BRANCH="${1:-main}"

echo "Pulling origin/$BRANCH into $REPO_ROOT"
git pull origin "$BRANCH"
