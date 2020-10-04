let task = Array.from(document.querySelectorAll("nav a"));
let sectionRef = document.querySelectorAll("section");
let taskItem = document.querySelectorAll(".task");
task.map((el, index, arr) => {
  el.addEventListener("blur", () => {
    taskItem[index].style.transform = "translateX(100%)";
    taskItem[index].style.opacity = "0";
    setTimeout(() => {
      taskItem[index].style.transform = "translateX(0%)";
      taskItem[index].style.opacity = "1";
    }, 300);
    for (let i = 0; i < arr.length; i++) {
      sectionRef[i].classList.remove("apear");
    }
    sectionRef[index].classList.add("apear");
  });
});
