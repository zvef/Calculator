const operator = '+';
const numberOne = 20;
const numberTwo = 40;

const allButtons = [...document.querySelectorAll('.button')];

let screenDisplay = document.querySelector('.screen');

let displayValue = 0;
let numbersEntered = 0;


allButtons.forEach(butt => {
    let usrInput1 = parseInt('');
    usrInput1.toFixed(1);
    let usrInput2 = 0;
    timesPressed = 0;

    butt.onclick = () => {
        switch(butt.id) {
            case 'buttOne':
                usrInput1 = '1';
                usrInput2 += 1;
                screenDisplay.innerHTML += usrInput1;
                timesPressed++;
                console.log(usrInput1);
                console.log(usrInput2);
                break;
            case 'buttTwo':
                usrInput1 = '2';
                usrInput2 += 2;
                screenDisplay.innerHTML += usrInput1;
                timesPressed++;
                break;
            case 'buttThree':
                screenDisplay.innerHTML += '3';
                break;
            case 'buttFour':
                screenDisplay.innerHTML += '4';
                break;
            case 'buttFive':
                screenDisplay.innerHTML += '5';
                break;
            case 'buttSix':
                screenDisplay.innerHTML += '6';
                break;
            case 'buttSeven':
                screenDisplay.innerHTML += '7';
                break;
            case 'buttEight':
                screenDisplay.innerHTML += '8';
                break;
            case 'buttNine':
                screenDisplay.innerHTML += '9';
                break;
            case 'buttZero':
                screenDisplay.innerHTML += '0';
                break;
            case 'buttAdd':
                // screenDisplay.innerHTML += '+';

                break;
            case 'buttSubtract':
                // screenDisplay.innerHTML += '-';
                break;
            case 'buttMultiply':
                // screenDisplay.innerHTML += '*';
                break;
            case 'buttDivide':
                // screenDisplay.innerHTML += '/';
                break;
            case 'buttClear':
                // screenDisplay.innerHTML += 'c';
                break;
            case 'buttEquals':
                // screenDisplay.innerHTML += '=';
                break;    
        }  
    }
});

// console.log(allButtons);


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
















//SHOULD HAVE USED <BUTTONS> INSTEAD OF <DIVS> ...

// buttonDivs.forEach(buttDiv => {
//     if(buttDiv.id == 'one') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '1';
//             screenDisplay.innerHTML += displayValue;    
//         });

//     } else if(buttDiv.id == 'two') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '2';
//             screenDisplay.innerHTML += displayValue;  
//         });

//     } else if(buttDiv.id == 'three') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '3';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'four') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '4';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'five') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '5';
//             screenDisplay.innerHTML += displayValue;          
//         });

//     } else if(buttDiv.id == 'six') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '6';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'seven') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '7';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'eight') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '8';
//             screenDisplay.innerHTML += displayValue;          
//         });

//     } else if(buttDiv.id == 'nine') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '9';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'zero') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '0';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'divide') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '1';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'multiply') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '1';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'subtract') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '1';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'add') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = 
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'equals') {
//         buttDiv.addEventListener('click', () => {
//             displayValue = '';
//             screenDisplay.innerHTML += displayValue;          
//         })

//     } else if(buttDiv.id == 'clear') {
//         buttDiv.addEventListener('click', () => {
//         displayValue += '';
//         screenDisplay.innerHTML += displayValue;          
//         });
//     }
// });