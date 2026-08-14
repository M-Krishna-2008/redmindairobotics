// Canvas Frame Renderer for 210-frame scroll animation sequence
const TOTAL_FRAMES = 210;
const images = [];
let loadedCount = 0;
let currentProgress = 0;
let targetProgress = 0;
let lastRenderedFrame = -1;

const canvas = document.getElementById('bg-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const loaderEl = document.getElementById('loader-percentage');
const preloader = document.getElementById('preloader');

// Preload all 210 updated background frames
export function preloadFrames(onComplete) {
  if (!canvas || !ctx) return;

  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    const frameNumber = String(i).padStart(3, '0');
    img.src = `${cleanBaseUrl}background pics/ezgif-frame-${frameNumber}.jpg`;

    img.onload = () => {
      loadedCount++;
      const percent = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
      if (loaderEl) loaderEl.innerText = `${percent}%`;

      if (loadedCount === TOTAL_FRAMES) {
        if (preloader) {
          preloader.classList.add('opacity-0', 'pointer-events-none');
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 700);
        }
        if (onComplete) onComplete();
      }
    };

    img.onerror = () => {
      loadedCount++;
      if (loadedCount === TOTAL_FRAMES && onComplete) onComplete();
    };

    images.push(img);
  }
}

// Draw image cover logic
export function drawFrame(frameIndex) {
  if (!canvas || !ctx || !images[frameIndex]) return;

  const img = images[frameIndex];
  if (!img.complete) return;

  const width = canvas.width;
  const height = canvas.height;

  const imgAspect = img.naturalWidth / img.naturalHeight;
  const canvasAspect = width / height;

  let renderW, renderH, offsetX, offsetY;

  if (canvasAspect > imgAspect) {
    renderW = width;
    renderH = width / imgAspect;
    offsetX = 0;
    offsetY = (height - renderH) / 2;
  } else {
    renderH = height;
    renderW = height * imgAspect;
    offsetX = (width - renderW) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  lastRenderedFrame = frameIndex;
}

export function resizeCanvas() {
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  if (lastRenderedFrame >= 0) {
    drawFrame(lastRenderedFrame);
  }
}

export function updateCanvasScrollProgress(progress) {
  targetProgress = Math.max(0, Math.min(1, progress));
}

export function getFrameIndex() {
  return Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(currentProgress * (TOTAL_FRAMES - 1))));
}

export function animateCanvas() {
  // Smooth lerp for smooth scroll sync
  currentProgress += (targetProgress - currentProgress) * 0.1;

  const frameIndex = getFrameIndex();

  if (frameIndex !== lastRenderedFrame) {
    drawFrame(frameIndex);
  }
}
