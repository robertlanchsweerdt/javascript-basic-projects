// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerText = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', showMenu);

// ********** fixed navbar ************
const navBar = document.getElementById('nav');
const scrollToTopLink = document.getElementById('scroll-link');

window.addEventListener('scroll', fixNavbar);

// ********** smooth scroll ************
// select links
const navBarHeight = navBar.offsetHeight;
const links = document.querySelectorAll('.scroll-link');

links.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

// *********** functions ***************

function showMenu() {
  const linksHeight = document.querySelector('.links').offsetHeight;
  let linksContainerHeight = linksContainer.offsetHeight;

  // on mobile devices display menu when toggle clicked and container height is 0
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = `0px`;
  }
}

function fixNavbar() {
  const screenHeight = window.screen.height;

  // display fixed nav when window has scrolled past nav bar
  if (window.pageYOffset > navBar.offsetHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }

  // when to display scroll to top icon at bottom of screen
  if (window.pageYOffset > screenHeight / 2) {
    scrollToTopLink.classList.add('show-link');
  } else {
    scrollToTopLink.classList.remove('show-link');
  }
}

function smoothScroll(e) {
  e.preventDefault();

  const clickLink = e.currentTarget.getAttribute('href').slice(1);
  const pageSection = document.getElementById(clickLink);
  const pageSectionPosition = pageSection.offsetTop;
  let scrollPosition = pageSectionPosition - navBarHeight;

  // calculate scroll position if there is no fixed nav
  if (!navBar.classList.contains('fixed-nav')) {
    scrollPosition = scrollPosition - navBarHeight;
  }

  // calculate position if using a mobile device and no fixed-nav
  if (window.screen.width <= 798 && !navBar.classList.contains('fixed-nav')) {
    linksContainerHeight = linksContainer.offsetHeight;
    scrollPosition = scrollPosition - linksContainerHeight;
  }

  // where to scroll once link clicked
  window.scrollTo({
    left: 0,
    top: scrollPosition,
  });

  // close mobile menu when link clicked
  linksContainer.style.height = `0px`;
}
