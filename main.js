
//initializing the taskNumber to 1
let taskNumber = 1;
let textInput = document.getElementById("form1");
//Associating a Listening event to the saveButton
let saveButton = document.getElementById("button");
saveButton.addEventListener("click", addTask);

//// Function displaying LocalStorage content//////////////////////////////////////////////////////

function displayLocalStorageContent() {
    for (let i = 0; i < localStorage.length ; i++) {
      let taskName = localStorage.getItem(localStorage.key(i));

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
      cel1.innerHTML = i + 1;
      cel2.innerHTML = taskName;
      cel3.innerHTML = status;
      cel4.appendChild(newDeleteButton);
      cel5.appendChild(newFinishedButton);
    }
}

///////////////////////////////////
displayLocalStorageContent();
//////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
function addTaskToLocalStorage() {
  let taskname = "task" + taskNumber;
  localStorage.setItem(taskname, textInput.value);
}
///////////////////////////////////////////////////////////////////////////////////////////////////

function addTask() {
  addTaskToLocalStorage(); ////////////////////////////////////////////////////////////////////////
  let task = textInput.value;
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
  textInput.value = "";
  textInput.focus();
}

