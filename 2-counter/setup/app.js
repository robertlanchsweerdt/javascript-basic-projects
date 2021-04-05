const btn = document.querySelectorAll('.btn');
let spanValue = document.getElementById('value');

btn.forEach((button) => {
  button.addEventListener('click', counterFunction);
});

function counterFunction(e) {
  const btnClass = e.currentTarget.className;
  let counterValue = Number(spanValue.innerText);

  switch (btnClass) {
    case 'btn increase':
      counterValue++;
      break;

    case 'btn decrease':
      counterValue--;
      break;

    case 'btn reset':
      counterValue = 0;
      break;
  }

  counterColor(counterValue);
  spanValue.innerText = counterValue.toString();
}

function counterColor(counterValue) {
  if (counterValue > 0) {
    spanValue.style.color = 'blue';
  } else if (counterValue < 0) {
    spanValue.style.color = 'red';
  } else if (counterValue === 0) {
    spanValue.style.color = '#222';
  }
}
