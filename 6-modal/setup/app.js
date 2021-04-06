// select modal-btn,modal-overlay,close-btn
const modal = document.querySelector('.modal-overlay');
const btns = document.querySelectorAll('button');
const btnClose = document.querySelector('.close-btn');

// listen for click events on modal-btn and close-btn
btnModal.addEventListener('click', openModal);

// when user clicks modal-btn add .open-modal to modal-overlay
btnClose.addEventListener('click', closeModal);

// when user clicks on btnModal open Modal
function openModal() {
  modal.classList.add('open-modal');
}

// when user clicks close-btn remove .open-modal from modal-overlay
function closeModal() {
  modal.classList.remove('open-modal');
}
