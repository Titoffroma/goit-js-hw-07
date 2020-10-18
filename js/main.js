let task = Array.from(document.querySelectorAll("nav a"));
let taskList = document.querySelector(".tasks-list");
let sectionRef = document.querySelectorAll("section");
let taskItem = document.querySelectorAll(".task");
taskList.addEventListener("click", (event) => {
  let idx = task.indexOf(event.target);
  taskItem[idx].style.transform = "translateX(100%)";
  taskItem[idx].style.opacity = "0";
  setTimeout(() => {
    taskItem[idx].style.transform = "translateX(0%)";
    taskItem[idx].style.opacity = "1";
  }, 300);
  for (let i = 0; i < task.length; i++) {
    sectionRef[i].classList.remove("apear");
  }
  sectionRef[idx].classList.add("apear");
});
