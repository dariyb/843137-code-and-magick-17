'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupBlock = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');

  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('input[name=fireball-color]');

  var form = document.querySelector('.setup-wizard-form');
  var buttonSubmit = document.querySelector('.setup-submit');

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
    for (var i = 0; i < fireballColors.length; i++) {
      var randomFirevallColor = Math.floor(Math.random() * fireballColors.length);
      return randomFirevallColor;
    }
    return getRandomNumbers();
  };

  fireballColor.addEventListener('click', function () {
    fireballInput.value = fireballColors[getRandomNumbers(fireballColors)];
    fireballColor.style.background = fireballInput.value;
  });

  buttonSubmit.addEventListener('click', function () {
    form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), function () {
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
})();
