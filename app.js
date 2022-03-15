// Nav Bar Hamburger toggle classes for menu

const hamburger = document.querySelector('.hamburger');
const navbarList = document.querySelector('.navbar__list');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle('active');
	navbarList.classList.toggle('active');
} /// function to turn active class on the elements

const navLink = document.querySelectorAll('.navbar__list-item-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
	hamburger.classList.remove('active');
	navbarList.classList.remove('active');
} // function to remove classes to remove menu from screen
