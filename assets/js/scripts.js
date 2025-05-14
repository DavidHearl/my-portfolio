const toggles = document.querySelectorAll('.job-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const entry = toggle.closest('.job-entry');
    entry.classList.toggle('open');

    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
  });
});


document.querySelectorAll('.expandable-row').forEach(row => {
row.addEventListener('click', () => {
    const next = row.nextElementSibling;
    if (next && next.classList.contains('hidden-row')) {
    next.style.display = next.style.display === 'table-row' ? 'none' : 'table-row';
    }
});
});
