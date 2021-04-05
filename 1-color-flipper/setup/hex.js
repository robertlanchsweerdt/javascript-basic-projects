const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');
const siteBody = document.querySelector('body');

btn.addEventListener('click', randomColor);

function randomColor() {
  const randomHex = randomHexGenerator();
  siteBody.style.backgroundColor = `#${randomHex}`;
  colorSpan.innerText = `#${randomHex}`;
}

function randomHexGenerator() {
  const hexArr = [];

  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * hex.length);
    hexArr.push(hex[randomNum]);
  }

  return hexArr.join('');
}
