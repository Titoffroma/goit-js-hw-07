const boxes = {
  renderBtn: document.querySelector("[data-action=render]"),
  destroyBtn: document.querySelector("[data-action=destroy]"),
  amount: document.querySelector("#controls input"),
  value: 0,
  boxcontainer: document.querySelector("#boxes"),
  width: 30,
  height: 30,
  created: 0,
  createdBoxes: document.querySelector("#boxes").children,
  random: () => Math.floor(255 * Math.random()),
  createBoxes: function () {
    for (let i = 1; i <= this.value; i++) {
      const newDiv = document.createElement("div");
      newDiv.style.width = `${this.width}px`;
      newDiv.style.height = `${this.height}px`;
      newDiv.style.display = "inline-block";
      newDiv.style.backgroundColor = `rgb(${this.random()}, ${this.random()}, ${this.random()})`;
      this.boxcontainer.appendChild(newDiv);
      this.width += 10;
      this.height += 10;
      this.created += 1;
    }
  },
  destroyBoxes: function () {
    for (let i = 1; i <= this.created; i++) {
      this.createdBoxes[this.created - i].remove();
    }
    this.width = 30;
    this.height = 30;
    this.created = 0;
  },
};
boxes.renderBtn.addEventListener("click", boxes.createBoxes.bind(boxes));
boxes.destroyBtn.addEventListener("click", boxes.destroyBoxes.bind(boxes));
boxes.amount.addEventListener(
  "input",
  () => (boxes.value = boxes.amount.value)
);
