var TimelineHelper = function() {

};

TimelineHelper.prototype = {
  sortByDate: function(events) {
    var sortedEvents = events.sort(function(event1, event2) {
      var convertedDate1 = new Date(event1.start);
      var dateinSeconds1 = Date.parse(convertedDate1)
      var convertedDate2 = new Date(event2.start);
      var dateinSeconds2 = Date.parse(convertedDate2);
      return dateinSeconds1 - dateinSeconds2;
    });
    return sortedEvents;
  }
};

module.exports = TimelineHelper;