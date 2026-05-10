---
title: Contact Us | Burai Live
layout: default
permalink: /en/contact/
lang: en
description: >-
  Contact Burai Live for inquiries about DX & ISR drone development, AI, web, cloud,
  healthcare DX, or CFO & back office DX services in Japan.
---

<style>
.cp-hero { background: linear-gradient(135deg, #0b3d91 0%, #007acc 100%); padding: 4rem 2rem; text-align: center; }
.cp-hero__label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 0.75rem; }
.cp-hero__h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #fff; letter-spacing: -0.03em; margin: 0 0 0.75rem; }
.cp-hero__sub { font-size: 1rem; color: rgba(255,255,255,0.7); margin: 0; }
.cp-body { max-width: 1000px; margin: 0 auto; padding: 4rem 2rem; display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: start; }
.cp-form-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2.5rem; box-shadow: 0 4px 24px rgba(11,61,145,0.06); }
.cp-form-card h2 { font-size: 1.25rem; font-weight: 700; color: #0b1f3a; margin: 0 0 1.75rem; }
.cp-info { display: flex; flex-direction: column; gap: 1.25rem; }
.cp-info-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1.5rem; }
.cp-info-card__icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
.cp-info-card__title { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #007acc; margin-bottom: 0.5rem; }
.cp-info-card__body { font-size: 0.92rem; color: #4a5568; line-height: 1.65; }
.cp-info-card__body a { color: #007acc; text-decoration: none; font-weight: 500; }
.cp-info-card__body a:hover { text-decoration: underline; }
.cp-services { background: #f8f9fb; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1.5rem; }
.cp-services__title { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #5a6a80; margin-bottom: 0.75rem; }
.cp-services__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
.cp-services__list li { font-size: 0.85rem; color: #5a6a80; display: flex; align-items: center; gap: 8px; }
.cp-services__list li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #007acc; flex-shrink: 0; }
@media (max-width: 800px) { .cp-body { grid-template-columns: 1fr; padding: 2rem 1.25rem; } }
</style>

<div class="cp-hero">
  <p class="cp-hero__label">Contact</p>
  <h1 class="cp-hero__h1">Contact Us</h1>
  <p class="cp-hero__sub">Questions, consultations, or quote requests — we're happy to help</p>
</div>

<div class="cp-body">
  <div class="cp-form-card">
    <h2>Send a Message</h2>
    {% include contact-form.html %}
  </div>

  <div class="cp-info">
    <div class="cp-info-card">
      <div class="cp-info-card__icon">✉️</div>
      <div class="cp-info-card__title">Email</div>
      <div class="cp-info-card__body">
        <a href="mailto:{{ site.email }}">{{ site.email }}</a><br>
        We typically respond within 1–2 business days.
      </div>
    </div>
    <div class="cp-info-card">
      <div class="cp-info-card__icon">🕐</div>
      <div class="cp-info-card__title">Business Hours</div>
      <div class="cp-info-card__body">
        Monday – Friday<br>
        9:00 AM – 5:00 PM (Japan Standard Time)
      </div>
    </div>
    <div class="cp-info-card">
      <div class="cp-info-card__icon">🌏</div>
      <div class="cp-info-card__title">Languages</div>
      <div class="cp-info-card__body">
        Japanese & English<br>
        We welcome inquiries from clients worldwide.
      </div>
    </div>
    <div class="cp-services">
      <p class="cp-services__title">Common Inquiry Topics</p>
      <ul class="cp-services__list">
        <li>DX & ISR Drone System Development</li>
        <li>AI Agent & ML Development</li>
        <li>Web App & Cloud Infrastructure</li>
        <li>Healthcare DX</li>
        <li>CFO Services & Back Office DX</li>
        <li>Other Digital Transformation</li>
      </ul>
    </div>
  </div>
</div>
