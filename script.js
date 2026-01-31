const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const icon = document.querySelector('.hamburger i');

function toggleMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active-icon');

    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        navLinks.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        navLinks.classList.remove('scrolled');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-el');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-el');
hiddenElements.forEach((el) => observer.observe(el));