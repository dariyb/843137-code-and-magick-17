'use strict';

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow'];

var getRandomNumbers = function (array) {
  for (var i = 0; i < array.length; i++) {
    var nameIndex = Math.floor(Math.random() * wizardsNames.length);
  }
  return nameIndex;
};


var randomLastName = Math.floor(Math.random() * wizardsLastNames.length);
var randomCoat = Math.floor(Math.random() * coatColor.length);
var randomEyes = Math.floor(Math.random() * eyesColor.length);

var wizards = [
  {
    name: wizardsNames[getRandomNumbers()] + '\n' + wizardsLastNames[randomLastName],
    coatColor: coatColor[randomCoat],
    eyesColor: eyesColor[randomEyes]
  },
  {
    name: wizardsNames[getRandomNumbers()] + '\n' + wizardsLastNames[randomLastName],
    coatColor: coatColor[randomCoat],
    eyesColor: eyesColor[randomEyes]
  },
  {
    name: wizardsNames[getRandomNumbers()] + '\n' + wizardsLastNames[randomLastName],
    coatColor: coatColor[randomCoat],
    eyesColor: eyesColor[randomEyes]
  },
  {
    name: wizardsNames[getRandomNumbers()] + '\n' + wizardsLastNames[randomLastName],
    coatColor: coatColor[randomCoat],
    eyesColor: eyesColor[randomEyes]
  }
];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
