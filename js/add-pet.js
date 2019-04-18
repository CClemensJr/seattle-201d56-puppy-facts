'use strict';

var animalObjectArray = [];
var deleteForm;
var deleteButton;
var select;
var duplicateObject = {};
var newName;
var newType;
var newAge;
var newColor;
var animalDetails;

function submitForm(event){
  event.preventDefault();
  if(animalObjectArray.length === 0){
    createNewAnimalWithInput();
  }
  else {
    duplicateObject.name = event.target.petName.value;
    duplicateObject.type = event.target.petType.value;
    duplicateObject.age = event.target.petAge.value;
    duplicateObject.color = event.target.petColor.value;
    var check = false;
    for(var i=0; i<animalObjectArray.length; i++){
      check = JSON.stringify(duplicateObject) === JSON.stringify(animalObjectArray[i]);
      if(check) {
        alert('This is a duplicate entry.');
        //animalObjectArray.splice(i,1);
        break;
      }
    }
    if(!check) {
      createNewAnimalWithInput();
    }
  }
}

//helper function to create new Animal with form input
function createNewAnimalWithInput() {
  console.log('enters non duplicate function');
  newName = event.target.petName.value;
  newType = event.target.petType.value;
  newAge = event.target.petAge.value;
  newColor = event.target.petColor.value;
  new Animal(newName,newType, newAge, newColor);

  localStorage.setItem('animalObjectArray', JSON.stringify(animalObjectArray));
  location.reload();
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
    deleteForm.addEventListener('change', showAnimalDetails);
    deleteForm.addEventListener('submit', deleteAnimal);
    document.body.appendChild(deleteForm);
  }
}

//helper function to create label
function createLabelForDeleteForm() {
  var h2 = document.createElement('h2')
  var label = document.createElement('label');

  h2.innerText = 'Delete an Animal';
  label.setAttribute('for', deleteForm.id);
  label.innerText = 'Pet Name:';

  deleteForm.appendChild(h2);
  deleteForm.appendChild(label);
}

//helper function to create options for select drop down
function createSelectOptions() {
  select = document.createElement('select');
  //loop through animalObjectArray to get options for select box
  for (let i = 0; i < animalObjectArray.length; i++) {
    select.options[i] = new Option(`${animalObjectArray[i].name}`, `${animalObjectArray[i].name}, ${i}`);
  }
  deleteForm.appendChild(select);
  //TODO show animal details
  animalDetails = document.createElement('p');
  createAnimalDetailsP(0);
  deleteForm.appendChild(animalDetails);
  //add button after select created
  createDeleteButton();
  deleteForm.appendChild(deleteButton);
}

//helper function to show animal details for delete select
function showAnimalDetails(event) {
  console.log(event, ' EVENT!!!');
  var selectedOption = select.options[select.selectedIndex].value;
  var selectedIndex = selectedOption.substring(selectedOption.indexOf(', ') + 1, selectedOption.length);
  animalDetails.innerHTML = '';
  createAnimalDetailsP(Number(selectedIndex));
  console.log(selectedIndex, ' make some changes on this');
}

//helper function for animal details p creation
function createAnimalDetailsP(index) {
  animalDetails.id = 'details';
  animalDetails.innerHTML = `<ul><li>Type: ${animalObjectArray[index].type}</li><li>Color: ${animalObjectArray[index].color}</li><li>Age: ${animalObjectArray[index].age}</li>`;
}

//helper function that creates button for delete form
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
  var selectedIndex = selectedOption.substring(selectedOption.indexOf(', ') + 1, selectedOption.length);
  console.log(selectedIndex, ' here is the selected option value');
  animalObjectArray.splice(selectedIndex, 1);
  if(animalObjectArray.length) {
    localStorage.setItem('animalObjectArray', JSON.stringify(animalObjectArray));
  } else {
    localStorage.clear();
  }
  location.reload();
}

//document onload function
function renderPage() {
  var submit = document.getElementById('userInputForm');
  submit.addEventListener('submit', submitForm);
  createDeleteForm();
}
onLoad();
renderPage();
