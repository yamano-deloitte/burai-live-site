---
layout: default
title: ニュース | Burai Live
permalink: /news/
lang: ja
description: >-
  Burai Liveの最新ニュース・お知らせ。新サービス開始・パートナーシップ・メディア掲載などの公式情報を発信しています。
---

<style>
.nw-hero { background: linear-gradient(135deg, #0b3d91 0%, #007acc 100%); padding: 4rem 2rem; text-align: center; }
.nw-hero__label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 0.75rem; }
.nw-hero__h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #fff; letter-spacing: -0.03em; margin: 0 0 0.75rem; }
.nw-hero__sub { font-size: 1rem; color: rgba(255,255,255,0.7); margin: 0; }

.nw-body { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }

.nw-list { display: flex; flex-direction: column; gap: 0; }
.nw-item {
  display: flex;
  gap: 2rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  text-decoration: none;
  align-items: flex-start;
  transition: background 0.15s;
}
.nw-item:first-child { border-top: 1px solid #e2e8f0; }
.nw-item:hover { background: #f8f9fb; margin: 0 -1rem; padding-left: 1rem; padding-right: 1rem; border-radius: 8px; border-color: transparent; }
.nw-item__date { font-size: 0.82rem; color: #9aa5b4; white-space: nowrap; min-width: 90px; margin-top: 4px; font-weight: 500; }
.nw-item__body { flex: 1; }
.nw-item__cats { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 0.4rem; }
.nw-item__cat { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #007acc; background: #eef4fb; padding: 2px 8px; border-radius: 100px; }
.nw-item__title { font-size: 1rem; font-weight: 600; color: #0b1f3a; line-height: 1.45; margin: 0; }
.nw-item__arrow { font-size: 1rem; color: #9aa5b4; margin-top: 4px; flex-shrink: 0; transition: transform 0.15s; }
.nw-item:hover .nw-item__arrow { transform: translateX(4px); color: #007acc; }

.nw-empty { text-align: center; padding: 4rem 2rem; color: #5a6a80; }
.nw-empty__icon { font-size: 3rem; margin-bottom: 1rem; }

@media (max-width: 600px) {
  .nw-body { padding: 2.5rem 1.25rem; }
  .nw-item { gap: 1rem; }
  .nw-item__date { min-width: 70px; font-size: 0.75rem; }
}
</style>

<div class="nw-hero">
  <p class="nw-hero__label">News</p>
  <h1 class="nw-hero__h1">ニュース</h1>
  <p class="nw-hero__sub">Burai Liveからの最新お知らせ</p>
</div>

<div class="nw-body">
  {% assign news_posts = site.posts | where: "category", "news" | where_exp: "post", "post.lang != 'en'" %}
  {% assign all_ja = site.posts | where_exp: "post", "post.lang != 'en'" %}
  {% assign news_all = site.posts | where_exp: "post", "post.tags contains 'news'" %}

  {% comment %} news タグまたは news カテゴリの記事を表示 {% endcomment %}
  {% assign display_posts = "" | split: "" %}
  {% for post in all_ja %}
    {% if post.tags contains 'news' or post.categories contains 'news' or post.categories contains 'ニュース' %}
      {% assign display_posts = display_posts | push: post %}
    {% endif %}
  {% endfor %}

  {% if display_posts.size > 0 %}
  <div class="nw-list">
    {% for post in display_posts %}
    <a class="nw-item" href="{{ post.url | relative_url }}">
      <div class="nw-item__date">{{ post.date | date: "%Y.%m.%d" }}</div>
      <div class="nw-item__body">
        <div class="nw-item__cats">
          {% for cat in post.categories %}
            <span class="nw-item__cat">{{ cat }}</span>
          {% endfor %}
          {% for tag in post.tags %}
            {% unless tag == 'news' %}
            <span class="nw-item__cat">{{ tag }}</span>
            {% endunless %}
          {% endfor %}
        </div>
        <p class="nw-item__title">{{ post.title }}</p>
      </div>
      <span class="nw-item__arrow">→</span>
    </a>
    {% endfor %}
  </div>
  {% else %}
  <div class="nw-empty">
    <div class="nw-empty__icon">📢</div>
    <p>ニュースを準備中です。しばらくお待ちください。</p>
  </div>
  {% endif %}
</div>
