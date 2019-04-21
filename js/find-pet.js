'use strict';

var animalObjectArray = [];
var ulEl;
var liEl;
var typeFilter = '';
var i;
var divEl;

/*
Stretch Goal:
animalObjectArray.includes("type")
false
animalObjectArray[0].type.includes("cat")
true
animalObjectArray[0].type.includes("dog")
false
animalObjectArray[0].type.includes("pig")
false
animalObjectArray[1].type.includes("pig")
true

console tests - dynamically create select on html page to only show available types
*/

function render(){
  divEl = document.getElementById('elements');
  //divEl.innerHTML = '';
  for (i = 0; i < animalObjectArray.length; i++){
    if(typeFilter) {
      if(animalObjectArray[i].type === typeFilter) {
        console.log('about to attach animal ', i);
        showAvailableAnimals();
      }
    } else {
      console.log('if typefilter is on, should not be in this loop!!!');
      showAvailableAnimals();
    }
  }
  typeFilter = '';
}

//helper function to show all available animals
function showAvailableAnimals() {
  ulEl = document.createElement('ul');
  ulEl.id = animalObjectArray[i].type;
  liEl = document.createElement('li');
  var imgEl = document.createElement('img');
  //https://github.com/CClemensJr/seattle-201d56-puppy-facts/blob/master/assets/imganimals/bird.jpg
  imgEl.src = '../assets/imganimals/bird.jpg' + animalObjectArray[i].type + '.jpg';
  liEl.appendChild(imgEl);
  ulEl.appendChild(liEl);
  //create li elements with each object property
  createLi('Name:', 'name');
  createLi('Animal Type:', 'type');
  createLi('Age:', 'age');
  createLi('Color:', 'color');
  divEl.appendChild(ulEl);
}

//function to get filter from select list, put value into filter var
function filter(event) {
  event.preventDefault();
  //get selected option value
  var select = document.getElementById('typeList');
  var selectedOption = select.options[select.selectedIndex].value;
  console.log(selectedOption, ' here is the selected option value');
  typeFilter = selectedOption;
  var divEl = document.getElementById('elements');
  i = 0;
  while (divEl.firstElementChild) {
    console.log('removing ', divEl.firstElementChild.innerHTML);
    divEl.removeChild(divEl.firstElementChild);
  }
  if(select.options[select.selectedIndex].value === 'all'){
    render();
  }
  render();
}

//helper function to create li - jen
function createLi(text, property) {
  liEl = document.createElement('li');
  liEl.innerText = `${text} ` + animalObjectArray[i][property];
  ulEl.appendChild(liEl);
}

onLoad();

//get button for select form, attach event handler
var filterByType = document.getElementById('selectByType');
filterByType.addEventListener('submit', filter);

render();
