var MapWrapper = require("../helpers/mapWrapper")
var RequestHelper = require('../helpers/request_helper.js');
var requestHelper = new RequestHelper();

var DisplayMap = function(results){

  var mainMap;

  console.log("display map has been called")

  var setupMap = function() {
    var mapDiv = document.getElementById('main-map');
    var center = {
      lat: 55.953251,
      lng: -3.188267
    };
    mainMap = new MapWrapper(mapDiv, center, 13);
    mainMap.addMarker(center);
    mainMap.addClickEvent();
  }

  var addAllMarkers = function(){
    var allMarkers = []
    requestHelper.makeRequest("http://localhost:3000/api/festival/events", function(results){
      for(var event of results){
        mainMap.addMarker({lat: event.latitude, lng: event.longitude})
        allMarkers.push(event);
      }
      console.log("++++All Markers Below+++++")
      console.log(allMarkers);
    })
     

  }

  setupMap();
  addAllMarkers(); 

  var eventCoords = {};
  for (event of results){
    // event.code: {
    //       lat: event.latitude,
    //       lng: event.longitude
    //     };
    eventCoords[event.code] = {
          lat: event.latitude,
          lng: event.longitude
        };
      }
      console.log("event coords")
      console.log(eventCoords)

     var url = "http://localhost:3000/api/festival/saved/performances"
     requestHelper.makeRequest(url, function(results) {
       console.log("hitting saved performances for mapping purposes");
       console.log(results);

       for(performance of results) {
        var coords = eventCoords[performance.code]

        var marker = mainMap.addMarker(coords);


        mainMap.markerLocations.push(marker);


        // console.log(mainMap.markerLocations);
    //add an event marker to the mainMap object
  }

});

   }


   module.exports = DisplayMap;