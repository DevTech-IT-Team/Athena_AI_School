# Quick Deploy Script for Athena AI School (PowerShell)

Write-Host "🚀 Athena AI School - Quick Deploy" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if git repo is clean
$gitStatus = git status -s
if ($gitStatus) {
    Write-Host "📝 Uncommitted changes detected. Committing..." -ForegroundColor Yellow
    git add .
    $commitMsg = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMsg)) {
        $commitMsg = "Update deployment configuration"
    }
    git commit -m $commitMsg
} else {
    Write-Host "✅ Git repository is clean" -ForegroundColor Green
}

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "✅ Code pushed to GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. For Vercel: Run 'vercel --prod' or deploy via dashboard"
Write-Host "2. For Render: Deploy will trigger automatically if connected"
Write-Host ""
Write-Host "Dashboard URLs:" -ForegroundColor Cyan
Write-Host "- Vercel: https://vercel.com/dashboard"
Write-Host "- Render: https://dashboard.render.com"
