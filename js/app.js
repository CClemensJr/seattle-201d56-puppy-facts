/*
jen shin
15 April 2019
Animal object constructor, localStorage instantiation for Animal Farm website
app.js
*/

//move these two arrays to add pet page
var colorsArray = ['multicolored', 'white', 'tan / brown', 'black', 'grey'];
var animalTypeArray = ['dog', 'cat', 'pig', 'bird', 'rabbit'];
var animalObjectArray;

function Animal(name, type, age, color) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  animalObjectArray.push(this);
}

//wrapper function to load whatever needs to happen when page is opened
function onLoad() {
  //check if animalsArray exists in localStorage
  if(localStorage.animalObjectArray) {
    for (let i = 0; i < localStorage.animalObjectArray.length; i++) {
      var temp = JSON.parse(animalObjectArray[i]);
      new Animal (temp.name, temp.type, temp.age, temp.color);
    }
  } else {
    animalObjectArray = [];
  }
}

onLoad();
