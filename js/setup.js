'use strict';

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
var buttonSubmit = document.querySelector('.button .setup-submit');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};
var openPopup = function () {
  setupBlock.classList.remove('hidden');
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
  document.removeEventListener('keydown', onPopupEscPress);
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
