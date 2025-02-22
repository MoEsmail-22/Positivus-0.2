'use strict';

document.querySelectorAll('.less').forEach(function (element) {
  element.addEventListener('click', function () {
    const parentBox = element.closest('.boxWork');

    // Collapse all other boxes first
    document.querySelectorAll('.boxWork.more').forEach(function (box) {
      if (box !== parentBox) {
        // Avoid collapsing the one being clicked
        box.classList.remove('more');
        box.classList.add('ather');
      }
    });

    parentBox.classList.toggle('more');
    parentBox.classList.toggle('ather');
  });
});

const menu = document.querySelector('.burger');
const hiddenMnue = document.querySelector('.hiddeMe');

menu.addEventListener('click', function () {
  hiddenMnue.style.left === '0%'
    ? (hiddenMnue.style.left = '-100%')
    : (hiddenMnue.style.left = '0%');

  for (let i = 1; i => 3; i++) {
    document.querySelector(`.s${i}`).classList.toggle(`burger${i}`);
  }
});
