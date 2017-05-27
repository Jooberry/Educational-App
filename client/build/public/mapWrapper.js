var MapWrapper = function(){
  var container = getElementById("main-map");
  this.googleMap = new google.maps.Map(container, {
    center: {lat:55.953251, lng:-3.188267},
    zoom: 10
  });
}