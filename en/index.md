---
layout: default
title: Burai Live - DX & ISR Drone System Development | AI · Web · Cloud Solutions in Japan
permalink: /en/
lang: en
description: >-
  Japan-based technology partner specializing in DX & ISR drone system development,
  AI solutions, web development, and cloud operations. We support your digital transformation end-to-end.
keywords: >-
  drone, Japan, DX, ISR, drone system development, AI solutions, web development,
  cloud operations, digital transformation, Burai, UAV, back office DX, CFO services
---

<style>
/* ===== RESET & BASE ===== */
.site-main .container { padding: 0; max-width: none; }

/* ===== HERO ===== */
.lp-hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  background: #050d1a;
  overflow: hidden;
  padding: 0 2rem;
}
.lp-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,122,204,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,122,204,0.07) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%);
}
.lp-hero__glow {
  position: absolute;
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,122,204,0.18) 0%, transparent 70%);
  top: -100px; right: -100px;
  pointer-events: none;
}
.lp-hero__glow2 {
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(11,61,145,0.25) 0%, transparent 70%);
  bottom: -50px; left: 10%;
  pointer-events: none;
}
.lp-hero__inner {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 6rem 0;
}
.lp-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #007acc;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0,122,204,0.3);
  padding: 6px 14px;
  border-radius: 100px;
}
.lp-hero__eyebrow::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #007acc;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.7); }
}
.lp-hero__h1 {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin: 0 0 1rem;
  letter-spacing: -0.03em;
  max-width: 780px;
}
.lp-hero__h1 span {
  background: linear-gradient(135deg, #007acc 0%, #00b4d8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.lp-hero__sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.75;
  max-width: 560px;
  margin: 0 0 2.5rem;
}
.lp-hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
.lp-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #007acc; color: #fff;
  padding: 0.85rem 1.75rem; border-radius: 8px;
  text-decoration: none; font-weight: 600; font-size: 0.95rem;
  transition: background 0.2s, transform 0.15s;
}
.lp-btn-primary:hover { background: #0063a6; transform: translateY(-2px); }
.lp-btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: rgba(255,255,255,0.75);
  padding: 0.85rem 1.75rem; border-radius: 8px;
  text-decoration: none; font-weight: 600; font-size: 0.95rem;
  border: 1px solid rgba(255,255,255,0.2);
  transition: border-color 0.2s, color 0.2s, transform 0.15s;
}
.lp-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: #fff; transform: translateY(-2px); }
.lp-hero__stats {
  display: flex; gap: 3rem; margin-top: 4rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  flex-wrap: wrap;
}
.lp-hero__stat-num { font-size: 2rem; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1; }
.lp-hero__stat-label { font-size: 0.82rem; color: rgba(255,255,255,0.45); margin-top: 4px; }

/* ===== SERVICES ===== */
.lp-services { background: #f8f9fb; padding: 6rem 2rem; }
.lp-section-inner { max-width: 1100px; margin: 0 auto; }
.lp-section-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #007acc; margin-bottom: 0.75rem; }
.lp-section-h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #0b1f3a; letter-spacing: -0.03em; line-height: 1.15; margin: 0 0 1rem; }
.lp-section-lead { font-size: 1rem; color: #5a6a80; line-height: 1.7; max-width: 540px; margin: 0 0 3rem; }
.lp-services__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; }
.lp-service-card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 16px;
  padding: 2rem; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.lp-service-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(11,61,145,0.1); border-color: rgba(0,122,204,0.3); }
