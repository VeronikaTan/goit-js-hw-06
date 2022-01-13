//Напиши скрипт, который реагирует на изменение значения input#font-size-control
//(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//В результате при перетаскивании ползунка будет меняться размер текста.

const fontInput = document.querySelector("#font-size-control");
const fontText = document.querySelector("#text");


fontInput.addEventListener("input", event => {
    fontText.style.fontSize = `${fontInput.value}px`
});