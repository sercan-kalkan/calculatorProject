//functions for operations
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

function divide (num1,num2) {
    if (secondNumber==0) {
        result ="you made a mistake"
    }else {
        result= num1 / num2;
    }
    return result;
}
//defining variables
let firstNumber;
let secondNumber;
let operator ="";
let display="";
let input = document.querySelector('input');
let result;

//Selecting DOM Elements for manupulation 
const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('.clear');

//clicking to operators
operators.forEach(function (op) {
    op.addEventListener('click', function(e){
        operator = op.innerText;
        firstNumber = parseFloat(display);
        display=""
        if (result!==undefined){
            firstNumber = result;
        }
    })
})
//clicking buttons
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){  
        display += btn.innerText;
        input.placeholder = display;
        secondNumber = parseFloat(display);
    })
})

//clicking equal calls operate function
equal.addEventListener('click', function(e) {
    input.placeholder="";
    operate(firstNumber, operator, secondNumber); 
        input.placeholder = result;   
});

//clear button clears everything
clear.addEventListener('click', function (e) {
    input.placeholder="0";
    firstNumber="";
    secondNumber="";
    operator ="";
    display="";
    result =undefined;
})

//function for operate numbers
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

