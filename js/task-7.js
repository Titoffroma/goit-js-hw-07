let rangeRef = document.querySelector("#font-size-control");
rangeRef.addEventListener(
  "input",
  () => (document.querySelector("#text").textContent = rangeRef.value)
);
