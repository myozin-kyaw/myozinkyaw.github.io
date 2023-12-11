/* ---------- CHANGE BACKGROUND HEADER ---------- */

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* ---------- SCROLL SECTIONS ACTIVE LINK ---------- */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* ---------- CHANGE THEME ---------- */

const themeButton = document.getElementById('theme-btn');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain curren theme that the interface has validateing dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentLight = () => document.body.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectedIcon == 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / light
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and current icon that user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentLight());
})

/* ---------- SCROLL REVEAL ---------- */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 500,
    reset: false,
})

sr.reveal('.topNav');
sr.reveal('.topTheme');
sr.reveal('.home_data');
sr.reveal('.home__handle', { delay: 900 });
sr.reveal('.home_social', { delay: 1300, origin: 'bottom' });
sr.reveal('.home_scroll', { delay: 1300, origin: 'bottom' });
sr.reveal('.nav_menu', { delay: 1300, origin: 'bottom' });

