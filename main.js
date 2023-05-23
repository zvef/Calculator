

const operator = '+';
const numberOne = 20;
const numberTwo = 40;



















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

console.log(operate(numberOne, operator, numberTwo));

