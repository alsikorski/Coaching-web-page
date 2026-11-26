const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

document.querySelectorAll('.year').forEach(element => {
    element.textContent = String(new Date().getFullYear());
});
