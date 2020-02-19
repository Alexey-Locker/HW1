"use strict"
const equation = document.getElementById("label");
const button = document.querySelectorAll(".number")
 


function sum(a,b){return +a + +b;}



function substr(a,b){return a - b;}



function multip(a,b){return a * b;}


function division(a,b){return a / b;}

let digit1;
let digit2;
let operator;

function equally (event){
    
    if ((event.target.value === "=" && digit1 !== undefined) || digit2 !== undefined){
        if (digit2 === undefined) digit2 = equation.value;
        switch (operator){
            case "+": equation.value = sum(digit1,digit2); 
               break;
             case "-": equation.value = substr(digit1,digit2);    
              break;
             case "/": equation.value = division(digit1,digit2); 
              break;
             default:  equation.value = multip(digit1,digit2); 
        }
          digit1 = undefined;
          digit2 = undefined;
    }else if(digit2 === undefined){
        console.log(event)
    
        switch (event.target.value){
       
         case "+": 
               (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
               operator = "+";
               equation.value = ""
            break;

        case "-": 
               (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
               operator = "-";
               equation.value = ""
            break;

        case "/": 
               (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
               operator = "/";
               equation.value = ""
            break;

        case "X": 
              (digit1 === undefined) ? digit1 = equation.value : digit2 = equation.value;
              operator = "X"
              equation.value = ""
            break;
        case "AC":
            equation.value = "";
            digit1 = undefined;
            digit2 = undefined;   
            break;
        case ".":
            equation.value += event.target.value
            elem.removeEventListener("click", equally);
            break;
             
        default:
            equation.value += event.target.value; 
    }
} 
      
} 

button.forEach((elem) => {
    elem.addEventListener("click", equally)
})
