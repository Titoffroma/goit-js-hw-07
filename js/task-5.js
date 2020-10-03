let inputRef = document.querySelector("#name-input");
let outputNameRef = document.querySelector("#name-output");
inputRef.addEventListener(
  "input",
  () =>
    (outputNameRef.textContent =
      inputRef.value.length > 0 ? inputRef.value : "незнакомец")
);
