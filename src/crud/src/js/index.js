'use strict'


// var table

const button = document.querySelectorAll(".value__data-button");
const label = document.querySelectorAll(".value__data-text");
const row = document.getElementById("base__data");
const doo = document.getElementsByClassName("data__row");


//var radio button

const radio = document.querySelectorAll(".radio__name");

// create local storage if does not exist

if (!localStorage.getItem("person")) {
    localStorage.setItem("person", JSON.stringify([]))
}

// Function button click

function clickButton(event) {

    switch (event.target.value) {
        case "Create":
            createFourElement();
            break;
        case "Update":
            for (let i = 0; i < label.length; i++) {
                if (!label[i].value) {
                    alert("Поля пустые")
                    return false;
                }
            }
            updateTable(label[0].value);
            break;
        case "Delete":
            delElStorage(label[0].value)
            break;
    }
}

// Logic for saved information about persone

function createFourElement() {
    for (let i = 0; i < label.length; i++) {
        if (!label[i].value) {
            alert("Поля пустые")
            return false;
        }
    }
    for (let i = 0; i < doo.length; i++) {
        if (doo[i].children[0].innerHTML === label[0].value) {
            alert("Человек с таким индентификатором уже существует")
            return false;
        }
    }

    let person = JSON.parse(localStorage.getItem("person"));
    for (let i = 0; i < person.length; i++) {
        if (person[i].id === label[0].value) return alert("Человек с таким индентификатором уже существует в базе")
    }
    let blockRow = document.createElement("div")
    blockRow.classList.add("data__row")
    let arr = [];
    for (let i = 0; i < label.length; i++) {
        let element = document.createElement("p")
        element.classList.add("column")
        element.innerHTML = label[i].value
        arr[i] = label[i].value;
        blockRow.append(element);
        label[i].value = "";

    }

    AddLStorage(arr)
    row.append(blockRow);
    return doo[doo.length - 1];
}

// Add person in UI and Data Base
function AddLStorage(arr) {
    let person = JSON.parse(localStorage.getItem("person"));
    person[person.length] = {
        id: arr[0],
        firstName: arr[1],
        lastName: arr[2],
        age: arr[3],
        phone: arr[4],
        email: arr[5]
    }

    localStorage.setItem("person", JSON.stringify(person))
    return localStorage.getItem("person")
}

function delElStorage(id) {
    let person = JSON.parse(localStorage.getItem("person"));
    for (let i = 0; i < person.length; i++) {
        if (person[i].id === id) {
            person.splice(i, 1);
            localStorage.setItem("person", JSON.stringify(person))
        }
    }

    if (doo.length === 0) {
        alert("Table not defined");
        return false;
    } else {
        for (let i = 0; i < doo.length; i++) {
            if (doo[i].children[0].innerHTML === id) {
                doo[i].remove();
                return true;
            }
        }
    }
}
// Update table in UI and Data Base
function updateTable(id) {
    let person = JSON.parse(localStorage.getItem("person"));
    if (doo.length === 0) {
        alert("Table not defined")
        return false;
    } else {
        for (let i = 0; i < doo.length; i++) {
            if (doo[i].children[0].innerHTML === id) {
                for (let k = 0; k < label.length; k++) {
                    doo[i].children[k].innerHTML = label[k].value;
                }
            }
        }
        for (let i = 0; i < person.length; i++) {
            if (person[i].id === id) {
                person[i] = {
                    id: label[0].value,
                    firstName: label[1].value,
                    lastName: label[2].value,
                    age: label[3].value,
                    phone: label[4].value,
                    email: label[5].value
                }
                localStorage.setItem("person", JSON.stringify(person))
            }
        }
    }
}
// Read of Data Base for insert in UI
function dataRead() {
    let person = JSON.parse(localStorage.getItem('person'));
    let s = doo.length;
    for (let i = 0; i < s; i++) {
        doo[doo.length - 1].remove();
    }
    for (let i = 0; i < person.length; i++) {
        let blockRow = document.createElement("div")
        blockRow.classList.add("data__row")
        let values = Object.values(person[i])
        for (let j = 0; j < label.length; j++) {
            let element = document.createElement("p")
            element.classList.add("column")
            element.innerHTML = values[j]
            blockRow.append(element);
        }
        row.append(blockRow);
    }

}
// function radio checked
function radioCheck(event) {
    dataRead();
}
// Button Click Initialization
button.forEach((element) => {
    element.addEventListener("click", clickButton);
})

// Radio check

radio.forEach((elem) => {
    elem.addEventListener("change", radioCheck)
})