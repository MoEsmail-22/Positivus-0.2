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
