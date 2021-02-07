'use strict';

(function () {
  var callbackForm = document.querySelector('.promo__callback');
  var inputTel = callbackForm.querySelector('input[type="tel"');
  var pattern = '^([+]7|8)[0-9]{10}$';

  inputTel.addEventListener('input', function () {
    if (inputTel.value.length >= 11 && !inputTel.value.match(pattern)) {
      inputTel.setCustomValidity(inputTel.dataset.error);
    } else {
      inputTel.setCustomValidity('');
    }
    inputTel.reportValidity();
  });

  callbackForm.addEventListener('submit', function (evt) {
    if (!inputTel.value.match(pattern)) {
      evt.preventDefault();
      inputTel.setCustomValidity(inputTel.dataset.error);
    } else {
      inputTel.setCustomValidity('');
    }
    inputTel.reportValidity();
  });
})();
