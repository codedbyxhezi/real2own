$ErrorActionPreference = "Stop"

Write-Host "Stopping possible Node.js processes..." -ForegroundColor Cyan
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "Removing old installation files..." -ForegroundColor Cyan
if (Test-Path "node_modules") {
  Remove-Item -Recurse -Force "node_modules"
}

Write-Host "Using the public npm registry..." -ForegroundColor Cyan
npm config set registry https://registry.npmjs.org/

Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host "Done. Start the project with: npm run dev" -ForegroundColor Green
