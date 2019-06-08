'use strict';
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var randomName = Math.floor(Math.random() * wizardsNames.length);
var randomLastName = Math.floor(Math.random() * wizardsLastNames);
var wizards = [
  {
    name: wizardsNames[randomName] + wizardsLastNames[randomLastName]
  }
];