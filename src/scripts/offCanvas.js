// playing with different component approaches for the offcanvas menu

/**
 * Stamp/object approach (uses stampit)
 */

var offCanvasTrigger = stampit()
  .props({ element: null })
  .init(function init() {
    if (this.element) {
      this.events = {
        active: new CustomEvent('offcanvas:active'),
        open: new CustomEvent('offcanvas:open')
      };

      this.element.addEventListener('click', this.toggle, false);
    } else {
      throw new Error('offCanvasTrigger requires an element to be defined.');
    }
  })
  .methods({
    toggle: function toggle(e) {
      e.preventDefault();

      // broadcast an 'active' event so all other instances of component know to change their state
      this.element.dispatchEvent(this.events.active, {});

      // broadcast an additional 'open' event that the section component(s) can listen for
      this.element.dispatchEvent(this.events.open, {});

      // aboutButton.classList.toggle('active');
      // closeLink.classList.toggle('active');

      // aboutSection.classList.toggle('slide-panel-open');
      // overlay.classList.toggle('visible');
    }
  });

// example usage
var aboutButtom = offCanvasTrigger({ element: document.querySelector('.btn-about') });
var aboutSection = offCanvasSection({ element: document.querySelector('.slide-panel') });

/**
 * Class-based approach
 */

function OffCanvasTrigger(selector) {
  this.ACTIVE_CLASS = 'active';
  this.el = document.querySelector(selector);

  this.events = {
    active: new CustomEvent('offcanvas:active'),
    open: new CustomEvent('offcanvas:open')
  };

  // setup code
  this.el.addEventListener('click', this.toggle, false);
}

OffCanvasTrigger.prototype.toggle = function (e) {
  e.preventDefault();

  // broadcast an 'active' event so all other instances of component know to change their state
  this.el.dispatchEvent(this.events.active, { activeClass: this.ACTIVE_CLASS, triggeredElem: this.el });

  // broadcast an additional 'open' event that the section component(s) can listen for
  this.el.dispatchEvent(this.events.open, {});

  aboutButton.classList.toggle('active');
  closeLink.classList.toggle('active');

  aboutSection.classList.toggle('slide-panel-open');
  overlay.classList.toggle('visible');
};

function OffCanvasSection() {
  this.el = document.querySelectorAll('.slide-panel');
}

document.addEventListener('DOMContentLoaded', function main() {
  var aboutButton = new OffCanvasTrigger('.btn-about');
  var closeLink = new OffCanvasTrigger('.slide-panel .close');
  var overlay = new OffCanvasTrigger('.overlay');
}, false);
