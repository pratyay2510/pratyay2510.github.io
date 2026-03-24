# Usage: .\pull.ps1
#        .\pull.ps1 develop
#
# Fetches and merges the latest commits from GitHub into this clone.
# Always runs from the folder that contains this script (works from any current directory).

param([string]$Branch = "main")

$RepoRoot = $PSScriptRoot
if (-not $RepoRoot) {
    $RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
}

Set-Location -LiteralPath $RepoRoot

Write-Host "Pulling origin/$Branch into $RepoRoot"
git pull origin $Branch
