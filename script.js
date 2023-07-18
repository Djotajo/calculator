const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const numbers1 = Array.from(numbers)

const screen = document.querySelector("#screen");

const equals = document.querySelector("#buttonEquals");

const multiplyButton = document.querySelector("#buttonMultiply");
const divideButton = document.querySelector("#buttonDivide");

const deleteOne = document.querySelector("#buttonC");

const dotButton = document.querySelector("#buttonDot");

deleteOne.addEventListener("click", function(){
    screen.textContent = screen.textContent.slice(0, -1);
    expression = screen.textContent;
    console.log(screen.textContent);
})

let expression = screen.textContent;
let numberOne = 0;
let numberTwo = 0;
let operator = "";

const add = function(numberOne, numberTwo) {
    return Math.round(((numberOne + numberTwo) + Number.EPSILON) * 100) / 100 
}

const subtract = function(numberOne, numberTwo) {
    return Math.round(((numberOne - numberTwo) + Number.EPSILON) * 100) / 100 
}

const multiply = function(numberOne, numberTwo) {
    return Math.round(((numberOne * numberTwo) + Number.EPSILON) * 100) / 100 
}

const divide = function(numberOne, numberTwo) {
    return Math.round(((numberOne / numberTwo) + Number.EPSILON) * 100) / 100 
}

const acButton = document.querySelector("#buttonAC");
acButton.addEventListener("click", function() {
screen.textContent = "";
expression = "";
})


console.log(numbers);
console.log(numbers1);

for (n of numbers1) {
    n.addEventListener("click", function(e) {
        clearScreen()
        screen.textContent += this.textContent;
        expression = screen.textContent;
        console.log(screen.textContent.split(" ").length)});
}

dotButton.addEventListener("click", function(e) {
    console.log(screen.textContent[screen.textContent.length - 1]);
    if (screen.textContent.split(" ").length == 1 && screen.textContent.split(" ")[0].includes(".") == false) {
    if (isNaN(+screen.textContent[screen.textContent.length - 1]) == false && screen.textContent[screen.textContent.length - 1] != " ") {
        screen.textContent += this.textContent;
        expression = screen.textContent;
    }} else if (screen.textContent.split(" ").length == 3 && screen.textContent.split(" ")[2].includes(".") == false) {
        if (isNaN(+screen.textContent[screen.textContent.length - 1]) == false && screen.textContent[screen.textContent.length - 1] != " ") {
            screen.textContent += this.textContent;
            expression = screen.textContent;
        }}
});

const operate = function(expression) {
    let operation = expression.split(" ");
    numberOne = +operation[0];
    operator = operation[1];
    numberTwo = +operation[2];
    if (operator == "+") {
        screen.textContent = add(numberOne, numberTwo)
    } else if (operator == "-") {
        screen.textContent = subtract(numberOne, numberTwo)
    } else if (operator == "*") {
        screen.textContent = multiply(numberOne, numberTwo)
    } else if (operator == "/") {
        if (numberTwo == 0) {
            screen.textContent = "Error, division with zero!";
        } else {
        screen.textContent = divide(numberOne, numberTwo)};
    }
}

const clearScreen = function() {
    if (screen.textContent == "Error, division with zero!") {
        screen.textContent = "";  
        expression = "";
    }
}


for (i of operators) {
    i.addEventListener("click", function(e) {
        clearScreen();
        console.log(expression);
        console.log(this.textContent);
        if ((expression == "" && this.textContent == " * ")|| (expression == "" && this.textContent == " / ")) {
            screen.textContent = "";
            expression = "";
        }
        else if (expression.includes("+") || expression.includes("-") || expression.includes("*") || expression.includes("/")) {
            operate(expression)
            numberOne = +screen.textContent;
            operator = this.textContent;
            screen.textContent += this.textContent;
        } else {

        numberOne = +screen.textContent;
        operator = this.textContent;
        // console.log(numberOne);
        // console.log(operator);
        // console.log(typeof operator);

        screen.textContent += this.textContent;
        expression = screen.textContent;
        // console.log(this.textContent)
    }});
}

equals.addEventListener("click", function() {
    console.log(expression.split(" ").length);
    console.log(expression.split(" "));
    if (expression.split(" ")[2] != "") {
        operate(expression);
        numberOne = +screen.textContent;
        operator = this.textContent;}})