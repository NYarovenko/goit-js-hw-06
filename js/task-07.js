const inputControl = document.querySelector('input');
const spantext = document.querySelector('span#text');
spantext.style.fontSize = `${inputControl.value}px`;

inputControl.addEventListener('input', () => {
  spantext.style.fontSize = `${inputControl.value}px`;
});
