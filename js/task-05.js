const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', event => {
  if (event.currentTarget.value.length === 0) output.textContent = 'Anonymous';
  else output.textContent = event.currentTarget.value;
});
