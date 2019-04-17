'use strict';

var animalObjectArray = [];
var ulEl;
var liEl;
var typeFilter;

function render(){
  var divEl = document.getElementById('elements');

  for (var i = 0; i < animalObjectArray.length; i++){
    console.log(animalObjectArray[i]);

    ulEl = document.createElement('ul');
    ulEl.id = animalObjectArray[i].type;
    liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = '../assets/imganimals/' + animalObjectArray[i].type + '.jpg';
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
    //create li elements with each object property
    createLi(i, 'Name:', 'name');
    createLi(i, 'Animal Type:', 'type');
    createLi(i, 'Age:', 'age');
    createLi(i, 'Color:', 'color');

    divEl.appendChild(ulEl);
  }
}

//function to show only images by type
function filter(event) {
  event.preventDefault();
  //get selected option value
  var select = document.getElementById('typeList');
  var selectedOption = select.options[select.selectedIndex].value;
  console.log(selectedOption, ' here is the selected option value');
  typeFilter = selectedOption;
  render();
}

//helper function to create li - jen
function createLi(i, text, property) {
  liEl = document.createElement('li');
  liEl.innerText = `${text} ` + animalObjectArray[i][property];
  ulEl.appendChild(liEl);
}

onLoad();

//get button for select form, attach event handler
var filterByType = document.getElementById('selectByType');
filterByType.addEventListener('submit', filter);

render();
