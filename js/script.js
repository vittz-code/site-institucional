// Year
document.querySelectorAll('#ano').forEach(el => el.textContent = new Date().getFullYear());

// Hamburger menu
const nav = document.getElementById('nav');
const hamburger = document.getElementById('navHamburger');

hamburger?.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', open);
});

document.addEventListener('click', e => {
    if (nav && !nav.contains(e.target)) {
        nav.classList.remove('nav--open');
        hamburger?.setAttribute('aria-expanded', 'false');
    }
});

document.querySelectorAll('.nav__drawer a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        hamburger?.setAttribute('aria-expanded', 'false');
    });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
