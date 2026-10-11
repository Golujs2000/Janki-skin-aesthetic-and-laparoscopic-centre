/**
 * Janki Skin Aesthetic & Laparoscopic Centre - Interactive JavaScript
 * Responsive UI, WhatsApp Appointment Engine, Lightbox Gallery & Dynamic Tabs
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll state
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Navigation Drawer
  const mobileBtn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');
  const navLinks = document.getElementById('nav-links-menu') || document.querySelector('.nav-links');
  const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  const openDrawer = () => {
    if (navLinks) {
      navLinks.classList.add('open');
      navLinks.setAttribute('aria-hidden', 'false');
    }
    if (mobileBackdrop) {
      mobileBackdrop.classList.add('active');
    }
    document.body.classList.add('menu-open');
    if (mobileBtn) {
      mobileBtn.setAttribute('aria-expanded', 'true');
      mobileBtn.classList.add('active');
    }
  };

  const closeDrawer = () => {
    if (navLinks) {
      navLinks.classList.remove('open');
      navLinks.setAttribute('aria-hidden', 'true');
    }
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('active');
    }
    document.body.classList.remove('menu-open');
    if (mobileBtn) {
      mobileBtn.setAttribute('aria-expanded', 'false');
      mobileBtn.classList.remove('active');
    }
  };

  if (mobileBtn) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = navLinks && navLinks.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    });
    mobileBackdrop.addEventListener('touchend', (e) => {
      e.preventDefault();
      closeDrawer();
    }, { passive: false });
  }

  // Close when clicking any nav link
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Auto close if viewport resized to desktop view
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && navLinks && navLinks.classList.contains('open')) {
      closeDrawer();
    }
  });

  // 3. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // 4. Services / Treatment Tabs
  const tabBtns = document.querySelectorAll('.service-tab-btn');
  const tabPanes = document.querySelectorAll('.services-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`tab-${targetId}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // Department banner tab switch triggers
  document.querySelectorAll('.switch-tab-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-switch');
      const tabBtn = document.querySelector(`.service-tab-btn[data-target="${target}"]`);
      if (tabBtn) {
        tabBtn.click();
        tabBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // 5. Gallery Filter System
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.3s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 6. Lightbox Modal
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  const openLightbox = (imgSrc, altText, captionText) => {
    if (lightbox && lightboxImg) {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = altText || 'Clinical Visual';
      if (lightboxCaption) {
        lightboxCaption.textContent = captionText || '';
      }
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Gallery Photos Lightbox Trigger
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-overlay-title');
      if (img) {
        openLightbox(img.src, img.alt || 'Clinic Photo', title ? title.textContent : '');
      }
    });
  });

  // Treatment Service Cards - Thumbnail & "View Poster" Lightbox Triggers
  document.querySelectorAll('.service-card').forEach(card => {
    const thumbWrapper = card.querySelector('.service-thumb-wrapper');
    const actionBtn = card.querySelector('.service-thumb-action-btn');
    const cardTitleEl = card.querySelector('.service-title');
    const cardTitle = cardTitleEl ? cardTitleEl.textContent.trim() : 'Treatment Details';
    const thumbImg = card.querySelector('.service-thumb-img');
    const posterSrc = actionBtn ? actionBtn.getAttribute('data-poster') : null;

    if (actionBtn) {
      actionBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = posterSrc || (thumbImg ? thumbImg.src : '');
        if (src) {
          openLightbox(src, cardTitle, `${cardTitle} • Clinical Information`);
        }
      });
    }

    if (thumbWrapper) {
      thumbWrapper.addEventListener('click', (e) => {
        if (!e.target.closest('.service-thumb-action-btn')) {
          const src = posterSrc || (thumbImg ? thumbImg.src : '');
          if (src) {
            openLightbox(src, cardTitle, `${cardTitle} • Treatment Visual`);
          }
        }
      });
    }
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 7. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 8. Quick Doctor Selection from Cards
  const quickDocBtns = document.querySelectorAll('[data-select-doctor]');
  quickDocBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const docName = btn.getAttribute('data-select-doctor');
      const docSelect = document.getElementById('booking-doctor');
      const deptSelect = document.getElementById('booking-dept');

      if (docSelect) {
        docSelect.value = docName;
      }

      if (deptSelect) {
        if (docName.includes('Rashmi')) {
          deptSelect.value = 'Aesthetic Dermatology & Skin Care';
        } else if (docName.includes('Sagar')) {
          deptSelect.value = 'Laparoscopic & General Surgery';
        }
      }

      const bookingSection = document.getElementById('book-appointment');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 9. Interactive WhatsApp Appointment Engine
  const bookingForm = document.getElementById('appointment-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patient-name')?.value.trim();
      const phone = document.getElementById('patient-phone')?.value.trim();
      const dept = document.getElementById('booking-dept')?.value;
      const doctor = document.getElementById('booking-doctor')?.value;
      const date = document.getElementById('booking-date')?.value;
      const time = document.getElementById('booking-time')?.value;
      const notes = document.getElementById('patient-notes')?.value.trim() || 'General Consultation';

      if (!name || !phone) {
        showToast('Please enter patient name and contact number.', 'error');
        return;
      }

      // Pre-formatted professional WhatsApp message
      const textMessage = `*New Appointment Request - Janki Skin & Laparoscopic Centre*\n` +
        `-----------------------------------------\n` +
        `👤 *Patient Name:* ${name}\n` +
        `📞 *Contact Number:* ${phone}\n` +
        `🏥 *Department:* ${dept}\n` +
        `👨‍⚕️ *Consultant Doctor:* ${doctor}\n` +
        `📅 *Preferred Date:* ${date || 'Earliest Available'}\n` +
        `⏰ *Preferred Time:* ${time || 'Any Slot'}\n` +
        `📝 *Health Concern:* ${notes}\n` +
        `-----------------------------------------\n` +
        `_Requested via Official Website (Forbesganj Clinic)_`;

      const encodedMsg = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/917909067784?text=${encodedMsg}`;

      showToast('Opening WhatsApp to confirm your appointment...', 'success');

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 700);
    });
  }

  // Set default minimum date to today
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});

// Toast notification helper
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.className = `toast-notice show ${type}`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// -------------------------------------------------------------
// Single Huge Dynamic Smooth Morphing Shape Canvas Art Engine
// (Zero sharp corners, silky organic spline curves & luxury medical glow)
// -------------------------------------------------------------
function initHeroGeometricCanvas() {
  const canvas = document.getElementById('heroGeometricCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    if (!canvas.parentElement) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width || 560;
    height = rect.height || 640;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  const numPoints = 12; // 12 anchor nodes connected via quadratic Bézier curves guarantee 0 sharp corners

  function drawSmoothBlob(cx, cy, baseRadius, timeVal, scaleFactor, strokeStyle, fillStyle, isDashed) {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;

      // Harmonic low-frequency Fourier perturbations - guaranteed continuous curvature with zero sharp corners
      const h1 = Math.sin(angle * 2 + timeVal * 0.75) * 0.16;
      const h2 = Math.cos(angle * 3 - timeVal * 0.55) * 0.11;
      const h3 = Math.sin(angle * 4 + timeVal * 0.35 + 1.2) * 0.06;
      const h4 = Math.cos(angle * 1 + timeVal * 0.45) * 0.08;

      const r = baseRadius * scaleFactor * (1 + h1 + h2 + h3 + h4);
      points.push({
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r
      });
    }

    // Draw perfectly smooth closed spline using quadratic Bézier midpoint interpolation (Zero Sharp Corners!)
    ctx.beginPath();
    const firstMidX = (points[0].x + points[1].x) / 2;
    const firstMidY = (points[0].y + points[1].y) / 2;
    ctx.moveTo(firstMidX, firstMidY);

    for (let i = 1; i < numPoints; i++) {
      const nextIndex = (i + 1) % numPoints;
      const midX = (points[i].x + points[nextIndex].x) / 2;
      const midY = (points[i].y + points[nextIndex].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
    }
    ctx.quadraticCurveTo(points[0].x, points[0].y, firstMidX, firstMidY);
    ctx.closePath();

    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }

    if (strokeStyle) {
      ctx.save();
      if (isDashed) {
        ctx.setLineDash([7, 7]);
      }
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = isDashed ? 1.6 : 2.5;
      ctx.stroke();
      ctx.restore();
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Center of the single huge shape
    const cx = width * 0.5;
    const cy = height * 0.44;
    // Huge base radius filling the portrait backdrop
    const baseRadius = Math.max(Math.min(width, height) * 0.42, 190);

    // 1. Ambient soft radial aura glow
    const ambientGrad = ctx.createRadialGradient(cx, cy, baseRadius * 0.2, cx, cy, baseRadius * 1.35);
    ambientGrad.addColorStop(0, 'rgba(225, 29, 72, 0.12)');
    ambientGrad.addColorStop(0.45, 'rgba(13, 148, 136, 0.09)');
    ambientGrad.addColorStop(0.8, 'rgba(217, 119, 6, 0.04)');
    ambientGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.save();
    ctx.fillStyle = ambientGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, baseRadius * 1.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 2. Main Huge Organic Morphing Shape (No sharp corners)
    ctx.save();
    ctx.shadowColor = 'rgba(225, 29, 72, 0.25)';
    ctx.shadowBlur = 35;

    const mainGrad = ctx.createLinearGradient(cx - baseRadius, cy - baseRadius, cx + baseRadius, cy + baseRadius);
    mainGrad.addColorStop(0, 'rgba(244, 63, 94, 0.08)');
    mainGrad.addColorStop(0.5, 'rgba(13, 148, 136, 0.07)');
    mainGrad.addColorStop(1, 'rgba(251, 191, 36, 0.04)');

    drawSmoothBlob(cx, cy, baseRadius, t, 1.0, 'rgba(225, 29, 72, 0.35)', mainGrad, false);
    ctx.restore();

    // 3. Concentric Inner Ripple Layer (Smooth fluid contour, zero sharp corners)
    drawSmoothBlob(cx, cy, baseRadius, t + 0.6, 0.82, 'rgba(13, 148, 136, 0.28)', null, true);

    // 4. Third Deep Inner Aura Layer
    drawSmoothBlob(cx, cy, baseRadius, t + 1.2, 0.62, 'rgba(217, 119, 6, 0.20)', 'rgba(240, 253, 250, 0.16)', false);

    // Advance time smoothly for fluid organic morphing
    t += 0.012;
    requestAnimationFrame(render);
  }

  render();
}

// Initialize dynamic canvas art on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroGeometricCanvas);
} else {
  initHeroGeometricCanvas();
}
