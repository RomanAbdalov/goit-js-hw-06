function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonEl: document.querySelector('.change-color'),
  spanEl: document.querySelector('.color'),
  bodyEl: document.querySelector('body')
  };

  refs.buttonEl.addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    refs.spanEl.textContent = randomColor;
    refs.bodyEl.style.backgroundColor = randomColor;
  });





