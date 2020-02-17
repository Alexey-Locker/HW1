"use strict"
const equation = document.getElementById("label");
const button = document.querySelectorAll(".number")
let digit1;
let digit2;
function sum(a,b){return a + b;}



function substr(a,b){return a - b;}



function multip(a,b){return a * b;}


function division(a,b){return a / b;}


// function valueAssign(value){
//     let digit = 0;
    
//     for(let i = 0; i < value.length; i++){
//         let num = value[i];
//         if (num == "+"){
//             digit = Number(digit);
//             return sum(digit, valueAssign(value.slice(i+1)))
//         }else if(num == "-"){
//             return substr(digit, valueAssign(value.slice(i+1)))
//         }else if(num == "*"){
//             return multip(digit, valueAssign(value.slice(i+1)))
//         }else if(num == "/"){
//             return division(digit, valueAssign(value.slice(i+1)))
//         } else {
//                 digit += num;
//             }
        
//     }
//     return digit;
// }

function equally (event){
    console.log(digit1 + "   " + digit2 + "   " + sum(digit1, equation.value));
    switch (event.target.value){
        case "+": 
        (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
        equation.value = ""
            break;
        case "-": 
        (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
        equation.value = ""
            break;
        case "/": 
        (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
        equation.value = ""
            break;
        case "X": 
        (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
        equation.value = ""
            break;
        default:
            equation.value += event.target.value; 
    }
    
}
function displayLog(event){
    equation.value = event;
}

button.forEach((elem) => {
    elem.addEventListener("click", equally)
})