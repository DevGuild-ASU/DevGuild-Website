const coverSlider = document.querySelector('[data-cover-slider]');

if (coverSlider) {
  const slides = [...coverSlider.querySelectorAll('.cover-slide')];
  const dots = [...coverSlider.querySelectorAll('.cover-dot')];
  let currentSlide = 0;
  let touchStartX = 0;

  const showSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentSlide));
    dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentSlide));
  };

  coverSlider.querySelector('.cover-prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
  coverSlider.querySelector('.cover-next')?.addEventListener('click', () => showSlide(currentSlide + 1));
  dots.forEach((dot, dotIndex) => dot.addEventListener('click', () => showSlide(dotIndex)));
  coverSlider.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
  coverSlider.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(distance) > 40) showSlide(currentSlide + (distance < 0 ? 1 : -1));
  }, { passive: true });
}
