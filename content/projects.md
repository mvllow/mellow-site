---
title: Projects
description: Technical creations and contributions.
eleventyImport:
  collections: ["projects"]
---

# Projects

<ol role="list">
{%- for project in collections.projects | reverse -%}
  <li><a href="{{ project.url }}">{{ project.data.title }}</a></li>
{%- endfor -%}
</ol>
