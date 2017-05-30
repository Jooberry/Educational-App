var MapWrapper = require("../helpers/mapWrapper")

var DisplayMap = function(){

  console.log("display map has been called")

  var setupMap = function() {
    var mapDiv = document.getElementById('main-map');
    var center = {
      lat: 55.953251,
      lng: -3.188267
    };
    var mainMap = new MapWrapper(mapDiv, center, 13);
    mainMap.addMarker(center);
    mainMap.addClickEvent();
  }

  setupMap();

}

module.exports = DisplayMap;