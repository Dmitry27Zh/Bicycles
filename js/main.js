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
