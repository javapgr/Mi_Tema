/* =========================================
   ISSLAM Theme - Global JavaScript
   ========================================= */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initStickyHeader();
  initMegaMenu();
  initSearchModal();
  initSmoothScroll();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('[data-mobile-menu-toggle]');
  const closeBtn = document.querySelector('[data-nav-close]');
  const nav = document.querySelector('.header__nav');
  
  if (!toggle || !nav) return;

  // Función para cerrar menú
  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  // Toggle menu
  toggle.addEventListener('click', function() {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Cerrar con botón X
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close menu when clicking on a link
  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Submenu toggle for mobile
  const menuItems = nav.querySelectorAll('.header__menu-item');
  menuItems.forEach(item => {
    const link = item.querySelector('.header__menu-link');
    const megaMenu = item.querySelector('.mega-menu');
    
    if (!megaMenu) return;

    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        megaMenu.classList.toggle('is-open');
        link.setAttribute('aria-expanded', megaMenu.classList.contains('is-open'));
      }
    });
  });
}

/**
 * Sticky Header with hide/show on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  let lastScroll = 0;
  const threshold = 100;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('header--hidden');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > threshold) {
      // Scrolling down
      header.classList.add('header--hidden');
    } else if (currentScroll < lastScroll) {
      // Scrolling up
      header.classList.remove('header--hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/**
 * Mega Menu Interactions
 */
function initMegaMenu() {
  const menuItems = document.querySelectorAll('.header__menu-item');

  menuItems.forEach(item => {
    const megaMenu = item.querySelector('.mega-menu');
    if (!megaMenu) return;

    // Keyboard navigation
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        megaMenu.classList.toggle('is-open');
      }
      if (e.key === 'Escape') {
        megaMenu.classList.remove('is-open');
      }
    });

    // Focus trap within mega menu
    const focusableElements = megaMenu.querySelectorAll('a, button');
    if (focusableElements.length > 0) {
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      lastElement.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && !e.shiftKey) {
          e.preventDefault();
          firstElement.focus();
        }
      });

      firstElement.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && e.shiftKey) {
          e.preventDefault();
          lastElement.focus();
        }
      });
    }
  });

  // Close mega menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.header__menu-item')) {
      document.querySelectorAll('.mega-menu.is-open').forEach(menu => {
        menu.classList.remove('is-open');
      });
    }
  });
}

/**
 * Search Modal
 */
function initSearchModal() {
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchModal = document.querySelector('[data-search-modal]');
  const searchClose = document.querySelectorAll('[data-search-close]');
  const searchInput = document.querySelector('.search-modal__input');

  if (!searchToggle || !searchModal) return;

  // Abrir modal
  searchToggle.addEventListener('click', function() {
    searchModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.focus();
    }
  });

  // Cerrar modal
  searchClose.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      searchModal.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Cerrar con ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal.classList.contains('is-open')) {
      searchModal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // Cerrar al hacer click en overlay
  const overlay = document.querySelector('.search-modal__overlay');
  if (overlay) {
    overlay.addEventListener('click', function() {
      searchModal.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Lazy Loading Images (fallback for older browsers)
 */
if ('loading' in HTMLImageElement.prototype === false) {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.src = img.dataset.src || img.src;
  });
}

/**
 * Cart Ajax Functions
 */
const CartAjax = {
  add: async function(id, quantity = 1) {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, quantity })
    });
    return response.json();
  },

  update: async function(updates) {
    const response = await fetch('/cart/update.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updates })
    });
    return response.json();
  },

  get: async function() {
    const response = await fetch('/cart.js');
    return response.json();
  }
};

// Export for global use
window.ISSLAM = {
  CartAjax
};
