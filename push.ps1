# Usage: .\push.ps1 "your commit message"
#        .\push.ps1            (prompts for message)

param([string]$Message)

if (-not $Message) {
    $Message = Read-Host "Commit message"
}

if (-not $Message) {
    Write-Error "Commit message cannot be empty."
    exit 1
}

git add -A
git commit -m $Message
git push origin main
