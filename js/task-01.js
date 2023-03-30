const categoriesItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(caregory => {
  console.log(`Category: ${caregory.firstElementChild.textContent}`);
  console.log(`Elements: ${caregory.lastElementChild.children.length}`);
});
