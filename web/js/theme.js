const themeButton = document.querySelector('#themeToggle');

const applyTheme = (theme) => {
  const isLight = theme === 'light';
  document.documentElement.classList.toggle('light', isLight);
  if (!themeButton) return;
  themeButton.setAttribute('aria-pressed', String(isLight));
  themeButton.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  themeButton.querySelector('.theme-icon').textContent = isLight ? '☾' : '☼';
  themeButton.querySelector('.theme-label').textContent = isLight ? 'Dark mode' : 'Light mode';
};

applyTheme(localStorage.getItem('devguild-theme') || 'dark');
themeButton?.addEventListener('click', () => {
  const nextTheme = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  localStorage.setItem('devguild-theme', nextTheme);
  applyTheme(nextTheme);
});
