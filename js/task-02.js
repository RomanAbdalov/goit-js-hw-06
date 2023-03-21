const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsRef = document.querySelector("#ingredients");
// for(const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList = "item";
//   ingredientsRef.appendChild(liEl);
// }
// document.body.appendChild(ingredientsRef);
// console.log(ingredientsRef);

const listEl = document.querySelector('ul#ingredients');

const createItem = (content) => {
  const newElement = document.createElement('li');
  newElement.textContent = content;
  newElement.classList.add('item');

  return newElement;
};

const insertLi = ingredients.map(createItem);
listEl.append(...insertLi);
console.log(listEl);
