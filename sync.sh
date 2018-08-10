#!/usr/bin/env bash
rsync -avP site.* *.ico *.svg *.png browserconfig.xml index.html bundles fonts images lock:public_html
