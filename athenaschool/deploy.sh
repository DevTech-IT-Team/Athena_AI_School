#!/bin/bash
# Quick Deploy Script for Athena AI School

echo "🚀 Athena AI School - Quick Deploy"
echo "=================================="
echo ""

# Check if git repo is clean
if [[ -n $(git status -s) ]]; then
    echo "📝 Uncommitted changes detected. Committing..."
    git add .
    read -p "Enter commit message (or press Enter for default): " commit_msg
    commit_msg=${commit_msg:-"Update deployment configuration"}
    git commit -m "$commit_msg"
else
    echo "✅ Git repository is clean"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "Next steps:"
echo "1. For Vercel: Run 'vercel --prod' or deploy via dashboard"
echo "2. For Render: Deploy will trigger automatically if connected"
echo ""
echo "Dashboard URLs:"
echo "- Vercel: https://vercel.com/dashboard"
echo "- Render: https://dashboard.render.com"
