// add array of markers

var MapWrapper = function(container, coords, zoom){
  var container = document.getElementById("main-map");
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
  });
  this.markerLocations = [];
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: coords,
      map: this.googleMap
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = { lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(position);
      console.log("map clicked");
      console.log(this)
      this.markerLocations.push(position);
      console.log(this.markerLocations)
    }.bind(this));
    }

  // addClickInfoWindow: function(){

  // }
  }


module.exports = MapWrapper;