let firstNumber;
let secondNumber;
let operator;


function add(a,b) {
    return a+b;
}

function substract (a,b) {
    return a-b;
}

function  multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function operate (operator, firstNumber, secondNumber) {

}


let btns = document.querySelectorAll('button');
let input = document.querySelector('input');
btns.forEach(function (i) {
  i.addEventListener('click', function(e) {
    input.placeholder += i.value;
});
});

