var MapWrapper = require("../build/public/mapWrapper")

var app = function(){
  var mapDiv = document.getElementById('main-map');
  var center = {lat: 55.953251, lng: -3.188267};
  var mainMap = new MapWrapper(mapDiv, center, 13);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
}













window.addEventListener('load', app);