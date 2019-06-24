'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupBlock = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');

  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.querySelector('input[name=coat-color]');
  var eyesInput = document.querySelector('input[name=eyes-color]');
  var fireballInput = document.querySelector('input[name=fireball-color]');

  var form = document.querySelector('.setup-wizard-form');
  var buttonSubmit = document.querySelector('.setup-submit');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };
  var openPopup = function () {
    setupBlock.classList.remove('hidden');
    setupBlock.style.top = '80px';
    setupBlock.style.left = '50%';
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
  setupClose.addEventListener('focus', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  setupUserName.addEventListener('focus', function () {
    window.removeEventListener('keydown', onPopupEscPress);
  });

  var getRandomNumbers = function () {
    for (var i = 0; i < coatColor.length; i++) {
      var randomCoatColor = Math.floor(Math.random() * coatColor.length);
      return randomCoatColor;
    }
    for (i = 0; i < eyesColor.length; i++) {
      var randomEyesColor = Math.floor(Math.random() * eyesColor.length);
      return randomEyesColor;
    }
    for (i = 0; i < fireballColors.length; i++) {
      var randomFirevallColor = Math.floor(Math.random() * fireballColors.length);
      return randomFirevallColor;
    }
    return getRandomNumbers();
  };

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = coatColor[getRandomNumbers(coatColor)];
    coatInput.value = wizardCoat.style.fill;
  });
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = eyesColor[getRandomNumbers(eyesColor)];
    eyesInput.value = wizardEyes.style.fill;
  });
  fireballColor.addEventListener('click', function () {
    fireballInput.value = fireballColors[getRandomNumbers(fireballColors)];
    fireballColor.style.background = fireballInput.value;
  });

  buttonSubmit.addEventListener('click', function () {
    form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), function (response) {
        setupBlock.classList.add('hidden');
      });
      evt.preventDefault();
    });
  });
  buttonSubmit.addEventListener('focus', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      form.addEventListener('submit', function () {
        evt.preventDefault();
      });
    }
  });

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
  window.backend.load(successHandler, errorHandler);
})();
