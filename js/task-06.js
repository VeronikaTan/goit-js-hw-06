const textInput = document.querySelector('#validation-input');
const numberItems = 6


textInput.addEventListener("blur", () => {
  textInput.value = numberItems;
});



const input = document.querySelector('#validation-input');

input.addEventListener("blur", () => {
    console.log(input.dataset.length);
if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
   input.classList.add("valid"); 
} else {
    input.classList.remove("valid");
    input.classList.add("invalid");

}
  });
