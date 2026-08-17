const albumMenu = document.querySelector('.menu-toggle');
const albumNav = document.querySelector('.site-nav');
albumMenu?.addEventListener('click', () => { const open = albumNav.classList.toggle('open'); albumMenu.setAttribute('aria-expanded', String(open)); albumMenu.textContent = open ? '×' : '☰'; });

const albumSlider = document.querySelector('[data-album-slider]');
if (albumSlider) {
  const slides = [...albumSlider.querySelectorAll('.album-slide')];
  const dots = [...albumSlider.querySelectorAll('.slide-dot')];
  let index = 0;
  const fitSlider = (slide) => {
    if (slide.naturalWidth && slide.naturalHeight) albumSlider.style.aspectRatio = `${slide.naturalWidth} / ${slide.naturalHeight}`;
  };
  const show = (next) => { index = (next + slides.length) % slides.length; slides.forEach((slide, i) => slide.classList.toggle('active', i === index)); dots.forEach((dot, i) => dot.classList.toggle('active', i === index)); fitSlider(slides[index]); };
  slides.forEach((slide) => slide.addEventListener('load', () => { if (slide.classList.contains('active')) fitSlider(slide); }));
  fitSlider(slides[0]);
  albumSlider.querySelector('.previous').addEventListener('click', () => show(index - 1));
  albumSlider.querySelector('.next').addEventListener('click', () => show(index + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
}
