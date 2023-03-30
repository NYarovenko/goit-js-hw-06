const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
