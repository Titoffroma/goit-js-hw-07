let strangeInputRef = document.querySelector("#validation-input");
strangeInputRef.addEventListener("blur", () => {
  if (strangeInputRef.value.length < +strangeInputRef.dataset.length) {
    strangeInputRef.classList.remove("valid");
    strangeInputRef.classList.add("invalid");
  } else {
    strangeInputRef.classList.remove("invalid");
    strangeInputRef.classList.add("valid");
  }
});
