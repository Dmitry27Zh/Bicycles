'use strict';

(function () {
  var mainNavElement = document.querySelector('.main-nav');
  var toggleElement = mainNavElement.querySelector('.main-nav__toggle');

  if (mainNavElement && toggleElement) {
    mainNavElement.classList.remove('main-nav--no-js');

    toggleElement.addEventListener('click', function () {
      if (!mainNavElement.classList.contains('main-nav--opened')) {
        mainNavElement.classList.add('main-nav--opened');
        document.body.classList.add('no-scroll');
      } else {
        mainNavElement.classList.remove('main-nav--opened');
        document.body.classList.remove('no-scroll');
      }
    });
  }
})();

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
