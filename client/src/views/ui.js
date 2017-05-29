var RemoteFestivalAPIHelper = require('../helpers/remote_festival_api_helper.js');
var MapWrapper = require("../helpers/mapWrapper")
var RequestHelper = require('../helpers/request_helper.js');

var UI = function() {

  this.render();

  counter = 0;
};

UI.prototype = {

  render: function() {
    console.log("The UI has been asked to render");

    var setupFestivalAPI = function() {
      var populateButton = document.querySelector("#info-window #populate");
      var logButton = document.querySelector("#info-window #log");

      populateButton.addEventListener('click', function() {
        console.log("populate button has been clicked")
        var remoteFestivalAPIHelper = new RemoteFestivalAPIHelper();
        remoteFestivalAPIHelper.populateLocalDatabase();
      });

      logButton.addEventListener('click', function() {
        console.log("log button has been clicked");
        var requestHelper = new RequestHelper();

        var url = "http://localhost:3000/api/festival"

        requestHelper.makeRequest(url + "/events", function(results) {
          console.log(" = = == = = \n = EVENTS = \n = = == = = ")
          console.log(results);
        });

        requestHelper.makeRequest(url + "/performances", function(results) {
          console.log(" = = = =  = = = = \n = PERFORMANCES = \n = = = =  = = = = ")
          console.log(results);
        });
      });
    }

    var setupMap = function() {
      var mapDiv = document.getElementById('main-map');
      var center = {
        lat: 55.953251,
        lng: -3.188267
      };
      var mainMap = new MapWrapper(mapDiv, center, 13);
      mainMap.addMarker(center);
      // mainMap.addClickEvent();
    }

    setupFestivalAPI();
    // setupMap();
  }
};


module.exports = UI;
