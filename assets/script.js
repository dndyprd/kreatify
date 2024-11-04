let checkNavbar = 1;
const menu = document.querySelector('.nav-menu');
const mobileNav = document.querySelector('.nav-mobile');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo-img');

// NAVBAR MOBILE
function mobileMenu() {
    if (checkNavbar === 1) {
        checkNavbar = 0;
        menu.classList.add('active');
        mobileNav.classList.add('active');
        navbar.classList.add('active');
        logo.src = 'assets/img/logo_color.png';
    } else {
        checkNavbar = 1;
        menu.classList.remove('active');
        mobileNav.classList.remove('active');
        
        // CHECK KALAU MOBILE MENU ADA DI HOME
        if (window.scrollY < 10) {
            // Ganti Logo Setelah Blank Tertutup
            setTimeout(() => {
                logo.src = 'assets/img/logo.png';
            }, 250);
            navbar.classList.remove('active');
        } else {
            logo.src = 'assets/img/logo_color.png';
        }
    }
}

// NAVBAR ACTIVE
function navbarScroll() {
    if (window.scrollY >= 10) {
        navbar.classList.add('active');
        logo.src = 'assets/img/logo_color.png';
    } else {
        if (mobileNav.classList.contains('active')) {
            navbar.classList.add('active');
            logo.src = 'assets/img/logo_color.png';
        } else {
            navbar.classList.remove('active');
            logo.src = 'assets/img/logo.png';
        }
    }
}
window.addEventListener('scroll', navbarScroll);

// SCROLL AND ANIMATED
const elements = document.querySelectorAll('.animate');
const hElements = document.querySelectorAll('.home-animate');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkAndAnimate() {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (isInViewport(element)) {
            element.classList.add('animated');
        } else if (rect.top > (window.innerHeight || document.documentElement.clientHeight)) {
            element.classList.remove('animated');
        }
    });
}

function addHomeAnimation() {
    hElements.forEach(element => {
        element.classList.add('home-animated');
    });
}

window.addEventListener('scroll', checkAndAnimate);
document.addEventListener('DOMContentLoaded', addHomeAnimation);

//PARALLAX
const front = document.getElementById('frontCard');
const back = document.getElementById('backCard');
const home = document.getElementById('homeBox');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let scaleFactor = 1;
    
    // CHECK LOKASI PARALLAX
    if (value >= 499) {
        // CHECK MOBILE OR DESKTOP
        if (window.innerWidth >= 780) {
            scaleFactor = value / 1915 * 0.1 + 1;
        } else {
            // HEIGHT LEBIH DARI 100P
            if (value >= 1000) {
                scaleFactor = 1 + (value - 1010) * 0.0002;
            }
        }

        front.style.transform = `scale(${scaleFactor})`;
        back.style.transform = `scale(${scaleFactor}) rotate(${value * 0.0075}deg)`;
    } else {
        scaleFactor = value / 1900 * 0.2 + 1;
        home.style.transform = `scale(${scaleFactor})`;
    }
});

// FAQ ACCORDION
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.getElementsByClassName("accordion");
    const content = document.querySelector(".content");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function(event) {
            for (let j = 0; j < accordions.length; j++) {
                const panel = accordions[j].nextElementSibling;
                if (panel.classList.contains("active") && accordions[j] !== this) {
                    panel.classList.remove("active");
                    accordions[j].classList.remove("active");
                }
            }

            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.classList.contains("active")) {
                panel.classList.remove("active");
            } else {
                panel.classList.add("active");
            }

            event.stopPropagation();
        });
    }

    // TUTUP SAAT DI LUAR CONTENT
    document.addEventListener("click", function() {
        for (let i = 0; i < accordions.length; i++) {
            const panel = accordions[i].nextElementSibling;
            if (panel.classList.contains("active")) {
                panel.classList.remove("active");
                accordions[i].classList.remove("active");
            }
        }
    });

    // CEGAH TUTUP SAAT DI CLASS CONTENT 
    content.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});

// CUSTOM MESSAGE WHATSAPP 
const phoneNumber = '6282144050523'; 
const message = 'Halo Kreatify Ink, saya ingin berkonsultasi tentang proyek saya';

const encodedMessage = encodeURIComponent(message);
const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        document.getElementById('whatsapp-link').href = whatsappURL;
