const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsListRef = document.querySelector("#ingredients");
let newListItem = ingredients.map((el, index, arr) => {
  arr[index] = document.createElement("li");
  arr[index].textContent = el;
  return arr[index];
});
ingredientsListRef.append(...newListItem);
