# One-click deploy: push to GitHub (Vercel auto-follows) + Cloudflare Pages
# Usage: powershell -ExecutionPolicy Bypass -File .\deploy.ps1 [-Message "commit message"]
param([string]$Message = "update site content")

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
$env:HTTPS_PROXY = "http://127.0.0.1:10809"
$env:HTTP_PROXY  = "http://127.0.0.1:10809"
$env:XDG_CONFIG_HOME = Join-Path $PSScriptRoot ".wrangler-config"

Set-Location $PSScriptRoot

# 1. Commit and push to GitHub (Vercel auto-deploys on push)
git add -A
$committed = $false
git commit -m $Message 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
  $committed = $true
  git push
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Git push failed. Check proxy (127.0.0.1:10809) is running." -ForegroundColor Red
    exit 1
  }
} else {
  Write-Host "No new changes to commit. Syncing Cloudflare only..."
}

# 2. Deploy to Cloudflare Pages (China-accessible entry)
Write-Host ""
Write-Host "Deploying to Cloudflare Pages..."
.\node_modules\.bin\wrangler.cmd pages deploy . --project-name=qisiming-portfolio --branch=main --commit-dirty=true

Write-Host ""
Write-Host "Done! Live URLs:" -ForegroundColor Green
Write-Host "  China:  https://qisiming-portfolio.pages.dev"
Write-Host "  Global: https://qisiming-portfolio.vercel.app"
