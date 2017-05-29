var UI = require('./views/ui');
var Timeline = require('./views/timeline');

var app = function() {
  new UI();
  new Timeline();
}

window.addEventListener('load', app);
