'use strict';

var animalObjectArray = [];
var deleteForm;

var submit = document.getElementById('userInputForm');

function submitForm(event){
  event.preventDefault();
  console.log(event);
  var newName = event.target.petName.value;
  var newType = event.target.petType.value;
  var newAge = event.target.petAge.value;
  var newColor = event.target.petColor.value;

  new Animal(newName,newType, newAge, newColor);
  localStorage.setItem('animalObjectArray', JSON.stringify(animalObjectArray));
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
}

//function that deletes an animal
function deleteAnimal() {
  //get name and match to local storage, remove, refresh array, refresh local storage

}

onLoad();
submit.addEventListener('submit', submitForm);
createDeleteForm();
