const toggles = document.querySelectorAll('.job-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const entry = toggle.closest('.job-entry');
    entry.classList.toggle('open');

    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
  });
});
