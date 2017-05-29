var Event = function(options) {
  this.code = options.code;
  this.title = options.title;
  this.description = options.description;
  this.latitude = options.latitude;
  this.longitude = options.longitude;
  this.website = options.website;
}

Event.prototype = {
  add: function(onRequestComplete) {
    var jsonString = JSON.stringify({
      code: this.code,
      title: this.title,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude,
      website: this.website
    });
    var request = new XMLHttpRequest();
    request.open('POST', "http://localhost:3000/api/festival/events");
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function() {
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      onRequestComplete(results);
    });
    request.send(jsonString);
  }
  // ,
};

module.exports = Event;
