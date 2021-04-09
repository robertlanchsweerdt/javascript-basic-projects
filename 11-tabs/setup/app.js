const btns = document.querySelectorAll('button');
const content = document.querySelectorAll('.content');

// set click event for each button
btns.forEach((button) => {
  button.addEventListener('click', function () {
    // remove and set active class on button
    setBtnActive(button);

    // remove and set active class on content
    changeTab(button);
  });
});

// ***** functions ****************

function changeTab(button) {
  const buttonId = button.dataset.id;
  const contentId = document.getElementById(buttonId);

  // remove active class from current content
  content.forEach((item) => {
    item.classList.remove('active');
  });

  // add active class to selected content
  contentId.classList.add('active');
}

function setBtnActive(button) {
  // remove active class from current button
  btns.forEach((button) => {
    button.classList.remove('active');
  });

  // add active class to selected button
  button.classList.add('active');
}
