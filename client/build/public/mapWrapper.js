var MapWrapper = function(container, coords, zoom){
  var container = document.getElementById("main-map");
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      console.log("add Click Event Working");
    });
  }
}

module.exports = MapWrapper;