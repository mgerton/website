// TODO: refactor
document.addEventListener('DOMContentLoaded', function main() {
  var aboutSection = document.querySelector('.slideout-about');

  var overlay = document.querySelector('.overlay');

  var aboutButton = document.querySelector('.btn-about');
  var closeLink = document.querySelector('.slide-panel .close');

  // Elements that should trigger the off-canvas section
  var toggleElements = [
    aboutButton,
    closeLink,
    overlay
  ];

  function toggleOffCanvas(e) {
      e.preventDefault();

      aboutButton.classList.toggle('active');
      closeLink.classList.toggle('active');

      aboutSection.classList.toggle('slide-panel-open');
      overlay.classList.toggle('visible');
  }

  toggleElements.forEach(function (el) {
    el.addEventListener('click', toggleOffCanvas, false);
  });
}, false);
