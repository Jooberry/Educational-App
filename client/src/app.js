var UI = require('./views/ui');
var Timeline = require('./views/timeline');
var RequestHelper = require("./helpers/request_helper.js");

var app = function() {
  new UI();
  var requestHelper = new RequestHelper();
  // This is where I call in Timeline
  // requestHelper.makeRequest("http://localhost:3000/api/festival/performances", Timeline);
  Timeline([{ 
  code: "86352971be0a1db021f0b1d04533296b39ef3542-733899",
  end: "2017-07-20 22:00:00",
  start: "2017-07-20 20:00:00",
  title: "Fragile Bliss / Medbøe Hamilton Kane"
  }]);
}

window.addEventListener('load', app);
