let task = Array.from(document.querySelectorAll("nav a"));
let taskItem = document.querySelectorAll(".task");
task.map((el, index) => {
  el.addEventListener("blur", () => {
    taskItem[index].style.transform = "translateX(100%)";
    setTimeout(
      () => (taskItem[index].style.transform = "translateX(50%)"),
      300
    );
  });
});
