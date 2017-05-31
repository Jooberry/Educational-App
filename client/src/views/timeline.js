var RequestHelper = require('../helpers/request_helper.js');

var TimelineHelper = require('../helpers/timeline_helper.js');

var Timeline = function(events) {

  this.events = events;
  this.populateTimeline();
  this.createAddEventResponseWindow();

};

Timeline.prototype = {

  populateTimeline: function() {
    var timelineHelper = new TimelineHelper();
    var requestHelper = new RequestHelper();

    var container = document.getElementById("timeline");
    var list = document.createElement("ol");
    list.className = "timeline";

    var sortedEvents = timelineHelper.sortByDate(this.events);

    sortedEvents.forEach(function(event) {
      var listItem = document.createElement("li");
      var pre = document.createElement("pre");
      var date = document.createElement("time");
      pre.innerText = event.start.split(" ").join("\n");
      date.appendChild(pre);
      listItem.appendChild(date);

      var details = document.createElement("details");
      var summary = document.createElement("summary");
      summary.textContent = event.title;
      var description = document.createElement("p");
      description.textContent = event.description;
      details.appendChild(summary);
      details.appendChild(description);
      listItem.appendChild(details);


      list.appendChild(listItem);
      container.appendChild(list);

      var addEventButton = document.createElement("button");
      addEventButton.id = event._id;
      addEventButton.addEventListener("click", function() {
        console.log("making post request")
        var jsonString = JSON.stringify([{
          "id": event._id,
          "code": event.code,
          "title": event.title,
          "start": event.start,
          "end": event.end
        }])
        requestHelper.makePostRequest("http://localhost:3000/api/festival/saved/performances", function(event){
          if(event.value == false){
            window.alert("Sorry, you are already attending an event at this time")
          }
        })
      addEventButton.innerText = "Add Event";
      listItem.appendChild(addEventButton);

      summary.addEventListener('click', function() {
        var image = document.getElementById("url");
        image.setAttribute("src", event.image);
      });
    }
  })
}
};

module.exports = Timeline;
