/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: false,

});

sr.reveal(".home__header, .section__title", { delay: 400 });
sr.reveal('.home__footer', { delay: 500 })
sr.reveal('.home__img', { delay: 400, origin: "top" })
sr.reveal('.sponsor__img , .footer__logo , .footer__content', { delay: 400, origin: "top", interval: 100 })
sr.reveal('.specs__img , .discount__img', { delay: 400, origin: "right", interval: 100 })
sr.reveal(".specs__data, .discount__animate", { delay: 200, origin: "left", interval: 300 })

sr.reveal('.case__img', { delay: 200, origin: "top" })
sr.reveal('.case__data ,.footer__copy', { delay: 200, origin: "bottom" })
sr.reveal('.products__card', { delay: 300, origin: "bottom", interval: 200 })




