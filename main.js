function add(num1,num2) {
    result = num1+num2;
    return result;
}

function subtract (num1,num2) {
    result= num1-num2;
    return result;
}

function multiply (num1,num2) {
    result = num1*num2;
    return result;
}

function dividquwre (num1,num2) {
    result= num1 / num2;
    return result;
}

let firstNumber;
let secondNumber;
let operator ="";
let display="";
let input = document.querySelector('input');
let result;




const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');


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

equal.addEventListener('click', function(e) {
    input.placeholder="";
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

