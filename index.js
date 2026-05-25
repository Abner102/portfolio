document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const toast = document.getElementById('toast');
  let toastTimeout;

  function setMenu(open) {
    siteNav?.classList.toggle('open', open);
    menuToggle?.classList.toggle('active', open);
    menuToggle?.setAttribute('aria-expanded', String(open));
    body.classList.toggle('menu-open', open);
  }

  function showToast(message) {
    if (!toast) return;
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function copyText(text, message) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text)
      .then(() => showToast(message))
      .catch(() => {});
  }

  menuToggle?.addEventListener('click', () => {
    setMenu(!siteNav?.classList.contains('open'));
  });

  siteNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  document.getElementById('emailContact')?.addEventListener('click', () => {
    copyText('preciousfavouromonya@gmail.com', 'Email copied.');
  });

  document.getElementById('phoneContact')?.addEventListener('click', () => {
    copyText('+2347088157068', 'Phone number copied.');
  });
});
