// ===================================
// Navigation Scroll Effect
// ===================================
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Update active nav link based on scroll position
  updateActiveNavLink();
});

// ===================================
// Active Navigation Link
// ===================================
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section, main');
  const scrollPosition = window.scrollY + 200;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Mobile Menu Toggle
// ===================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// ===================================
// Parallax Effect for Main Section
// ===================================
const mainSection = document.querySelector('.main-section');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (mainSection) {
    mainSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
  }
});

// ===================================
// Fade-in Animation on Scroll
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe placeholder sections
const placeholderSections = document.querySelectorAll('.section-placeholder');
placeholderSections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// ===================================
// Slogan Section Scroll Animation
// ===================================
const sloganObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animate class to trigger animations
      const sloganHeader = document.querySelector('.slogan-header');
      const sloganBrand = document.querySelector('.slogan-brand');
      const sloganMain = document.querySelector('.slogan-main');
      const sloganSubtitle = document.querySelector('.slogan-subtitle');
      const sloganFooter = document.querySelector('.slogan-footer');
      const sloganLogo = document.querySelector('.slogan-logo');
      
      if (sloganHeader) sloganHeader.classList.add('animate');
      if (sloganBrand) sloganBrand.classList.add('animate');
      if (sloganMain) sloganMain.classList.add('animate');
      if (sloganSubtitle) sloganSubtitle.classList.add('animate');
      if (sloganFooter) sloganFooter.classList.add('animate');
      if (sloganLogo) sloganLogo.classList.add('animate');
      
      // Unobserve after animation is triggered
      sloganObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px'
});

// Observe slogan section
const sloganSection = document.querySelector('.slogan-section');
if (sloganSection) {
  sloganObserver.observe(sloganSection);
}

// ===================================
// Image Showcase Scroll Animation
// ===================================
const showcaseObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      showcaseObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px'
});

const showcaseAnims = document.querySelectorAll('.slide-from-left, .slide-from-right, .philosophy-center-diagram, .fade-in-up, .scale-in');
showcaseAnims.forEach(anim => {
  showcaseObserver.observe(anim);
});

// ===================================
// CTA Button Ripple Effect
// ===================================
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎨 Parfait Landing Page Loaded');
  updateActiveNavLink();
});
