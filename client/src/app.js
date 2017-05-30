var UI = require('./views/ui');
var Timeline = require('./views/timeline');
var RequestHelper = require("./helpers/request_helper.js");

var app = function() {
  new UI();
  var requestHelper = new RequestHelper();
  // This is where I call in Timeline
  requestHelper.makeRequest("http://localhost:3000/api/festival/performances", Timeline);
}

window.addEventListener('load', app);
