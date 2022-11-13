// displayLocalStorageContent at the moment of the refresh;
window.addEventListener("DOMContentLoaded", displayLocalStorageContent);
//initializing the taskNumber to 1
let taskNumber = 1;
let num = "taskNumber";
localStorage.setItem(num, taskNumber);
taskNumber = localStorage.length - 1;

let textInput = document.getElementById("form1");
//Associating a Listening event to the saveButton
let saveButton = document.getElementById("button");
saveButton.addEventListener("click", addTask);
 

//// Function displaying LocalStorage content//////////////////////////////////////////////////////

function displayLocalStorageContent() {
  for (let i =1; i<=taskNumber; i++) {
    let taskName = localStorage["task"+i];
    let table = document.getElementsByTagName("table")[0];
    let new_row = table.insertRow(1);
    let newDeleteButton = document.createElement("button");
    let newFinishedButton = document.createElement("button");
    newDeleteButton.textContent = "Delete";
    newFinishedButton.textContent = "Finished";
    newDeleteButton.style.backgroundColor = "red";
    newFinishedButton.style.backgroundColor = "#04812e";
    let status = "In progress";
    let cel1 = new_row.insertCell(0);
    let cel2 = new_row.insertCell(1);
    let cel3 = new_row.insertCell(2);
    let cel4 = new_row.insertCell(3);
    let cel5 = new_row.insertCell(4);
    cel1.innerHTML = i;
    cel2.innerHTML = taskName;
    cel3.innerHTML = status;
    cel4.appendChild(newDeleteButton);
    cel5.appendChild(newFinishedButton);
  }
  localStorage[num] = taskNumber;
  taskNumber = parseInt(localStorage[num]) + 1;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
function addTaskToLocalStorage() {
  let taskname = "task" + taskNumber;
  if (textInput.value) {
    localStorage.setItem(taskname, textInput.value);
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

function addTask() {
  addTaskToLocalStorage(); ////////////////////////////////////////////////////////////////////////
  let task = textInput.value;
  if (task) {
    let table = document.getElementsByTagName("table")[0];
    let new_row = table.insertRow(1);
    //creating new buttons
    let newDeleteButton = document.createElement("button");
    let newFinishedButton = document.createElement("button");
    newDeleteButton.textContent = "Delete";
    newFinishedButton.textContent = "Finished";
    newDeleteButton.style.backgroundColor = "red";
    newFinishedButton.style.backgroundColor = "#04812e";
    let status = "In progress";
    var cel1 = new_row.insertCell(0);
    var cel2 = new_row.insertCell(1);
    var cel3 = new_row.insertCell(2);
    var cel4 = new_row.insertCell(3);
    var cel5 = new_row.insertCell(4);
    cel1.innerHTML = taskNumber;
    cel2.innerHTML = task;
    cel3.innerHTML = status;
    cel4.appendChild(newDeleteButton);
    cel5.appendChild(newFinishedButton);
    taskNumber++;
    localStorage[num] = taskNumber;
    textInput.value = "";
    textInput.focus();
  }
}
