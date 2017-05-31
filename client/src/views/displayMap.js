var MapWrapper = require("../helpers/mapWrapper")
var RequestHelper = require('../helpers/request_helper.js');
var DisplayMap = function() {

  var mainMap;

  // console.log("display map has been called")

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

  setupMap();

  var events = [{
      code: "86352971be0a1db021f0b1d04533296b39ef3542-733899",
      description: "Jazz meets folk: Fragile Bliss are an exceptional group from the Czech Republic, who create acoustic music that sounds as though jazz, classical and folk roots of central Europe have been distilled into a perfect balance. A specially assembled chamber trio celebrate guitarist, Haftor Medbøe's half-century, with Steve Hamilton (piano) and Dave Kane (bass), and a lot more technology.",
      latitude: 55.9475801,
      longitude: -3.2045934,
      title: "Fragile Bliss / Medbøe Hamilton Kane",
      website: "http://www.edinburghjazzfestival.com/programme/artists/artist-information.html?artist_id=Fragile+Bliss+%2F+Medb%C3%B8e+Hamilton+Kane",
      _id: "592d3f284674f438ba3a308a"
    },

    {
      code: "6d6c146afc6c1015a791754a46f48c4fc8b3e2a7-733896",
      description: "Carol Kidd has always had a shower of stardust around her, and here she is celebrating the songs Garland made famous, from the great era of Hollywood. Shimmering and soaring with flawless phrasing, Kidd's voice is underpinned by impeccable timing and deep emotional engagement. A must for lovers of classic American songs.",
      latitude: 55.9436108,
      longitude: -3.1887817,
      title: "Carol Kidd sings the music of Judy Garland",
      website: "http://www.edinburghjazzfestival.com/programme/artists/artist-information.html?artist_id=Carol+Kidd+sings+the+music+of+Judy+Garland",
      _id: "592d3f284674f438ba3a308b"
    }
  ];


  var url = "http://localhost:3000/api/festival/events"
  var requestHelper = new RequestHelper();
  requestHelper.makeRequest(url, function(results) {
    //  console.log("putting markers on map");



    for (event of results) {
      var coords = {
        lat: event.latitude,
        lng: event.longitude
      };

      var marker = mainMap.addMarker(coords);

      mainMap.markerLocations.push(marker);
      // console.log(mainMap.markerLocations);
      //add an event marker to the mainMap object
    }
  });

}


module.exports = DisplayMap;
