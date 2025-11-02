# push-to-github.ps1
# Usage:
# 1) Install Git for Windows if you haven't: https://git-scm.com/download/win
# 2) Open PowerShell, cd to this project folder and run: .\push-to-github.ps1
# This script will connect your local project to the provided GitHub repo URL and push.

$ErrorActionPreference = 'Stop'

# Require git
try {
    git --version | Out-Null
} catch {
    Write-Error "git not found. Install Git for Windows and ensure it's on PATH: https://git-scm.com/download/win"
    exit 1
}

# Set variables
$repoUrl = 'https://github.com/onurmert24/DU_Racing_Website.git'
$authorName = 'onurmert24'
$authorEmail = 'onurmertarslanturk@gmail.com'

Write-Host "Using repo: $repoUrl"

# Initialize repo if needed
if (-not (Test-Path -Path .git)) {
    Write-Host "No local git repo found — initializing..."
    git init
} else {
    Write-Host "Local git repo already initialized."
}

# Ensure remote origin points to the given URL
# If origin exists and is different, replace it
$existingOrigin = $null
try { $existingOrigin = git remote get-url origin 2>$null } catch { $existingOrigin = $null }
if ($existingOrigin) {
    if ($existingOrigin -ne $repoUrl) {
        Write-Host "Replacing existing origin ($existingOrigin) with $repoUrl"
        git remote remove origin
        git remote add origin $repoUrl
    } else {
        Write-Host "Remote origin already set to $repoUrl"
    }
} else {
    git remote add origin $repoUrl
}

# Fetch remote refs
Write-Host "Fetching remote refs..."
git fetch origin

# Check if remote main exists
$remoteMainExists = $false
try {
    git ls-remote --exit-code --heads origin main > $null
    if ($LASTEXITCODE -eq 0) { $remoteMainExists = $true }
} catch { $remoteMainExists = $false }

# Stage local changes
git add .

if ($remoteMainExists) {
    Write-Host "Remote 'main' branch exists. Creating a local commit (if needed), then rebasing onto origin/main..."
    # Create a commit if there are staged changes
    $status = git status --porcelain
    if ($status) {
        git -c user.name="$authorName" -c user.email="$authorEmail" commit -m "Update site"
    } else {
        Write-Host "No changes to commit."
    }

    git branch -M main 2>$null || git checkout -b main

    Write-Host "Pulling remote changes and rebasing local commits (if any)..."
    try {
        git pull --rebase origin main
    } catch {
        Write-Host "Rebase resulted in conflicts — resolve them manually, then run: git rebase --continue"
        exit 1
    }

    Write-Host "Pushing to origin/main..."
    git push -u origin main
    Write-Host "Push complete."
} else {
    Write-Host "Remote 'main' branch does not exist. Creating initial commit (if needed) and pushing..."
    $status = git status --porcelain
    if ($status) {
        git -c user.name="$authorName" -c user.email="$authorEmail" commit -m "Initial commit"
    } else {
        # no changes (unlikely) but still create an empty commit to create branch, only if no commits exist
        $hasAnyCommit = $false
        try {
            git rev-parse --verify HEAD > $null
            $hasAnyCommit = $true
        } catch { $hasAnyCommit = $false }
        if (-not $hasAnyCommit) {
            git -c user.name="$authorName" -c user.email="$authorEmail" commit --allow-empty -m "Initial commit"
        }
    }

    git branch -M main
    git push -u origin main
    Write-Host "Initial push complete."
}

Write-Host "Done. If you see errors about conflicts or authentication, follow the messages and ask me for help."
