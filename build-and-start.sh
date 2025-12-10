#!/bin/bash
# Build and Start Script for RoamTech

cd /home/raomtucs/repositories/raomtech

# Check if .next/routes-manifest.json exists
if [ ! -f ".next/routes-manifest.json" ]; then
    echo "Building application..."
    npm run build
fi

# Start the server
echo "Starting server..."
npm run start

