let firstNumber=""
let secondNumber=""
let number=""
let operator=""



let btns = document.querySelectorAll('.button');
let input = document.querySelector('input');
let operators = document.querySelectorAll('.operate');
/*
btns.forEach(function (i) {
    i.addEventListener('click', function(e) {
    firstNumber= Number(input.placeholder+=i.value);
    
  });
  });
*/

btns.forEach(function (i) {
    if(operator==""){
        i.addEventListener('click', function(e) {
            firstNumber += i.value;
            input.value = firstNumber;     
        });
    });
    }else if(operator!=="") {
        
    }


operators.forEach(function(op) {
    op.addEventListener('click', function(e) {
        operator = op.value;
    });
});

function getOperator(operator, secondNumber) {
    if (operator==""){
        input.value = firstNumber;
    }else if(operator !=="") {
        btns.forEach(function (i) {
            i.addEventListener('click', function(e) {
                secondNumber += i.value;
                input.value = secondNumber;
            
            });
        });
    }
    return secondNumber;
}

getOperator(operator);
//---------------------------------


//ikinci sayıyı almak için eğer operator şuysa diye bir if içine yazmalıyız sanırım







    function operate(firstNumber,secondNumber,operator) {
        if (operator== "+") {
            solution= (firstNumber + secondNumber);
        }
        else if(operator== "-"){
            solution= (firstNumber - secondNumber);
        }
        else if(operator== "*"){
            solution= (firstNumber * secondNumber);
        }
        else if(operator== "/"){
            solution= (firstNumber /secondNumber);
        }
        return solution;
    
        };

equal.addEventListener('click',operate);


//arraye ekranda yazanları aldıktan sonra son elemen = ise işlem yaparsın.
//tüm sayı ve operatörleri arraye alıp işlemi ona göre yapabiliriz.
//array içindeki elemanları operatörlere göre ayırabiliriz.


/*
operators.forEach(function(op) {
    op.addEventListener('click',function(e)  {
        operator= op.value;
        return operator;
    } );
} );
*/

console.log(firstNumber);
console.log(secondNumber);
console.log(operator);




/*
let firstNumber="";
let secondNumber="";
let number="";
let operator="";

let btns = document.querySelectorAll('.button');
let input = document.querySelector('input');
let operators = document.querySelectorAll('.operate');

btns.forEach(function (i) {
    operators.forEach(function(op) {
        op.addEventListener('click', function(e) {
            operator = op.value;
        });
        return operator;
    });
});


function getNumbers (operator) {
    if(operator==""){
        btns.forEach(function (i) {
            i.addEventListener('click',function(e){
                firstNumber += i.value;
                input.value = firstNumber;
            })
        })
    }
    else if(operator!==""){
        input.value="";
        btns.forEach(function (i) {
            i.addEventListener('click',function(e){
                secondNumber += i.value;
                input.value = secondNumber;
            })
        })
    }
return {firstNumber,secondNumber};
}


getNumbers(operator);

*/
