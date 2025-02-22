let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-contetnt, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-contetnt h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contetnt p, .about-contentS', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Aspirant Engineer','Android Developer',''],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function checkCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    if (username === 'Shlok' && password === 'Shl@k') {
        errorMessage.classList.add('hiddenMSG');
        successMessage.classList.remove('hiddenMSG');
        setTimeout(() => {
            successMessage.classList.add('hiddenMSG');
        }, 5000); 

    } else {
        successMessage.classList.add('hiddenMSG');
        errorMessage.classList.remove('hiddenMSG');
    }
}
