// Kafea Budapest - Main Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize i18n
  if (window.KafeaI18n) {
    window.KafeaI18n.init();

    // Attach click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        window.KafeaI18n.setLanguage(lang);
      });
    });
  }

  // 2. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isExpanded = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Menu Tab Switching
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const menuPanes = document.querySelectorAll('.menu-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-category');

      // Update active button
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active pane
      menuPanes.forEach(pane => {
        if (pane.id === `menu-${targetCategory}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // 4. Reservation Form Handling
  const resForm = document.getElementById('reservationForm');
  const resSuccess = document.getElementById('reservationSuccess');

  if (resForm && resSuccess) {
    // Set default date to today or tomorrow
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = resForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Rögzítés...';
      submitBtn.disabled = true;

      setTimeout(() => {
        resForm.style.display = 'none';
        resSuccess.style.display = 'block';
        resSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 600);
    });
  }
});
