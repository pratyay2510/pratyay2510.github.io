#!/usr/bin/env bash
# Usage: ./push.sh "your commit message"
#        ./push.sh            (prompts for message)

MESSAGE="$1"

if [ -z "$MESSAGE" ]; then
  read -rp "Commit message: " MESSAGE
fi

if [ -z "$MESSAGE" ]; then
  echo "Error: commit message cannot be empty."
  exit 1
fi

git add -A
git commit -m "$MESSAGE"
git push origin main
