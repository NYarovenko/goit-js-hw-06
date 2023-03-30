function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
inputNumber.value = 0;
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('div#boxes');
let step = 0;

btnCreate.addEventListener('click', () => createBoxes(inputNumber.value));
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let divMarking = '';
  for (let i = 0; i < amount; i += 1) {
    step += 30;
    divMarking = divMarking.concat(
      `<div style="width: ${step}px; height: ${step}px; background-color: ${getRandomHexColor()};"></div>`,
    );
  }
  divBoxes.insertAdjacentHTML('beforeend', divMarking);
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
  inputNumber.value = 0;
}
