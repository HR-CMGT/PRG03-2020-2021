window.addEventListener("load", init);

let todoItems = [];
const form = document.querySelector("#todo-form");
const field = document.querySelector("#todo-field");
const list = document.querySelector("#list");

// form listener toevoegen, localstorage uitlezen
function init(){
    form.addEventListener("submit", formSubmitHandler);
    let storedString = localStorage.getItem('myTodo');

    if(storedString) {
        let storedData = JSON.parse(storedString);
        for(let todo of storedData) {
            addTodoItem(todo);
        }
    }
}

// form is gesubmit
function formSubmitHandler(event) {
    event.preventDefault();

    if(field.value != "" && field.value != undefined) {
        addTodoItem(field.value);
        todoItems.push(field.value);
        localStorage.setItem('myTodo', JSON.stringify(todoItems));
        field.value = "";
    }
}

// <li> item aan de DOM toevoegen
function addTodoItem(todoText) {
    const listitem = document.createElement("li");
    listitem.innerText = todoText;
    list.appendChild(listitem);
}