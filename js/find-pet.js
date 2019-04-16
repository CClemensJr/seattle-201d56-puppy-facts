'use strict';

var animalObjectArray = [];
onLoad();

function render(){
  var divEl = document.getElementById('elements');

  for (var i = 0; i < animalObjectArray.length; i ++){
    console.log(animalObjectArray[i]);

    var ulEl = document.createElement('ul');
    var liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    imgEl.src = '../assets/imganimals/' + animalObjectArray[i].type + '.jpg';
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);

    var liEl2 = document.createElement('li');
    liEl2.innerText = animalObjectArray[i].name;
    ulEl.appendChild(liEl2);

    var liEl3 = document.createElement('li');
    liEl3.innerText = animalObjectArray[i].type;
    ulEl.appendChild(liEl3);

    var liEl4 = document.createElement('li');
    liEl4.innerText = animalObjectArray[i].age;
    ulEl.appendChild(liEl4);

    var liEl5 = document.createElement('li');
    liEl5.innerText = animalObjectArray[i].color;
    ulEl.appendChild(liEl5);

    divEl.appendChild(ulEl);

  }
}
render();