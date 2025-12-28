/**
 1. Todo List with Categories
    - Store tasks in an array of objects
    - Filter/sort tasks using loops and conditionals
    - Functions for add/delete/complete tasks
    - Great for refactoring repeated code
 */

const inputChecks = document.getElementById("check");
const inputText = document.getElementById("text");
const button = document.getElementById("btn");
const mylist = document.getElementById("list");
const delbtn = document.getElementById("deleteBtn");

function complete() {}
function deleteInput() {}

function add() {
  const newInput = document.createElement("input");
  const newCheck = document.createElement("input");
  const container = document.createElement("div");
  const breaks = document.createElement("br");

  newCheck.setAttribute("type", "checkbox");
  container.appendChild(breaks);
  container.appendChild(newCheck);
  container.appendChild(newInput);

  mylist.appendChild(container);
}

button.addEventListener("click", add);
