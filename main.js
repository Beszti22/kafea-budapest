// Kafea Budapest - Main Interactive Script & Showstopper Motion

document.addEventListener('DOMContentLoaded', () => {
  // 0. Cinematic Real Coffee Pouring Intro Lifecycle
  const coffeeIntro = document.getElementById('coffeeIntro');
  const introVideo = document.getElementById('introVideo');
  const skipIntroBtn = document.getElementById('skipIntroBtn');
  const replayIntroBtn = document.getElementById('replayIntroBtn');
  let introTimer = null;

  function dismissIntro() {
    if (!coffeeIntro || coffeeIntro.classList.contains('fade-out')) return;
    coffeeIntro.classList.add('fade-out');
    clearTimeout(introTimer);
    setTimeout(() => {
      if (coffeeIntro.classList.contains('fade-out')) {
        coffeeIntro.style.display = 'none';
        if (introVideo) {
          introVideo.pause();
        }
      }
    }, 750);
  }

  function playIntro() {
    if (!coffeeIntro) return;
    coffeeIntro.style.display = 'flex';
    requestAnimationFrame(() => {
      coffeeIntro.classList.remove('fade-out');

      // Restart real footage from 0:00
      if (introVideo) {
        introVideo.currentTime = 0;
        const playPromise = introVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }

      // Force CSS animation restart on progress bar & text
      const progressFill = coffeeIntro.querySelector('.intro-progress-fill');
      if (progressFill) {
        progressFill.style.animation = 'none';
        void progressFill.offsetWidth; // trigger reflow
        progressFill.style.animation = '';
      }

      clearTimeout(introTimer);
      introTimer = setTimeout(dismissIntro, 2800);
    });
  }

  if (coffeeIntro) {
    // Attempt instant autoplay on load
    if (introVideo) {
      const playPromise = introVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }

    // Auto-dismiss after 2.8 seconds of authentic pour & crema formation
    introTimer = setTimeout(dismissIntro, 2800);

    // Tap or click anywhere on overlay to skip
    coffeeIntro.addEventListener('click', (e) => {
      dismissIntro();
    });

    if (skipIntroBtn) {
      skipIntroBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dismissIntro();
      });
    }

    // Dismiss with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && coffeeIntro && !coffeeIntro.classList.contains('fade-out')) {
        dismissIntro();
      }
    });
  }

  // Header Replay Button
  if (replayIntroBtn) {
    replayIntroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      playIntro();
    });
  }

  // 1. Initialize i18n
  if (window.KafeaI18n) {
    window.KafeaI18n.init();

    // Attach click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        window.KafeaI18n.setLanguage(lang);
        updateRealTimeStatus();
      });
    });
  }

  // 2. Real-Time Smart Opening Hours Engine
  function updateRealTimeStatus() {
    const statusEl = document.querySelector('[data-i18n="nav.openStatus"]');
    const pulseDot = document.querySelector('.pulse-dot');
    if (!statusEl) return;

    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;

    const isWeekend = (day === 0 || day === 6);
    const openTime = isWeekend ? (8 * 60 + 30) : (7 * 60 + 30);
    const closeTime = isWeekend ? (17 * 60) : (18 * 60);

    const lang = window.KafeaI18n ? window.KafeaI18n.currentLang : 'hu';

    if (currentTime >= openTime && currentTime < closeTime) {
      // Open
      const closeStr = isWeekend ? '17:00' : '18:00';
      statusEl.textContent = lang === 'en' 
        ? `Open right now! (Closes at ${closeStr})` 
        : `Most nyitva vagyunk! (Zárás: ${closeStr})`;
      if (pulseDot) {
        pulseDot.style.backgroundColor = '#22C55E';
        pulseDot.style.boxShadow = '0 0 12px rgba(34, 197, 94, 0.9)';
      }
    } else {
      // Closed
      statusEl.textContent = lang === 'en' 
        ? `Currently closed • Opens at 07:30 tomorrow` 
        : `Jelenleg zárva • Nyitás reggel 07:30-kor`;
      if (pulseDot) {
        pulseDot.style.backgroundColor = '#F59E0B';
        pulseDot.style.boxShadow = '0 0 10px rgba(245, 158, 11, 0.8)';
      }
    }
  }

  updateRealTimeStatus();
  setInterval(updateRealTimeStatus, 60000);

  // 3. Showstopper 3D Interactive Tilt & Specular Glare Effect
  const heroCardWrapper = document.getElementById('heroCardWrapper');
  const heroMainCard = document.getElementById('heroMainCard');
  const heroCardGlare = document.getElementById('heroCardGlare');

  if (heroCardWrapper && heroMainCard) {
    heroCardWrapper.addEventListener('mousemove', (e) => {
      const rect = heroCardWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate degrees (max 12 deg tilt)
      const rotateX = ((y - centerY) / centerY) * -11;
      const rotateY = ((x - centerX) / centerX) * 11;

      heroMainCard.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      if (heroCardGlare) {
        heroCardGlare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`;
      }
    });

    heroCardWrapper.addEventListener('mouseleave', () => {
      heroMainCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // 4. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isExpanded = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 5. Menu Tab Switching with Smooth Fade/Stagger
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const menuPanes = document.querySelectorAll('.menu-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-category');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      menuPanes.forEach(pane => {
        if (pane.id === `menu-${targetCategory}`) {
          pane.classList.add('active');
          // Add subtle entrance animation
          pane.style.animation = 'none';
          pane.offsetHeight; // trigger reflow
          pane.style.animation = 'fadeInUp 0.35s ease forwards';
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // 6. Reservation Form Handling
  const resForm = document.getElementById('reservationForm');
  const resSuccess = document.getElementById('reservationSuccess');

  if (resForm && resSuccess) {
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = resForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Rögzítés folyamatban...';
      submitBtn.disabled = true;

      setTimeout(() => {
        resForm.style.display = 'none';
        resSuccess.style.display = 'block';
        resSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    });
  }
});
