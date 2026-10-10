# FloodWatch · Bengaluru — Windows launcher
# Starts the local static server (serve.py) and opens the app in your browser.
# Usage:  right-click > Run with PowerShell, or from a terminal:  .\start.ps1
#         .\start.ps1 -Port 8080      # use a specific port
#         .\start.ps1 -NoBrowser      # do not auto-open the browser

[CmdletBinding()]
param(
    [int]$Port = 0,          # 0 = auto-select a free port
    [switch]$NoBrowser
)

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
Set-Location $root

# Pick a Python launcher: prefer the `py` launcher, fall back to `python`.
$python = $null
foreach ($candidate in @('py', 'python', 'python3')) {
    try {
        & $candidate --version *> $null
        if ($LASTEXITCODE -eq 0) { $python = $candidate; break }
    } catch { <# not found, try next #> }
}

if (-not $python) {
    Write-Host ''
    Write-Host 'Python was not found on PATH.' -ForegroundColor Red
    Write-Host 'Install Python 3 from https://www.python.org/downloads/ and re-run this script.' -ForegroundColor Yellow
    Write-Host ''
    exit 1
}

Write-Host ''
Write-Host 'Starting FloodWatch (community preview — sample data)...' -ForegroundColor Green
Write-Host 'Serving:' $root -ForegroundColor DarkGray
Write-Host 'Press Ctrl+C to stop.' -ForegroundColor DarkGray
Write-Host ''

$openFlag = if ($NoBrowser) { '' } else { '--open' }
if ($Port -gt 0) {
    & $python "$root\serve.py" --port $Port @openFlag
} else {
    & $python "$root\serve.py" @openFlag
}
