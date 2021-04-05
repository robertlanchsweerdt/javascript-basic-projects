// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('.links');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-links');
}
