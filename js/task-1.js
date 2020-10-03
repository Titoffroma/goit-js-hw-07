const categoriesArr = Array.from(
  document.querySelectorAll("#categories li.item")
);
console.log(`В списке ${categoriesArr.length} категории`);
categoriesArr.forEach((el) => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.querySelectorAll("li").length}`);
});
