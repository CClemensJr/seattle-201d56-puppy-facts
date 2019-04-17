'use strict';

var animalObjectArray = [];
var deleteForm;
var deleteButton;
var select;
var duplicateObject = {
  name: '',
  type: '',
  age: '',
  color: ''
}

function submitForm(event){
  event.preventDefault();
  if(animalObjectArray.length === 0){
    var newName = event.target.petName.value;
    var newType = event.target.petType.value;
    var newAge = event.target.petAge.value;
    var newColor = event.target.petColor.value;

    new Animal(newName,newType, newAge, newColor);

    localStorage.setItem('animalObjectArray', JSON.stringify(animalObjectArray));
    location.reload();
  }
  else {
    duplicateObject.name = event.target.petName.value;
    duplicateObject.type = event.target.petType.value;
    duplicateObject.age = event.target.petAge.value;
    duplicateObject.color = event.target.petColor.value;

    // if (isEqual(duplicateObject, animalObjectArray)){
    //   alert('duplicate entry!!!');
    //   console.log('enters duplicate function');
    // }
    for(var i=0; i<animalObjectArray.length; i++){
      var check = JSON.stringify(duplicateObject) === JSON.stringify(animalObjectArray[i]);
      if(!check) {
        alert('duplicate');
        break;
      }
    }
    console.log('enters non duplicate function');
    newName = event.target.petName.value;
    newType = event.target.petType.value;
    newAge = event.target.petAge.value;
    newColor = event.target.petColor.value;
    new Animal(newName,newType, newAge, newColor);

    localStorage.setItem('animalObjectArray', JSON.stringify(animalObjectArray));
    //location.reload();
  }
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
  label.innerText = 'Delete an Animal: Search by name ';
  deleteForm.appendChild(label);
}

//helper function to create options for select drop down
function createSelectOptions() {
  select = document.createElement('select');
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
function deleteAnimal(event) {
  event.preventDefault();
  //get selected option value
  var selectedOption = select.options[select.selectedIndex].value;
  console.log(selectedOption, ' here is the selected option value');
  for (let i = 0; i < animalObjectArray.length; i++) {
    if(selectedOption === animalObjectArray[i].name) {
      console.log('hooray! your index is: ', i);
      animalObjectArray.splice(i, 1);
      console.table(animalObjectArray);
      if(animalObjectArray.length) {
        localStorage.setItem('animalObjectArray', JSON.stringify(animalObjectArray));
      } else {
        localStorage.clear();
      }
      location.reload();
    }
  }
  //get name and match to local storage, remove, refresh array, refresh local storage
  console.log(event);
}

//document onload function
function renderPage() {
  var submit = document.getElementById('userInputForm');
  submit.addEventListener('submit', submitForm);
  createDeleteForm();
}
onLoad();
renderPage();


//function to check duplicate entries
//https://www.youtube.com/watch?v=GgfIby_T8yg
function isEqual(object1, object2){
  var object1keys = Object.keys(object1);
  var object2keys = Object.keys(object2);

  if(object1keys.length !==object2keys.length){
    return false;
  }

  for(var i of object1keys)
    if(object1[i] !== object2[i]){
      return false;
    }
  return true;
}
