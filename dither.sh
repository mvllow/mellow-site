#!/usr/bin/env sh

convert "$1" -verbose -format GIF -interlace GIF -resize 640\> -ordered-dither 8x8 -set filename:f "%[t]_dithered" "%[filename:f].gif"
