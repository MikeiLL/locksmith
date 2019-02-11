#!/usr/bin/env bash
rsync -avP robots.txt sitemap.xml site.* *.ico *.svg *.png browserconfig.xml index.html bundles fonts images lock:public_html
