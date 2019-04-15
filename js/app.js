/*
jen shin
15 April 2019
Animal object constructor, localStorage instantiation for Animal Farm website
app.jsgit 
*/

//move these two arrays to add pet page
'use strict';

var colorsArray = ['multicolored', 'white', 'tan / brown', 'black', 'grey'];
var animalTypeArray = ['dog', 'cat', 'pig', 'bird', 'rabbit'];
var animalObjectArray = [];

function Animal(name, type, age, color) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  animalObjectArray.push(this);
}

//save to local storage
Animal.prototype.saveToLocalStorage = function() {
  localStorage.setItem('animalObjectArray', JSON.stringify(this.animalObjectArray));
}

//wrapper function to load whatever needs to happen when page is opened
function onLoad() {
  //check if animalsArray exists in localStorage, else instantiate animalObjectArray
  var localAnimals = localStorage.getItem('animalObjectArray');
  var parsedAnimals = JSON.parse(localAnimals);

  if (parsedAnimals && parsedAnimals.length) {
    animalObjectArray = parsedAnimals;
  }
}

onLoad();
