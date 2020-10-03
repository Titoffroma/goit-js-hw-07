const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsListRef = document.querySelector("#ingredients");
ingredients.map((el) => {
  const newListItem = document.createElement("li");
  newListItem.textContent = el;
  ingredientsListRef.append(newListItem);
});
