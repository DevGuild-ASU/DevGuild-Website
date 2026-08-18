const albumMenu = document.querySelector('.menu-toggle');
const albumNav = document.querySelector('.site-nav');
albumMenu?.addEventListener('click', () => { const open = albumNav.classList.toggle('open'); albumMenu.setAttribute('aria-expanded', String(open)); albumMenu.textContent = open ? '×' : '☰'; });

document.querySelectorAll('[data-album-slider]').forEach((albumSlider) => {
  const slides = [...albumSlider.querySelectorAll('.album-slide')];
  const dots = [...albumSlider.querySelectorAll('.slide-dot')];
  let index = 0;
  let startX = 0;
  let timer = null;
  const INTERVAL = 4000;

  const fitSlider = (slide) => {
    if (slide.naturalWidth && slide.naturalHeight) albumSlider.style.aspectRatio = `${slide.naturalWidth} / ${slide.naturalHeight}`;
  };
  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    fitSlider(slides[index]);
  };

  const startTimer = () => {
    stopTimer();
    timer = setInterval(() => show(index + 1), INTERVAL);
  };
  const stopTimer = () => { if (timer) { clearInterval(timer); timer = null; } };
  const resetTimer = () => { stopTimer(); startTimer(); };

  slides.forEach((slide) => slide.addEventListener('load', () => { if (slide.classList.contains('active')) fitSlider(slide); }));
  fitSlider(slides[0]);

  albumSlider.querySelector('.previous')?.addEventListener('click', () => { show(index - 1); resetTimer(); });
  albumSlider.querySelector('.next')?.addEventListener('click', () => { show(index + 1); resetTimer(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); resetTimer(); }));
  albumSlider.addEventListener('touchstart', (event) => { startX = event.changedTouches[0].clientX; stopTimer(); }, { passive: true });
  albumSlider.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - startX;
    if (Math.abs(distance) > 45) show(index + (distance < 0 ? 1 : -1));
    startTimer();
  }, { passive: true });

  albumSlider.addEventListener('mouseenter', stopTimer);
  albumSlider.addEventListener('mouseleave', startTimer);

  startTimer();
});
