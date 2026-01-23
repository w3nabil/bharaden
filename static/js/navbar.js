/*!
 * A Product of : <https://github.com/w3nabil/front-end-kit>
 *
 * Copyright (c) 2023-present, w3nabil.
 * Licensed under the Open Equity License.
 */

const mynavbar = document.getElementById('navfloat');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggleDesktop = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const themeIconMobile = document.getElementById('theme-icon-mobile');

if (!mynavbar) {
    console.error('Error: Navbar element not found.');
}

const sunImg = "../static/img/sun.webp";
const moonImg = "../static/img/moon.webp";

if (sunImg === undefined || moonImg === undefined) {
    console.error('Error: Theme icon images not found.');
}

menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('max-h-0');
    mobileMenu?.classList.toggle('max-h-96');
});

function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');

    sunIcon?.classList.toggle('opacity-0', isDark);
    moonIcon?.classList.toggle('opacity-0', !isDark);
    themeIconMobile && (themeIconMobile.src = isDark ? moonImg : sunImg);

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggleDesktop?.addEventListener('click', () => {
    toggleTheme();
});
themeToggleMobile?.addEventListener('click', () => {
    toggleTheme();
});

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const prefersDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
if (prefersDark) {
    document.documentElement.classList.add('dark');
    themeIconMobile && (themeIconMobile.src = moonImg);
    sunIcon?.classList.add('opacity-0');
    moonIcon?.classList.remove('opacity-0');
} else {
    document.documentElement.classList.remove('dark');
    themeIconMobile && (themeIconMobile.src = sunImg);
    sunIcon?.classList.remove('opacity-0');
    moonIcon?.classList.add('opacity-0');
}

console.log('%cdist/navbar.js:%c 200, OK!','color: white; background: green; padding: 2px 6px; border-radius: 3px;','color: white; font-weight: normal;');


