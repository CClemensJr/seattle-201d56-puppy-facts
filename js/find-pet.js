'use strict';

var animalObjectArray = [];
var ulEl;
var liEl;

onLoad();

function render(){
  var divEl = document.getElementById('elements');

  for (var i = 0; i < animalObjectArray.length; i ++){
    console.log(animalObjectArray[i]);

    ulEl = document.createElement('ul');
    ulEl.id = animalObjectArray[i].type;
    liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = '../assets/imganimals/' + animalObjectArray[i].type + '.jpg';
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);

    createLi(i, 'Name:', 'name');
    createLi(i, 'Animal Type:', 'type');
    createLi(i, 'Age:', 'age');
    createLi(i, 'Color:', 'color');

    /*
    var liEl2 = document.createElement('li');
    liEl2.innerText = 'Name: ' + animalObjectArray[i].name;
    ulEl.appendChild(liEl2);

    var liEl3 = document.createElement('li');
    liEl3.innerText = 'Breed: ' + animalObjectArray[i].type;
    ulEl.appendChild(liEl3);

    var liEl4 = document.createElement('li');
    liEl4.innerText = 'Age: ' + animalObjectArray[i].age;
    ulEl.appendChild(liEl4);

    var liEl5 = document.createElement('li');
    liEl5.innerText = 'Color: ' + animalObjectArray[i].color;
    ulEl.appendChild(liEl5);
    */
    divEl.appendChild(ulEl);
  }
}

//helper function to create li - jen
function createLi(i, text, property) {
  liEl = document.createElement('li');
  liEl.innerText = `${text} ` + animalObjectArray[i][property];
  ulEl.appendChild(liEl);
}

render();
