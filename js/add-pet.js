'use strict';

var animalObjectArray = [];

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

submit.addEventListener('submit', submitForm);
