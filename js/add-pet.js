'use strict';

var animalObjectArray = [];
var deleteForm;
var deleteButton;

function submitForm(event){
  event.preventDefault();
  console.log(event);
  var newName = event.target.petName.value;
  var newType = event.target.petType.value;
  var newAge = event.target.petAge.value;
  var newColor = event.target.petColor.value;

  new Animal(newName,newType, newAge, newColor);
  localStorage.setItem('animalObjectArray', JSON.stringify(animalObjectArray));
  createDeleteForm();
}

//creates a form to delete an animal if localStorage has info
/*
  <form id="deleteAnimal">
    <h2>Delete an Animal</h2>
    <button>Delete Animal</button>
  </form>
*/
function createDeleteForm() {
  //if animalObjectArray holds info, show delete feature
  if(animalObjectArray.length > 0) {
    deleteForm = document.createElement('form');
    deleteForm.id = 'deleteAnimal';
    createLabelForDeleteForm();
    createSelectOptions();
    deleteForm.addEventListener('submit', deleteAnimal);
    document.body.appendChild(deleteForm);
  }
}

//helper function to create label
function createLabelForDeleteForm() {
  var label = document.createElement('label');
  label.setAttribute('for', deleteForm.id);
  label.innerText = 'Delete an Animal: search by name ';
  deleteForm.appendChild(label);
}

//helper function to create options for select drop down
function createSelectOptions() {
  var select = document.createElement('select');
  //loop through animalObjectArray to get options for select box
  for (let i = 0; i < animalObjectArray.length; i++) {
    select.options[i] = new Option(`${animalObjectArray[i].name}`, `${animalObjectArray[i].name}`);
  }
  deleteForm.appendChild(select);
  //add button after select created
  createDeleteButton();
  deleteForm.appendChild(deleteButton);
}

//helper function
function createDeleteButton() {
  deleteButton = document.createElement('button');
  deleteButton.id = 'delete';
  deleteButton.value = 'delete';
  deleteButton.innerText = 'Delete Animal';
}

//function that deletes an animal
function deleteAnimal() {
  //get name and match to local storage, remove, refresh array, refresh local storage

}

//document onload function
function renderPage() {
  var submit = document.getElementById('userInputForm');
  onLoad();
  submit.addEventListener('submit', submitForm);
  createDeleteForm();
}

renderPage();
