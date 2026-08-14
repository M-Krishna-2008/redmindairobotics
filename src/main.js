import Lenis from '@studio-freight/lenis';
import { preloadFrames, resizeCanvas, updateCanvasScrollProgress, animateCanvas } from './canvasRenderer.js';

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2
});

// Update scroll progress on Lenis scroll event
lenis.on('scroll', ({ scroll, limit }) => {
  const progress = limit > 0 ? scroll / limit : 0;
  updateCanvasScrollProgress(progress);
  handleHeaderScroll(scroll);
});

// Fallback scroll listener
window.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0) {
    const progress = window.scrollY / maxScroll;
    updateCanvasScrollProgress(progress);
    handleHeaderScroll(window.scrollY);
  }
});

function handleHeaderScroll(scrollY) {
  const header = document.getElementById('header');
  if (!header) return;
  if (scrollY > 40) {
    header.classList.add('liquid-glass-nav', 'py-3');
    header.classList.remove('py-5');
  } else {
    header.classList.remove('liquid-glass-nav', 'py-3');
    header.classList.add('py-5');
  }
}

// WhatsApp Contact Form Handler (Contact Page)
function initWhatsAppForm() {
  const form = document.getElementById('whatsapp-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('full-name')?.value || '';
    const email = document.getElementById('work-email')?.value || '';
    const company = document.getElementById('company-org')?.value || 'N/A';
    const goal = document.getElementById('message-goal')?.value || '';

    const text = `Hello RedMind AI Robotics Team,\n\nI would like to inquire about robotic integration.\n\n👤 Name: ${name}\n✉️ Email: ${email}\n🏢 Company: ${company}\n🎯 Deployment Goal: ${goal}`;
    const whatsappUrl = `https://wa.me/918870734003?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
}

// Feasibility Advisory Request Form Handler (Consulting Page)
function initAdvisoryForm() {
  const form = document.getElementById('advisory-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameTitle = document.getElementById('work-name-title')?.value || '';
    const email = document.getElementById('work-email-consulting')?.value || '';
    const company = document.getElementById('company-industry')?.value || 'N/A';
    const goal = document.getElementById('consultation-goal')?.value || '';
    const context = document.getElementById('operational-context')?.value || '';

    const text = `Hello RedMind AI Robotics Solutions Team,\n\nI would like to submit an Advisory Intake Request.\n\n👤 Name & Title: ${nameTitle}\n✉️ Work Email: ${email}\n🏢 Company / Industry: ${company}\n🎯 Consultation Goal: ${goal}\n📋 Project Details: ${context}`;
    const whatsappUrl = `https://wa.me/918870734003?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
}

// Master RequestAnimationFrame Loop
function raf(time) {
  lenis.raf(time);
  animateCanvas();
  requestAnimationFrame(raf);
}

// Initialize on DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  // Setup Contact & Advisory Forms
  initWhatsAppForm();
  initAdvisoryForm();

  // Setup Canvas sizing & resize listener
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Preload frames and start animation loop
  preloadFrames(() => {
    // Initial progress sync
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll > 0) {
      updateCanvasScrollProgress(window.scrollY / maxScroll);
    }
  });

  // Start RAF loop
  requestAnimationFrame(raf);
});
