const toggles = document.querySelectorAll('.job-toggle');

document.querySelectorAll('.job-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const entry = button.closest('.job-entry');
        const expanded = button.getAttribute('aria-expanded') === 'true';

        // Collapse all other entries
        document.querySelectorAll('.job-entry').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.job-toggle').setAttribute('aria-expanded', 'false');
        });

        // Toggle the clicked one
        if (!expanded) {
        entry.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        }
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
