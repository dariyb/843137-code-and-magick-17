'use strict';
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow'];
var randomName = Math.floor(Math.random() * wizardsNames.length);
var randomLastName = Math.floor(Math.random() * wizardsLastNames.length);
var wizards = [
  {
    name: Math.random() * wizardsNames[randomName] + '\n' + wizardsLastNames[randomLastName],
    coatColor: coatColor[2]
  },
  {
    name: wizardsNames[randomName] + '\n' + wizardsLastNames[randomLastName]
  },
  {
    name: wizardsNames[randomName] + '\n' + wizardsLastNames[randomLastName]
  },
  {
    name: wizardsNames[randomName] + '\n' + wizardsLastNames[randomLastName]
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
