const toggles = document.querySelectorAll('.job-toggle');

document.querySelectorAll('.job-entry').forEach(entry => {
    entry.addEventListener('click', function (e) {
        // Prevent toggle if clicking a link or selecting text
        const isInteractive = e.target.tagName === 'A' || e.target.closest('a');
        const isSelectable = window.getSelection().toString().length > 0;

        if (isInteractive || isSelectable) return;

        // Toggle the open state
        this.classList.toggle('open');

        // Update aria-expanded if you’re using it
        const button = this.querySelector('.job-toggle');
        if (button) {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', (!expanded).toString());
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
