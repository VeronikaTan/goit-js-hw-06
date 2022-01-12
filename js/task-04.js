
const counterValueEl = document.querySelector('#value');
let counterValue = 0;
const buttonInc = document.querySelector('[data-action= increment]');
const buttonDec = document.querySelector('[data-action= decrement]');



buttonInc.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});



buttonDec.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
})








