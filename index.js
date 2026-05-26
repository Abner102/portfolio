document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const toast = document.getElementById('toast');
  let toastTimeout;

  // Birthday countdown functionality
  function updateCountdown() {
    const birthdayDate = new Date('June 14, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
      // Birthday has arrived
      document.getElementById('daysRemaining').textContent = '0';
      document.getElementById('hoursRemaining').textContent = '0';
      document.getElementById('minutesRemaining').textContent = '0';
      document.getElementById('secondsRemaining').textContent = '0';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('daysRemaining').textContent = days;
    document.getElementById('hoursRemaining').textContent = hours;
    document.getElementById('minutesRemaining').textContent = minutes;
    document.getElementById('secondsRemaining').textContent = seconds;
  }

  // Initialize countdown and update every second
  updateCountdown();
  setInterval(updateCountdown, 1000);

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
