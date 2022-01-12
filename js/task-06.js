const textInput = document.querySelector('#validation-input');
const numberItems = document.querySelector('[data-length = 6]')


textInput.addEventListener("focus", () => {
  textInput.value = numberItems;
});