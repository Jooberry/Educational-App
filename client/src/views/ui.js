// This is the model that holds the list of shows
// var ShowList = require('../models/show_list');
var RemoteFestivalAPIHelper = require('../helpers/remote_festival_api_helper.js');
var MapWrapper = require("../build/public/mapWrapper")

var UI = function() {
  this.render();
}

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
      })
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
    setupMap();
  }
}

module.exports = UI;
