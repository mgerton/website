// var malarkey = require('malarkey');

function main() {
  var roles = document.querySelector('.role');
  var options = {
    typeSpeed: 65,
    deleteSpeed: 65,
    pauseDelay: 2000,
    loop: true,
    postfix: '.'
  };

  malarkey(roles, options)
    .type('web developer').pause().delete()
    .type('beer geek').pause().delete()
    .type('dreamer').pause().delete()
    .type('problem solver').pause().delete()
    .type('comic nerd').pause().delete()
    .type('music lover').pause().delete()
    .type('typography nerd').pause().delete()
    .type('sports fan').pause().delete();
}

window.onload = main;
