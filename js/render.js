'use strict';
window.render = (function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  var similar = document.querySelector('.setup-similar');

  var renderWizard = function (wizard) {
    var element = similarWizardTemplate.content.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    element.querySelector('.setup-similar-label').textContent = wizard.name;

    return element;
  };
  var success = function (data) {
    var number = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < number; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }
    similar.classList.remove('hidden');
  };
  return {
    success: success
  };
})();
