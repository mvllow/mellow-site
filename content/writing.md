---
layout: layouts/base.njk
title: Writing
description: A garden of discovery and creation.
crumbs: [{ title: "writing", href: "#" }]
eleventyImport:
  collections: ["posts"]
---

# Writing

<ol role="list">
{%- for post in collections.posts | reverse -%}
  <li><time datetime="{{ post.data.date | htmlDateString }}" class="mr-1 text-sm tabular-nums text-f-med">{{ post.data.date | readableDate }}</time> <a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ol>
