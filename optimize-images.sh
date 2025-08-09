#!/bin/bash

# Image optimization script for Cardamom restaurant website
# This script compresses images and converts them to WebP format for better performance

echo "Starting image optimization..."

# Create backup directory
mkdir -p public/backup-original-images

# Function to optimize JPEG images
optimize_jpeg() {
    local input="$1"
    local output="$2"
    
    echo "Optimizing JPEG: $input"
    
    # Copy original to backup
    cp "$input" "public/backup-original-images/$(basename "$input")"
    
    # Optimize JPEG with 85% quality, progressive, and strip metadata
    magick "$input" -quality 85 -interlace Plane -strip "$output"
    
    # Also create WebP version
    local webp_output="${output%.*}.webp"
    magick "$input" -quality 80 -define webp:method=6 "$webp_output"
    
    echo "Created: $output and $webp_output"
}

# Function to optimize PNG images
optimize_png() {
    local input="$1"
    local output="$2"
    
    echo "Optimizing PNG: $input"
    
    # Copy original to backup
    cp "$input" "public/backup-original-images/$(basename "$input")"
    
    # Optimize PNG and strip metadata
    magick "$input" -strip -define png:compression-level=9 "$output"
    
    # Also create WebP version
    local webp_output="${output%.*}.webp"
    magick "$input" -quality 80 -define webp:method=6 "$webp_output"
    
    echo "Created: $output and $webp_output"
}

# Optimize all JPEG images in home directory
for img in public/home/*.jpg; do
    if [ -f "$img" ]; then
        optimize_jpeg "$img" "$img"
    fi
done

# Optimize PNG images
for img in public/home/*.png; do
    if [ -f "$img" ]; then
        optimize_png "$img" "$img"
    fi
done

# Optimize other directories
for img in public/events/*.png; do
    if [ -f "$img" ]; then
        optimize_png "$img" "$img"
    fi
done

# Optimize logo files
if [ -f "public/logo.jpg" ]; then
    optimize_jpeg "public/logo.jpg" "public/logo.jpg"
fi

if [ -f "public/logo.png" ]; then
    optimize_png "public/logo.png" "public/logo.png"
fi

echo "Image optimization completed!"
echo "Original images backed up to public/backup-original-images/"
echo "WebP versions created for modern browsers"

# Show size comparison
echo "\nSize comparison:"
echo "Before optimization:"
du -sh public/backup-original-images/ 2>/dev/null || echo "No backup created yet"
echo "After optimization:"
du -sh public/home/ public/events/ public/logo.* 2>/dev/null