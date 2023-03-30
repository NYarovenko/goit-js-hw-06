function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const spanColorText = document.querySelector('.widget .color');
const buttonChenge = document.querySelector('button');

buttonChenge.addEventListener('click', () => {
  spanColorText.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = spanColorText.textContent;
});
