/*let numberButtons = document.querySelectorAll('.digit_num');
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target.value);
    })

});*/

/* 2. відображати цифру на табло

let numberButtons = document.querySelectorAll('.digit_num');
let resField = document.getElementById('main_result');
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        return resField.value = event.target.value;
    })

});*/

let resField = document.getElementById('main_result');
let acButton = document.getElementById('button_ac');
acButton.addEventListener('click', (event) => {
    return resField.value = 0;
});

let numberButtons = document.querySelectorAll('.digit_num');
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        return resField.value = event.target.value;
    })
});

let operationButtons = document.querySelectorAll('.button_operation');
operationButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        return resField.value = event.target.value;
    })
});

/*let result = document.getElementById('res_button'); // висвітлює =
result.addEventListener('click', (numberButtons, operationButtons) => {
    if(operationButtons ==='+') {
     return resField.value = numberButtons.value + numberButtons.value;
    }
})*/

function getResult() {
       let result = 0;
    if (operationButtons.value = '+') {
        result = numberButtons.value + numberButtons.value;
        return resField.value = result;
    }
}