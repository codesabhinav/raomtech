@echo off
REM Build and Start Script for RoamTech (Windows)

cd /d D:\Client_project\2025\RoamTech

REM Check if .next\routes-manifest.json exists
if not exist ".next\routes-manifest.json" (
    echo Building application...
    call npm run build
)

REM Start the server
echo Starting server...
call npm run start

