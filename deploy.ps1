# 一键部署脚本：更新 GitHub（Vercel 自动跟随）+ Cloudflare Pages
# 用法：powershell -ExecutionPolicy Bypass -File .\deploy.ps1 [-Message "提交说明"]
param([string]$Message = "更新站点内容")

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
# git 推送需走本机代理
$env:HTTPS_PROXY = "http://127.0.0.1:10809"
$env:HTTP_PROXY  = "http://127.0.0.1:10809"
# wrangler 凭证目录（已在 .gitignore 中忽略）
$env:XDG_CONFIG_HOME = Join-Path $PSScriptRoot ".wrangler-config"

Set-Location $PSScriptRoot

# 1. 提交并推送到 GitHub（Vercel 检测到 push 后自动重新部署）
git add -A
git commit -m $Message 2>$null | Out-Null
if ($LASTEXITCODE -eq 0) {
  git push
  if ($LASTEXITCODE -ne 0) { Write-Host "Git 推送失败，请检查代理是否开启（127.0.0.1:10809）" -ForegroundColor Red; exit 1 }
} else {
  Write-Host "没有新的改动需要提交，直接同步 Cloudflare..."
}

# 2. 部署到 Cloudflare Pages（国内访问入口）
Write-Host "`n正在部署到 Cloudflare Pages..."
.\node_modules\.bin\wrangler.cmd pages deploy . --project-name=qisiming-portfolio --branch=main --commit-dirty=true

Write-Host "`n完成！上线地址：" -ForegroundColor Green
Write-Host "  国内访问: https://qisiming-portfolio.pages.dev"
Write-Host "  海外访问: https://qisiming-portfolio.vercel.app"
