//Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');


inputField.addEventListener('input', (event) => {
    
    const inputValue = event.currentTarget.value

    if (inputValue === '') {
        outputField.textContent = 'Anonymous';
    } else
        outputField.textContent = inputValue;
        event.preventDefault()
});
