(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* -------------------------------------------------------------------
     Project data: edit here to add or update a project.
     ------------------------------------------------------------------- */
  var PROJECTS = [
    {
      id: 'e-panchayat',
      name: 'E-Panchayat',
      badge: 'Featured',
      accent: true,
      kicker: 'AI decision support · Full-stack',
      summary: 'A bilingual platform that helps Gram Panchayat officials check scheme eligibility and query village data, with every answer traced back to its source.',
      flow: [
        ['users', 'Officials'],
        ['layout-dashboard', 'React + TS'],
        ['server', 'FastAPI', true],
        ['database', 'PostgreSQL'],
        ['sparkles', 'Gemini RAG']
      ],
      stack: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Gemini API', 'RAG', 'JWT'],
      github: 'https://github.com/Sujalj9146/E-Panchayat-1',
      meta: { Timeline: 'Aug – Nov 2026', Team: '3 members', Role: 'Backend developer' },
      mentor: 'Prof. Jyoti Gavhane',
      overview: 'Gram Panchayat officials deal with scattered records and dozens of government schemes. E-Panchayat brings that data into one bilingual web platform with an AI assistant on top. I was responsible for the backend.',
      highlights: [
        'Built the REST API in FastAPI on PostgreSQL, serving a React + TypeScript frontend.',
        'Implemented a Gemini-based RAG assistant that retrieves through SQL scoped to the user\'s role and village, and cites the source of every answer.',
        'Wrote deterministic eligibility logic for 29 government schemes, so decisions stay consistent and explainable instead of depending on the language model.',
        'Secured the API with JWT authentication and role-based access control (RBAC).',
        'Added an automated backend test suite.'
      ]
    },
    {
      id: 'medivault',
      name: 'MediVault',
      badge: 'Web app',
      kicker: 'Health records platform · Full-stack',
      summary: 'A secure web application for storing and managing digital medical records, with separate access for patients, doctors and admins.',
      flow: [
        ['user-round', 'Patient / Doctor'],
        ['shield-check', 'Auth & roles', true],
        ['file-text', 'Records CRUD'],
        ['database', 'MySQL']
      ],
      stack: ['JavaScript', 'HTML', 'CSS', 'SQL', 'MySQL'],
      github: 'https://github.com/Sujalj9146/MediVault',
      meta: { Timeline: 'Aug – Nov 2025', Team: '4 members', Role: 'Full-stack developer' },
      mentor: 'Prof. Dr. Anant Kaulage',
      overview: 'Medical records are often spread across paper files and different hospitals. MediVault keeps them in one place, and because health data is sensitive, access control was the core of the design.',
      highlights: [
        'Designed a relational MySQL schema for patients, doctors and medical records.',
        'Implemented role-based authentication so each role only reaches what it is allowed to.',
        'Built full create, read, update and delete flows for records.',
        'Added secure session handling to protect logged-in users.'
      ]
    },
    {
      id: 'fasalastra',
      name: 'FasalAstra',
      badge: 'Winner',
      accent: true,
      kicker: 'Computer vision · Edge AI',
      summary: 'Real-time weed detection on a Raspberry Pi that triggers spraying only where weeds are found. Winner of the MIT-ADT AI Grand Challenge 2026.',
      flow: [
        ['camera', 'Pi camera'],
        ['scan-eye', 'YOLO model', true],
        ['cpu', 'Raspberry Pi'],
        ['spray-can', 'Targeted spray']
      ],
      stack: ['Python', 'YOLO', 'OpenCV', 'Raspberry Pi', 'Pi-Cam OV5647'],
      github: 'https://github.com/Sujalj9146/Fasal-Astra',
      meta: { Timeline: 'Mar – Apr 2026', Team: '5 members', Award: 'AI Grand Challenge winner' },
      mentor: 'Dr. Rashmi S Nair',
      overview: 'Farmers usually spray an entire field even when weeds are only in patches. FasalAstra detects weeds in real time and sprays only those spots, which cuts chemical use and cost.',
      highlights: [
        'Custom-trained a lightweight YOLO model to tell weeds apart from crops.',
        'Ran real-time inference with OpenCV on a Raspberry Pi with a Pi-Cam OV5647.',
        'Triggered the sprayer only on detections, reducing chemical wastage.',
        'Won the MIT-ADT AI Grand Challenge 2026.'
      ]
    },
    {
      id: 'dhwani',
      name: 'Dhwani-Sanjeevani',
      badge: 'Deep learning',
      kicker: 'Healthcare AI · Audio',
      summary: 'A heart-sound analysis system that classifies recordings as normal or abnormal, with hardware for real-time capture and prediction.',
      flow: [
        ['stethoscope', 'Heart sound'],
        ['audio-waveform', 'Mel-spectrogram'],
        ['brain', 'Custom CNN', true],
        ['heart-pulse', 'Normal / Abnormal']
      ],
      stack: ['Python', 'CNN', 'Signal processing', 'ATmega2560'],
      github: 'https://github.com/Sujalj9146/DhwaniSanjeevani',
      meta: { Timeline: 'Feb – Apr 2026', Team: '4 members', Role: 'ML & integration' },
      mentor: 'Prof. Dr. Anant Kaulage',
      overview: 'Early detection of cardiovascular problems from heart sounds. Recordings are turned into Mel-spectrograms and classified by a CNN trained for the task.',
      highlights: [
        'Converted heart-sound audio into Mel-spectrograms for the model.',
        'Trained a custom CNN for normal and abnormal classification.',
        'Integrated ATmega2560-based hardware for real-time acquisition and prediction.',
        'Contributed to system integration and the real-time prediction workflow.'
      ]
    },
    {
      id: 'cogniflex',
      name: 'CogniFlex',
      badge: 'Internship',
      kicker: 'Gamified web platform',
      summary: 'A cognitive rehabilitation web platform with game-style exercises for memory and attention that adapt to each user.',
      flow: [
        ['gamepad-2', 'Exercises'],
        ['gauge', 'Adaptive difficulty', true],
        ['trending-up', 'Progress']
      ],
      stack: ['JavaScript', 'HTML', 'CSS', 'Python'],
      meta: { Timeline: 'Jun – Jul 2025', Org: 'IEEE EMBS Pune', Role: 'Student intern' },
      overview: 'Built during my internship with IEEE EMBS Pune. The platform turns rehabilitation exercises into short games so patients stay engaged.',
      highlights: [
        'Implemented adaptive difficulty that responds to user performance.',
        'Built the rehabilitation modules and application workflows.',
        'Worked on frontend–backend integration, testing and performance optimisation.'
      ]
    },
    {
      id: 'cardio',
      name: 'CardioRisk',
      badge: 'Research',
      kicker: 'Machine learning · Healthcare',
      summary: 'Machine learning models that predict cardiovascular disease and heart attack risk from clinical data, reaching 98% accuracy.',
      flow: [
        ['table-2', 'Clinical data'],
        ['filter', 'Preprocessing'],
        ['trees', 'Random Forest', true],
        ['activity', 'Risk score']
      ],
      stack: ['Python', 'Machine Learning', 'Random Forest', 'Data pipelines'],
      meta: { Timeline: 'Apr – Sep 2025', Org: 'IEEE CS Bangalore', Result: '98% accuracy' },
      overview: 'Research internship work on early risk assessment for heart disease using healthcare datasets.',
      highlights: [
        'Built data preprocessing pipelines for clinical datasets.',
        'Trained and compared models, with Random Forest reaching 98% accuracy.',
        'Worked in an agile research team.'
      ]
    }
  ];

  /* -------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function icon(name) { return '<i data-lucide="' + name + '"></i>'; }
  function renderIcons() { if (window.lucide) window.lucide.createIcons(); }

  function flowHTML(flow) {
    return flow.map(function (step, i) {
      var node = '<div class="flow__node' + (step[2] ? ' is-key' : '') + '">' +
        '<div class="flow__icon">' + icon(step[0]) + '</div><span>' + esc(step[1]) + '</span></div>';
      return (i ? '<div class="flow__arrow">' + icon('arrow-right') + '</div>' : '') + node;
    }).join('');
  }

  /* -------------------------------------------------------------------
     Project cards
     ------------------------------------------------------------------- */
  var grid = document.getElementById('projects');
  grid.innerHTML = PROJECTS.map(function (p, i) {
    var shown = p.stack.slice(0, 3);
    var extra = p.stack.length - shown.length;
    return '' +
      '<article class="card reveal" data-id="' + p.id + '" tabindex="0" aria-label="' + esc(p.name) + ', open details">' +
        '<div class="card__head">' +
          '<h3 class="card__title"><small>' + String(i + 1).padStart(2, '0') + '</small>' + esc(p.name) + '</h3>' +
          '<span class="badge' + (p.accent ? ' badge--accent' : '') + '">' + esc(p.badge) + '</span>' +
        '</div>' +
        '<div class="flow" aria-hidden="true">' + flowHTML(p.flow) + '</div>' +
        '<div class="card__body">' +
          '<span class="card__kicker">' + esc(p.kicker) + '</span>' +
          '<p>' + esc(p.summary) + '</p>' +
        '</div>' +
        '<div class="card__foot">' +
          '<div class="tags">' + shown.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') +
            (extra > 0 ? '<span class="tag">+' + extra + '</span>' : '') + '</div>' +
          '<div class="card__links">' +
            (p.github ? '<a href="' + p.github + '" target="_blank" rel="noopener" data-stop>GitHub' + icon('arrow-up-right') + '</a>' : '') +
            '<button type="button">Details' + icon('arrow-up-right') + '</button>' +
          '</div>' +
        '</div>' +
      '</article>';
  }).join('');

  /* -------------------------------------------------------------------
     Details dialog
     ------------------------------------------------------------------- */
  var modal = document.getElementById('modal');
  var modalBody = document.getElementById('modalBody');

  function openProject(id) {
    var p = PROJECTS.find(function (x) { return x.id === id; });
    if (!p) return;
    var meta = Object.keys(p.meta).map(function (k) {
      return '<div><dt>' + esc(k) + '</dt><dd>' + esc(p.meta[k]) + '</dd></div>';
    }).join('');

    modalBody.innerHTML =
      '<div class="modal__top">' +
        '<span class="badge' + (p.accent ? ' badge--accent' : '') + '">' + esc(p.badge) + '</span>' +
        '<button class="icon-btn" type="button" data-close aria-label="Close">' + icon('x') + '</button>' +
      '</div>' +
      '<h3 id="modalTitle">' + esc(p.name) + '</h3>' +
      '<p class="modal__sub">' + esc(p.kicker) + (p.mentor ? ' · Mentor: ' + esc(p.mentor) : '') + '</p>' +
      '<div class="flow" style="margin:24px 0 0" aria-hidden="true">' + flowHTML(p.flow) + '</div>' +
      '<dl class="modal__meta">' + meta + '</dl>' +
      '<h4>Overview</h4><p>' + esc(p.overview) + '</p>' +
      '<h4>What I did</h4><ul>' + p.highlights.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' +
      '<h4>Tech stack</h4><div class="tags">' + p.stack.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '<div class="modal__actions">' +
        (p.github ? '<a class="btn btn--primary" href="' + p.github + '" target="_blank" rel="noopener">' + icon('github') + 'View source</a>' : '') +
        '<button class="btn" type="button" data-close>Close</button>' +
      '</div>';

    renderIcons();
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modal.open) modal.close();
  }

  modal.addEventListener('close', function () { document.body.style.overflow = ''; });
  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.closest('[data-close]')) closeModal();
  });

  grid.addEventListener('click', function (e) {
    if (e.target.closest('[data-stop]')) return;
    var card = e.target.closest('.card');
    if (card) openProject(card.dataset.id);
  });
  grid.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
      e.preventDefault();
      openProject(e.target.dataset.id);
    }
  });

  /* -------------------------------------------------------------------
     Theme toggle
     ------------------------------------------------------------------- */
  var root = document.documentElement;
  document.getElementById('themeToggle').addEventListener('click', function () {
    var next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
  });

  /* -------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------- */
  var nav = document.getElementById('nav');
  var menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  /* -------------------------------------------------------------------
     Active nav link + reveal on scroll
     ------------------------------------------------------------------- */
  var links = nav.querySelectorAll('a');
  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('active', a.hash === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* -------------------------------------------------------------------
     Copy email + toast
     ------------------------------------------------------------------- */
  var toast = document.getElementById('toast');
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }

  document.getElementById('copyEmail').addEventListener('click', function () {
    var email = 'sujalj9146@gmail.com';
    var done = function () { showToast('Email copied to clipboard'); };
    if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, function () { showToast(email); });
    else showToast(email);
  });

  /* -------------------------------------------------------------------
     Polish: cursor spotlight, reading progress, stat count-up
     ------------------------------------------------------------------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('pointermove', function (e) {
    var el = e.target.closest && e.target.closest('.card, .stat, .edu__card');
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  var bar = document.createElement('div');
  bar.className = 'progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var ticking = false;
  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--progress', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  updateProgress();

  // Count numeric stats up from zero the first time they scroll into view.
  var statNums = document.querySelectorAll('.stat b');
  function countUp(el) {
    var text = el.textContent.trim();
    var m = text.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!m || reduceMotion) return;
    var target = parseFloat(m[1]);
    var decimals = (m[1].split('.')[1] || '').length;
    var suffix = m[2];
    var start = null;
    var duration = 1100;
    function frame(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window) {
    var statIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); statIO.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    statNums.forEach(function (n) { statIO.observe(n); });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  renderIcons();
})();
