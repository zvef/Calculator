const operator = '+';
const numberOne = 20;
const numberTwo = 40;

const buttonDivs = [...document.querySelectorAll('.buttonRow')];
let screenDisplay = document.querySelector('.screen');

let displayValue = 0;

//SHOULD HAVE USED <BUTTONS> INSTEAD OF <DIVS> ...

buttonDivs.forEach(buttDiv => {
    if(buttDiv.id == 'one') {
        buttDiv.addEventListener('click', () => {
            displayValue = '1';
            screenDisplay.innerHTML += displayValue;    
        });

    } else if(buttDiv.id == 'two') {
        buttDiv.addEventListener('click', () => {
            displayValue = '2';
            screenDisplay.innerHTML += displayValue;  
        });

    } else if(buttDiv.id == 'three') {
        buttDiv.addEventListener('click', () => {
            displayValue = '3';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'four') {
        buttDiv.addEventListener('click', () => {
            displayValue = '4';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'five') {
        buttDiv.addEventListener('click', () => {
            displayValue = '5';
            screenDisplay.innerHTML += displayValue;          
        });

    } else if(buttDiv.id == 'six') {
        buttDiv.addEventListener('click', () => {
            displayValue = '6';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'seven') {
        buttDiv.addEventListener('click', () => {
            displayValue = '7';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'eight') {
        buttDiv.addEventListener('click', () => {
            displayValue = '8';
            screenDisplay.innerHTML += displayValue;          
        });

    } else if(buttDiv.id == 'nine') {
        buttDiv.addEventListener('click', () => {
            displayValue = '9';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'zero') {
        buttDiv.addEventListener('click', () => {
            displayValue = '0';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'divide') {
        buttDiv.addEventListener('click', () => {
            displayValue = '1';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'multiply') {
        buttDiv.addEventListener('click', () => {
            displayValue = '1';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'subtract') {
        buttDiv.addEventListener('click', () => {
            displayValue = '1';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'add') {
        buttDiv.addEventListener('click', () => {
            displayValue = 
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'equals') {
        buttDiv.addEventListener('click', () => {
            displayValue = '';
            screenDisplay.innerHTML += displayValue;          
        })

    } else if(buttDiv.id == 'clear') {
        buttDiv.addEventListener('click', () => {
        displayValue += '';
        screenDisplay.innerHTML += displayValue;          
        });
    }
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    if(num2 > num1){
        return num2 - num1;
    } else {
        return num1 - num2;
    }
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 > num1){
        return num2 / num1;
    } else {
        return num1 / num2;
    }
}

function operate(num, op, num2) {
    if(op == '+') {
        return add(num, num2);
    } else if (op == '-') {
        return subtract(num, num2);
    } else if (op == '*') {
        return multiply(num, num2);
    } else if (op == '/') {
        return divide(num, num2);
    } else {
        console.log('ERROR');
    }
}