'use strict'
const button = document.querySelectorAll(".button");
const label = document.querySelectorAll(".label");
const row = document.getElementById("bodyTable");


const table = document.getElementById("tableDate");

 
function clickButton (event){
    let doo = document.getElementsByClassName("row")
    switch (event.target.value){
        case "Create":
           if(doo.length == 0){createFourElement();}else{
            for (let i = 0; i < doo.length; i++ ){
               if (doo[i].children[0].innerHTML === label[0].value){
                 alert("id occupied")
                 return 0;
                }
        }
        createFourElement();
    }
            break;
        case "Update":
            if(doo.length == 0){alert("Table not defined")}else{
                for (let i = 0; i < doo.length; i++ ){
                   if (doo[i].children[0].innerHTML === label[0].value){
                       for (let j = 0; j < 4; j++ ){
                         doo[i].children[j].innerHTML = label[j].value
                        }
                     return 0;
                    }
            }}
            break;
        case "Read":

            break;
        case "Delete":
            if(doo.length == 0){alert("Table not defined")}else{
                for (let i = 0; i < doo.length; i++ ){
                   if (doo[i].children[0].innerHTML === label[0].value){
                     doo[i].remove();
                     return 0;
                    }
            }
            break;
    }
}
}
button.forEach((element) => {
    element.addEventListener("click", clickButton)
})

function createFourElement(){
    let blockRow = document.createElement("div")
    blockRow.classList.add("row")
     for(let i = 0; i < 4; i++){
        let element = document.createElement("div")
        element.classList.add("column")
        element.innerHTML = label[i].value
        blockRow.append(element);

     }
     row.append(blockRow);
     
    }
    