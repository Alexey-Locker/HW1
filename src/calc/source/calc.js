"use strict"

const display = document.getElementById("display");
const button = document.querySelectorAll(".button");
const equal = document.getElementById("equal");

function sum(a, b) { return +a + +b; }

function substr(a, b) { return a - b; }

function multip(a, b) { return a * b; }

function division(a, b) {
    if (b == 0) { return "error" 
}else if(a == 0 && b == 0){
    return "error" 
} else {return a / b;} 
}
let number1;
let number2;
let operator;
let dotClick = true;
function clickButton(event) {
    switch (event.target.value) {
        case "+":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            display.value = ""
            operator = "+"
            dotClick = true;
            break;
        case "-":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            operator = "-"
            display.value = ""
            dotClick = true;
            break;
        case "÷":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            operator = "/"
            display.value = ""
            dotClick = true;
            break;
        case "×":
            (number1 == undefined) ? number1 = display.value : arithmetic();
            operator = "*"
            display.value = ""
            dotClick = true;
            break;
        case "=":     
        break;
        case ".":
            if (dotClick){        
                if((display.value ^ 0) == display.value){ 
                    display.value += ".";
                    dotClick = false;
                }
            }
        break;
        case "AC":
            display.value = ""
            number1 = undefined;
            number2 = undefined;
            dotClick = true;
            break;
        default:
            if (display.value == "error" || display.value == "NaN") display.value = ""
            display.value += event.target.value;
    }

}

function arithmetic() {    
    dotClick = true;
    if (number1 == undefined) number1 = display.value;
    number2 = display.value;
    switch (operator) {
        case "+":
            display.value = sum(number1, number2);
            break;
        case "-":
            display.value = substr(number1, number2);
            break;
        case "/":
            display.value = division(number1, number2);
            break;
        default:
            display.value = multip(number1, number2);
    }
    number1 = undefined;
    number2 = undefined;
}
equal.addEventListener("click", arithmetic);

button.forEach((elem) => {
    elem.addEventListener("click", clickButton);
})