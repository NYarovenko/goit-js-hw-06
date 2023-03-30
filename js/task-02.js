const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categories = document.querySelector('#ingredients');

const itemIngredientAll = ingredients.map(itemIngredient => {
  const liItem = document.createElement('li');
  liItem.textContent = itemIngredient;
  liItem.classList.add('item');
  return liItem;
});

categories.append(...itemIngredientAll);
