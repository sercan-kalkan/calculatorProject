function add(num1,num2) {
    return num1+num2;
}

function subtract (num1,num2) {
    return num1-num2;
}

function multiply (num1,num2) {
    return num1*num2;
}

function dividquwre (num1,num2) {
    return num1 / num2;
}

let firstNumber;
let secondNumber;
let operator ="";
let display="";
let display2 ="";
const displayArray =[];
let calculate="";
let input = document.querySelector('input');



const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
//const input = document.querySelector('input');


operators.forEach(function (op) {
    op.addEventListener('click', function(e){
        operator = op.innerText;
        firstNumber = parseFloat(display);
        display=""
    })
})

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){  
        display += btn.innerText;
        input.placeholder = display;
        secondNumber = parseFloat(display);
    })
})

//en son bir flag oluşturup ekrandaki değeri silip ikinciyi almayı deneycektik

equal.addEventListener('click', function() {
    operate(firstNumber, operator, secondNumber); // operate fonksiyonunu çağırarak işlemi yap
    input.placeholder = result; // Sonucu ekrana yansıt
});


function operate (firstNumber,operator,secondNumber) {
    switch (operator) {
        case "+":
            add(firstNumber,secondNumber);
            break
        case "-":
            subtract(firstNumber,secondNumber);
            break
        case "*":
            multiply(firstNumber,secondNumber);
            break
        case "/":
            divide(firstNumber,secondNumber);
    }
}

