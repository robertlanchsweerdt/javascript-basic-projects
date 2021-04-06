//using selectors inside the element
let questionArticle = document.querySelectorAll('.question');

// traversing the dom
questionArticle.forEach((question) => {
  const questionButton = question.querySelector('.question-btn');

  questionButton.addEventListener('click', function () {
    closeOpenBoxes(question);
    operateBox(question);
  });
});

function closeOpenBoxes(question) {
  questionArticle.forEach((foo) => {
    if (foo !== question) {
      foo.classList.remove('show-text');
    }
  });
}

function operateBox(question) {
  question.classList.toggle('show-text');
}