.lp-service-card__icon { width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #e8f4fd, #cce7f7); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; font-size: 1.5rem; }
.lp-service-card__title { font-size: 1.05rem; font-weight: 700; color: #0b1f3a; margin: 0 0 0.5rem; }
.lp-service-card__en { font-size: 0.78rem; font-weight: 600; color: #007acc; letter-spacing: 0.05em; margin: 0 0 0.75rem; text-transform: uppercase; }
.lp-service-card__desc { font-size: 0.9rem; color: #5a6a80; line-height: 1.65; margin: 0; }
.lp-service-card__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 1.25rem; }
.lp-tag { font-size: 0.72rem; font-weight: 600; padding: 3px 10px; border-radius: 100px; background: #eef4fb; color: #0b3d91; }

/* ===== WHY ===== */
.lp-why { background: #fff; padding: 6rem 2rem; }
.lp-why__layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
.lp-why__card-stack { position: relative; height: 340px; }
.lp-stack-card { position: absolute; border-radius: 16px; padding: 1.5rem; }
.lp-stack-card--back { background: linear-gradient(135deg, #0b3d91, #007acc); width: 85%; height: 200px; top: 30px; right: 0; opacity: 0.25; transform: rotate(3deg); }
.lp-stack-card--mid { background: linear-gradient(135deg, #0b3d91, #007acc); width: 85%; height: 200px; top: 15px; right: 20px; opacity: 0.5; transform: rotate(1.5deg); }
.lp-stack-card--front { background: linear-gradient(135deg, #0b3d91, #1a6bc7); width: 85%; top: 0; right: 40px; box-shadow: 0 20px 50px rgba(11,61,145,0.3); color: #fff; padding: 2rem; }
.lp-stack-front__label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 1rem; }
.lp-stack-front__title { font-size: 1.15rem; font-weight: 700; margin-bottom: 1.25rem; line-height: 1.35; }
.lp-stack-front__items { list-style: none; padding: 0; margin: 0; }
.lp-stack-front__items li { font-size: 0.88rem; color: rgba(255,255,255,0.8); padding: 0.45rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 8px; }
.lp-stack-front__items li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #00b4d8; flex-shrink: 0; }
.lp-why__badge { position: absolute; bottom: 40px; left: 0; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.08); font-size: 0.88rem; font-weight: 600; color: #0b1f3a; }
.lp-why__badge-icon { width: 36px; height: 36px; border-radius: 8px; background: linear-gradient(135deg, #e8f4fd, #cce7f7); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
.lp-why__points { list-style: none; padding: 0; margin: 0 0 2rem; display: flex; flex-direction: column; gap: 1.25rem; }
.lp-why__point { display: flex; gap: 1rem; align-items: flex-start; }
.lp-why__point-num { font-size: 0.75rem; font-weight: 800; color: #007acc; background: #eef4fb; width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.lp-why__point-text strong { display: block; font-size: 0.97rem; font-weight: 700; color: #0b1f3a; margin-bottom: 3px; }
.lp-why__point-text p { font-size: 0.88rem; color: #5a6a80; margin: 0; line-height: 1.6; }

/* ===== CTA ===== */
.lp-cta { background: linear-gradient(135deg, #0b3d91 0%, #007acc 100%); padding: 6rem 2rem; text-align: center; }
.lp-cta__h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; color: #fff; letter-spacing: -0.03em; margin: 0 0 1rem; }
.lp-cta__sub { font-size: 1rem; color: rgba(255,255,255,0.7); margin: 0 auto 2.5rem; max-width: 500px; line-height: 1.7; }
.lp-cta__btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.lp-btn-white { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #0b3d91; padding: 0.85rem 1.75rem; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: background 0.2s, transform 0.15s; }
.lp-btn-white:hover { background: #f0f4f8; transform: translateY(-2px); }
.lp-btn-outline-white { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #fff; padding: 0.85rem 1.75rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95rem; border: 1.5px solid rgba(255,255,255,0.4); transition: border-color 0.2s, transform 0.15s; }
.lp-btn-outline-white:hover { border-color: #fff; transform: translateY(-2px); }

/* ===== FADE IN ===== */
.lp-fade { opacity: 0; transform: translateY(24px); transition: opacity 0.65s ease, transform 0.65s ease; }
.lp-fade.visible { opacity: 1; transform: none; }
.lp-fade-d1 { transition-delay: 0.1s; }
.lp-fade-d2 { transition-delay: 0.2s; }
.lp-fade-d3 { transition-delay: 0.3s; }
.lp-fade-d4 { transition-delay: 0.4s; }

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .lp-why__layout { grid-template-columns: 1fr; }
  .lp-why__visual { display: none; }
}
@media (max-width: 600px) {
  .lp-hero__stats { gap: 1.5rem; }
  .lp-hero, .lp-services, .lp-why, .lp-cta { padding-left: 1.25rem; padding-right: 1.25rem; }
}
</style>

<!-- ===== HERO ===== -->
<section class="lp-hero">
  <div class="lp-hero__grid"></div>
  <div class="lp-hero__glow"></div>
  <div class="lp-hero__glow2"></div>
  <div class="lp-hero__inner">
    <div class="lp-fade lp-fade-d1">
      <span class="lp-hero__eyebrow">Japan-based Technology Partner</span>
    </div>
    <h1 class="lp-hero__h1 lp-fade lp-fade-d2">
      Transform Your Business with<br><span>DX · ISR Drone & AI</span>
    </h1>
    <p class="lp-hero__sub lp-fade lp-fade-d3">
      Burai Live delivers end-to-end digital transformation — from drone system development
      to AI, web, and cloud — all from a single trusted partner in Japan.
    </p>
    <div class="lp-hero__ctas lp-fade lp-fade-d4">
      <a class="lp-btn-primary" href="/en/contact/">Contact Us</a>
      <a class="lp-btn-ghost" href="/en/services/">Our Services →</a>
    </div>
    <div class="lp-hero__stats lp-fade lp-fade-d4">
      <div>
        <div class="lp-hero__stat-num">DX</div>
        <div class="lp-hero__stat-label">Digital Transformation</div>
      </div>
      <div>
        <div class="lp-hero__stat-num">ISR</div>
        <div class="lp-hero__stat-label">Drone System Dev</div>
      </div>
      <div>
        <div class="lp-hero__stat-num">AI</div>
        <div class="lp-hero__stat-label">Agent & ML Solutions</div>
      </div>
      <div>
        <div class="lp-hero__stat-num">Cloud</div>
        <div class="lp-hero__stat-label">AWS / Azure / GCP</div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SERVICES ===== -->
<section class="lp-services">
  <div class="lp-section-inner">
    <p class="lp-section-label lp-fade">Our Services</p>
    <h2 class="lp-section-h2 lp-fade lp-fade-d1">Cutting-edge technology<br>to unlock your potential</h2>
    <p class="lp-section-lead lp-fade lp-fade-d2">From requirements to operations, Burai Live works as one team alongside you.</p>
    <div class="lp-services__grid">
      <div class="lp-service-card lp-fade lp-fade-d1">
        <div class="lp-service-card__icon">🚁</div>
        <p class="lp-service-card__en">Drone Systems</p>
        <h3 class="lp-service-card__title">DX & ISR Drone System Development</h3>
        <p class="lp-service-card__desc">We build advanced drone platforms integrating autonomous flight, real-time surveillance, and data analytics — for infrastructure inspection, logistics, and defense applications.</p>
        <div class="lp-service-card__tags">
          <span class="lp-tag">Autonomous Flight</span>
          <span class="lp-tag">ISR</span>
          <span class="lp-tag">MAVLink</span>
          <span class="lp-tag">LiDAR</span>
        </div>
      </div>
      <div class="lp-service-card lp-fade lp-fade-d2">
        <div class="lp-service-card__icon">🤖</div>
        <p class="lp-service-card__en">AI Solutions</p>
        <h3 class="lp-service-card__title">AI Solutions</h3>
        <p class="lp-service-card__desc">From AI agent development and machine learning models to generative AI integration — we automate and intelligentize your business with the latest technology.</p>
        <div class="lp-service-card__tags">
          <span class="lp-tag">LLM Integration</span>
          <span class="lp-tag">RAG</span>
          <span class="lp-tag">ML Models</span>
        </div>
      </div>
      <div class="lp-service-card lp-fade lp-fade-d3">
        <div class="lp-service-card__icon">🌐</div>
        <p class="lp-service-card__en">Web Development</p>
        <h3 class="lp-service-card__title">Web Development</h3>
        <p class="lp-service-card__desc">End-to-end coverage from requirements to design, implementation, and testing. We build scalable, maintainable web applications with modern frameworks.</p>
        <div class="lp-service-card__tags">
          <span class="lp-tag">React</span>
          <span class="lp-tag">Next.js</span>
          <span class="lp-tag">API Design</span>
        </div>
      </div>
      <div class="lp-service-card lp-fade lp-fade-d1">
        <div class="lp-service-card__icon">☁️</div>
        <p class="lp-service-card__en">Cloud Operations</p>
        <h3 class="lp-service-card__title">Cloud Operations</h3>
        <p class="lp-service-card__desc">Infrastructure design, CI/CD pipelines, 24/7 monitoring, and incident response on AWS, Azure, and GCP — balancing cost optimization and security.</p>
        <div class="lp-service-card__tags">
          <span class="lp-tag">AWS</span>
          <span class="lp-tag">Azure</span>
          <span class="lp-tag">Terraform</span>
        </div>
      </div>
      <div class="lp-service-card lp-fade lp-fade-d2">
        <div class="lp-service-card__icon">🏥</div>
        <p class="lp-service-card__en">Healthcare DX</p>
        <h3 class="lp-service-card__title">Healthcare DX</h3>
        <p class="lp-service-card__desc">EMR systems, telemedicine platforms, and medical data analytics — all built with HIPAA/GDPR compliance baked in.</p>
        <div class="lp-service-card__tags">
          <span class="lp-tag">EMR</span>
          <span class="lp-tag">Telemedicine</span>
          <span class="lp-tag">HIPAA</span>
        </div>
      </div>
      <div class="lp-service-card lp-fade lp-fade-d3">
        <div class="lp-service-card__icon">📊</div>
        <p class="lp-service-card__en">CFO & Back Office DX</p>
        <h3 class="lp-service-card__title">CFO Services & Back Office DX</h3>
        <p class="lp-service-card__desc">From financial strategy and management accounting to digitizing accounting, HR, and legal operations — we streamline your entire back office and accelerate decision-making.</p>
        <div class="lp-service-card__tags">
          <span class="lp-tag">CFO Advisory</span>
          <span class="lp-tag">Accounting DX</span>
          <span class="lp-tag">Automation</span>
        </div>
      </div>
    </div>
    <div style="margin-top:2rem; text-align:center;">
      <a href="/en/services/" class="lp-btn-primary" style="background:#0b3d91;">View All Services →</a>
    </div>
  </div>
</section>

<!-- ===== WHY BURAI ===== -->
<section class="lp-why">
  <div class="lp-section-inner">
    <div class="lp-why__layout">
      <div>
        <p class="lp-section-label lp-fade">Why Burai Live</p>
        <h2 class="lp-section-h2 lp-fade lp-fade-d1">A specialist team that bridges technology and business</h2>
        <ul class="lp-why__points">
          <li class="lp-why__point lp-fade lp-fade-d1">
            <span class="lp-why__point-num">01</span>
            <div class="lp-why__point-text">
              <strong>End-to-end from PoC to production</strong>
              <p>The same team takes responsibility from small-scale validation all the way to enterprise-grade production systems.</p>
            </div>
          </li>
          <li class="lp-why__point lp-fade lp-fade-d2">
            <span class="lp-why__point-num">02</span>
            <div class="lp-why__point-text">
              <strong>Rare expertise in Drone × Digital</strong>
              <p>One of Japan's few teams combining ISR drone development with AI and cloud capabilities.</p>
            </div>
          </li>
          <li class="lp-why__point lp-fade lp-fade-d3">
            <span class="lp-why__point-num">03</span>
            <div class="lp-why__point-text">
              <strong>Agile delivery in short cycles</strong>
              <p>Using Scrum and Kanban, we validate hypotheses quickly and deliver value iteratively.</p>
            </div>
          </li>
          <li class="lp-why__point lp-fade lp-fade-d4">
            <span class="lp-why__point-num">04</span>
            <div class="lp-why__point-text">
              <strong>Remote-friendly, Japan-wide</strong>
              <p>We work with partners across Japan and support clients in English as well.</p>
            </div>
          </li>
        </ul>
        <a href="/en/about/" class="lp-btn-primary" style="background:#0b3d91;">About Our Team →</a>
      </div>
      <div class="lp-why__visual lp-fade lp-fade-d2">
        <div class="lp-why__card-stack">
          <div class="lp-stack-card lp-stack-card--back"></div>
          <div class="lp-stack-card lp-stack-card--mid"></div>
          <div class="lp-stack-card lp-stack-card--front">
            <p class="lp-stack-front__label">Core Capabilities</p>
            <p class="lp-stack-front__title">Drone × AI × Cloud — Integrated Solutions</p>
            <ul class="lp-stack-front__items">
              <li>ISR & DX Drone System Design</li>
              <li>AI Agent / ML Model Development</li>
              <li>Cloud Infrastructure & Operations</li>
              <li>Web & Mobile App Development</li>
              <li>CFO Advisory & Back Office DX</li>
            </ul>
          </div>
          <div class="lp-why__badge">
            <div class="lp-why__badge-icon">🇯🇵</div>
            Japan-wide · Remote-ready
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA ===== -->
<section class="lp-cta">
  <div class="lp-section-inner">
    <h2 class="lp-cta__h2 lp-fade">Let's talk about<br>your project</h2>
    <p class="lp-cta__sub lp-fade lp-fade-d1">
      Whether it's DX & ISR drone development, AI solutions, web & cloud, or back office DX —
      feel free to reach out anytime.
    </p>
    <div class="lp-cta__btns lp-fade lp-fade-d2">
      <a href="/en/contact/" class="lp-btn-white">Contact Us →</a>
      <a href="mailto:admin@burai.live" class="lp-btn-outline-white">✉ admin@burai.live</a>
    </div>
  </div>
</section>

<script>
(function() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.lp-fade').forEach(function(el) { obs.observe(el); });
  document.querySelectorAll('.lp-hero .lp-fade').forEach(function(el) {
    setTimeout(function() { el.classList.add('visible'); },
      (parseInt(el.className.match(/lp-fade-d(\d)/)?.[1] || 0)) * 120);
  });
})();
</script>
