#!/usr/bin/env sh

# didder -i "$1" -o "$1_dithered" -p "black white" -r "#242220 #f0eae8" -x 640 bayer 8x8

magick "$1" -verbose -format GIF -interlace GIF -resize 640\> -ordered-dither 8x8 -set filename:f "%[t]_dithered" "%[filename:f].gif"
