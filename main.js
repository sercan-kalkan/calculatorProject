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

let firstNumber="";
let secondNumber="";
let operator ="";
let display="";


const input = document.querySelector('input');
const btns = document.querySelectorAll('.button');
let num1= document.createElement('p');
const monitor= [];


let calculate;
btns.forEach(function (i) {
    i.addEventListener('click',function(e){
        if(typeof i.value  ==='number' && operator===null ) {
            firstNumber += i.value;
            input.value = firstNumber;
        }
        else if(i.value=="+" ||i.value=="-" || i.value=="*" || i.value=="/")
            {
            input.value="";
            operator+= i.value;
            }
        else {
            secondNumber += i.value;
            input.value = secondNumber;
        }
     })
     return{firstNumber, secondNumber,operator}
})





function operate (firstNumber,secondNumber,operator) {
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


