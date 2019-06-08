'use strict';

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow'];

var getRandomNumbers = function () {
  for (var i = 0; i < wizardsNames.length; i++) {
    var randomName = Math.floor(Math.random() * wizardsNames.length);
    return randomName;
  }
  for (i = 0; i < wizardsLastNames.length; i++) {
    var randomSurname = Math.floor(Math.random() * wizardsLastNames.length);
    return randomSurname;
  }
  for (i = 0; i < coatColor.length; i++) {
    var randomCoatColor = Math.floor(Math.random() * coatColor.length);
    return randomCoatColor;
  }
  for (i = 0; i < eyesColor.length; i++) {
    var randomEyesColor = Math.floor(Math.random() * eyesColor.length);
    return randomEyesColor;
  }
  return getRandomNumbers();
};

var wizards = [
  {
    name: wizardsNames[getRandomNumbers(wizardsNames)] + '\n' + wizardsLastNames[getRandomNumbers(wizardsLastNames)],
    coatColor: coatColor[getRandomNumbers(coatColor)],
    eyesColor: eyesColor[getRandomNumbers(eyesColor)]
  },
  {
    name: wizardsNames[getRandomNumbers(wizardsNames)] + '\n' + wizardsLastNames[getRandomNumbers(wizardsLastNames)],
    coatColor: coatColor[getRandomNumbers(coatColor)],
    eyesColor: eyesColor[getRandomNumbers(eyesColor)]
  },
  {
    name: wizardsNames[getRandomNumbers(wizardsNames)] + '\n' + wizardsLastNames[getRandomNumbers(wizardsLastNames)],
    coatColor: coatColor[getRandomNumbers(coatColor)],
    eyesColor: eyesColor[getRandomNumbers(eyesColor)]
  },
  {
    name: wizardsNames[getRandomNumbers(wizardsNames)] + '\n' + wizardsLastNames[getRandomNumbers(wizardsLastNames)],
    coatColor: coatColor[getRandomNumbers(coatColor)],
    eyesColor: eyesColor[getRandomNumbers(eyesColor)]
  }
];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
