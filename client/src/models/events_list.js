var EventsList = function() {
  this.events = [];
}

EventsList.prototype = {
  add: function(onRequestComplete) {
    var formattedEvents = this.events.map(function(event) {
      return {
        code: event.code,
        title: event.title,
        description: event.description,
        latitude: event.latitude,
        longitude: event.longitude,
        website: event.website
      }
    });
    var jsonString = JSON.stringify(formattedEvents);
    var request = new XMLHttpRequest();
    request.open('POST', "http://localhost:3000/api/festival/events");
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function() {
      if (this.status !== 200) return;
      onRequestComplete();
    });
    request.send(jsonString);
  }
  //,
};

module.exports = EventsList;
