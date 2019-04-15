'use strict';

var colorsArray = ['multicolored', 'white', 'tan / brown', 'black', 'grey'];
var animalTypeArray = ['dog', 'cat', 'pig', 'bird', 'rabbit'];

var submit = document.getElementById('userInputForm');

function submitForm(event){
  var newName = event.target.petName.value;
  var newType = event.target.petType.value;
  var newAge = event.target.petAge.value;
  var newColor = event.target.petColor.value;

  var addNewAnimal = new Animal(newName,newType, newAge, newColor);
  addNewAnimal.saveToLocalStorage();
}

submit.addEventListener('click', submitForm);
