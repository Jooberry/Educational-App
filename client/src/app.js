var UI = require('./views/ui');
var Timeline = require('./views/timeline');
var DisplayMap = require ('./views/displayMap')
var RequestHelper = require("./helpers/request_helper.js");

var app = function() {

  new UI();

  var requestHelper = new RequestHelper();

 
 requestHelper.makeRequest("http://localhost:3000/api/festival/events", function(results){
  new DisplayMap(results);
 });

  requestHelper.makeRequest("http://localhost:3000/api/festival/performances", function(events) {
    new Timeline(events);
  });
  

}

window.addEventListener('load', app);
