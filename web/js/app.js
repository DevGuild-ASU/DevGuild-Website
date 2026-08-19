const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const pageLoader = document.querySelector('#pageLoader');

if (pageLoader) {
  const navigationEntry = performance.getEntriesByType('navigation')[0];
  const isRefresh = navigationEntry?.type === 'reload';
  const hasEnteredSite = sessionStorage.getItem('devguild-site-entered') === 'true';

  if (!hasEnteredSite || isRefresh) {
    sessionStorage.setItem('devguild-site-entered', 'true');
    window.addEventListener('load', () => {
      window.setTimeout(() => pageLoader.classList.add('is-hidden'), 4000);
    });
  } else {
    pageLoader.classList.add('is-hidden');
  }
}

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
