const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const pageLoader = document.querySelector('#pageLoader');

window.addEventListener('load', () => {
  window.setTimeout(() => pageLoader?.classList.add('is-hidden'), 4000);
});

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  });
});

const revealItems = document.querySelectorAll('.feature-card, .program-list article, .timeline article, .quote-card, .policy-section.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});
