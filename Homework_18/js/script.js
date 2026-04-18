"use strict";

let form = document.forms.username;
let { firstName } = form;

let list = document.getElementById("list");

form.onsubmit = (event) => {
  event.preventDefault();

  if (firstName.value.trim() === "") {
    console.error("Error, please enter your name");
    return;
  }

  let li = document.createElement("li");
  li.className = "listOfUsers";
  list.append(li);
  li.append(firstName.value);
  firstName.value = "";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  li.prepend(checkbox);

  let button = document.createElement("button");
  button.innerHTML = "Delete";
  button.className = "del";
  li.append(button);

  console.log(list);
};

list.onchange = (event) => {
  let isAccepted = event.target.className === "checkbox";
  if (isAccepted) {
    let listOfUsersBlock = event.target.closest(".listOfUsers");
    let button=listOfUsersBlock.querySelector(".del")
    let checkbox=listOfUsersBlock.querySelector(".checkbox")
    let isDisabled = event.target.checked;

    button.disabled = isDisabled;
    checkbox.disabled = isDisabled;
    listOfUsersBlock.classList.add("active");
  }
  
  console.log(list);
};

list.onclick = (event) => {
  let isRemoveLI = event.target.className === "del";

  if (isRemoveLI) {
    let listOfUsersBlock = event.target.closest(".listOfUsers");
    listOfUsersBlock.remove();
  }
};

