'use strict';
window.wizard = (function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLOR);
    wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });
  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLOR);
    wizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });
  return {
    wizard: wizard
  };
})();
