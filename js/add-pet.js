'use strict';

var colorsArray = ['multicolored', 'white', 'tan / brown', 'black', 'grey'];
var animalTypeArray = ['dog', 'cat', 'pig', 'bird', 'rabbit'];
var animalObjectArray;
//onLoad();

var submit = document.getElementById('userInputForm');

function submitForm(event){
  event.preventDefault();
  console.log(event);
  var newName = event.target.petName.value;
  var newType = event.target.petType.value;
  var newAge = event.target.petAge.value;
  var newColor = event.target.petColor.value;
  console.log('event listener for submit' + newName + ' ' +newType);

  var addNewAnimal = new Animal(newName,newType, newAge, newColor);
  console.log(addNewAnimal + '  is the new animal');
  addNewAnimal.saveToLocalStorage();
}

submit.addEventListener('submit', submitForm);
