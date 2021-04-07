// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader = document.querySelector('.preloader');
const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

window.addEventListener('DOMContentLoaded', hidePreloader);

btn.addEventListener('click', videoSwitch);

function hidePreloader() {
  preloader.classList.add('hide-preloader');
}

function videoSwitch() {
  if (btn.classList.contains('slide')) {
    btn.classList.remove('slide');
    video.play();
  } else {
    btn.classList.add('slide');
    video.pause();
  }
}
