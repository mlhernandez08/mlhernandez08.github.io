/* ================================================================
   js/main.js
   ================================================================
   Handles:
   - Rendering project cards from projects.js data
   - Rendering devlog cards from devlog.js data
   - Modal open / close / scroll (for both)
   - Project tag filtering
   - Active nav highlight on scroll
   - Fade-in animations on scroll
   ================================================================ */

(function () {
  'use strict';

  /* ── MODAL STATE ──────────────────────────────────────────── */
  const overlay  = document.getElementById('modal-overlay');
  const modalBox = document.getElementById('modal-box');

  function openModal(eyebrow, title, meta, bodyHTML) {
    document.getElementById('modal-eyebrow').textContent = eyebrow;
    document.getElementById('modal-title').textContent   = title;
    document.getElementById('modal-meta').textContent    = meta;
    document.getElementById('modal-body').innerHTML      = bodyHTML;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    // Reset scroll position on each open
    document.getElementById('modal-body').scrollTop = 0;
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ── BUILD MODAL BODY HTML ────────────────────────────────── */
  function buildModalBody(data) {
    let html = '';

    // Tags
    if (data.tags && data.tags.length) {
      html += '<div class="modal-tags">';
      data.tags.forEach(t => { html += `<span class="modal-tag">${escHtml(t)}</span>`; });
      html += '</div>';
    }

    // Body paragraphs
    if (data.body && data.body.length) {
      data.body.forEach(p => { html += `<p>${escHtml(p)}</p>`; });
    }

    // Optional section with bullet points
    if (data.sectionHeader || data.techHeader) {
      const header = data.sectionHeader || data.techHeader;
      const points = data.sectionPoints || data.techPoints;
      html += `<h3>${escHtml(header)}</h3>`;
      if (points && points.length) {
        html += '<ul>';
        points.forEach(pt => { html += `<li>${escHtml(pt)}</li>`; });
        html += '</ul>';
      }
    }

    // Image gallery
    if (data.images && data.images.length) {
      html += '<div class="modal-gallery">';
      data.images.forEach(img => {
        html += `<img src="${escHtml(img.src)}" alt="${escHtml(img.alt)}"${img.full ? ' class="full"' : ''}>`;
      });
      html += '</div>';
    }

    // Links row
    if (data.links && data.links.length) {
      html += '<div class="modal-links">';
      data.links.forEach(link => {
        html += `<a class="modal-link" href="${escHtml(link.href)}" target="_blank" rel="noopener">${escHtml(link.label)}</a>`;
      });
      html += '</div>';
    }

    return html;
  }

  /* ── RENDER PROJECTS ──────────────────────────────────────── */
  function renderProjects() {
    const row = document.getElementById('projects-row');
    if (!row || typeof PROJECTS === 'undefined') return;

    PROJECTS.forEach(function (proj, idx) {
      const card = document.createElement('article');
      card.className = 'proj-card fade-in';
      card.dataset.tags = (proj.tags || []).join(' ');

      // Thumbnail — real image or geometric placeholder
      const thumbHTML = proj.thumb
        ? `<img class="proj-thumb" src="${escHtml(proj.thumb)}" alt="${escHtml(proj.thumbAlt || proj.title)}" loading="lazy">`
        : `<div class="proj-thumb-placeholder">[ Preview ]</div>`;

      // Tags pill row
      const tagPills = (proj.tags || []).map(t =>
        `<span class="proj-tag">${escHtml(t.replace(/-/g, ' '))}</span>`
      ).join('');

      card.innerHTML = `
        <div class="top-bar" aria-hidden="true"></div>
        ${thumbHTML}
        <div class="proj-body">
          <div class="proj-eyebrow">${escHtml(proj.eyebrow || '')}</div>
          <div class="proj-name">${escHtml(proj.title)}</div>
          <p class="proj-desc">${escHtml(proj.summary)}</p>
          <div class="proj-tags">${tagPills}</div>
        </div>
        <button class="card-open-btn" aria-label="View details for ${escHtml(proj.title)}">
          View Details ◆
        </button>`;

      // Click anywhere on card OR the button → open modal
      card.addEventListener('click', function () {
        const bodyHTML = buildModalBody(proj);
        openModal(
          proj.modalEyebrow || proj.eyebrow || '',
          proj.title,
          proj.modalMeta || '',
          bodyHTML
        );
      });

      row.appendChild(card);
    });
  }

  /* ── RENDER DEVLOG ────────────────────────────────────────── */
  function renderDevlog() {
    const row = document.getElementById('devlog-row');
    if (!row || typeof DEVLOG === 'undefined') return;

    DEVLOG.forEach(function (entry) {
      const card = document.createElement('article');
      card.className = 'devlog-card fade-in';

      card.innerHTML = `
        <div class="d-diamond" aria-hidden="true"></div>
        <div class="devlog-date">${escHtml(entry.date)}</div>
        <div class="devlog-entry-num">${escHtml(entry.entryNum)}</div>
        <div class="devlog-title">${escHtml(entry.title)}</div>
        <p class="devlog-preview">${escHtml(entry.preview)}</p>
        <button class="card-open-btn" aria-label="Read full entry: ${escHtml(entry.title)}">
          Read Entry ◆
        </button>`;

      card.addEventListener('click', function () {
        const bodyHTML = buildModalBody(entry);
        openModal(
          entry.entryNum,
          entry.title,
          entry.date,
          bodyHTML
        );
      });

      row.appendChild(card);
    });
  }

  /* ── PROJECT TAG FILTER ───────────────────────────────────── */
  function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.proj-card').forEach(function (card) {
          if (filter === 'all') {
            card.style.display = '';
          } else {
            const tags = (card.dataset.tags || '').split(' ');
            card.style.display = tags.includes(filter) ? '' : 'none';
          }
        });
      });
    });
  }

  /* ── ACTIVE NAV ON SCROLL ─────────────────────────────────── */
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#site-nav a');
    if (!sections.length) return;

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle(
              'is-active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(s => io.observe(s));
  }

  /* ── FADE-IN ON SCROLL ────────────────────────────────────── */
  function initFadeIn() {
    const items = document.querySelectorAll('.fade-in');
    if (!items.length) return;

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    items.forEach(el => io.observe(el));
  }

  /* ── SMOOTH SCROLL for anchor links ──────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── UTIL: escape HTML ────────────────────────────────────── */
  function escHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── INIT ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    renderDevlog();
    initFilters();
    initNavHighlight();
    // Small delay so dynamically rendered cards get observed
    requestAnimationFrame(function () { initFadeIn(); });
    initSmoothScroll();
  });

}());
