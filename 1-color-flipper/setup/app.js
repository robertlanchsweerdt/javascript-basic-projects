const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');
const siteBody = document.querySelector('body');

btn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = chooseColor();
  siteBody.style.backgroundColor = colors[randomColor];
  colorSpan.innerText = colors[randomColor];
}

function chooseColor() {
  return Math.floor(Math.random() * colors.length);
}
