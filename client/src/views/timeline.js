// var descTerms = [
//     {
//       key: "eventCode",
//       label: "Event ID"
//     },
//     {
//       key: "startTime",
//       label: "Start Time"
//     },
//     {
//       key: "description",
//       label: "Description"
//     }
// ];
var RequestHelper = require('../helpers/request_helper.js');

var TimelineHelper = require('../helpers/timeline_helper.js');
var DisplayMap = require('./DisplayMap.js');

var Timeline = function(events) {

  var timelineHelper = new TimelineHelper();
  // var savedEventHelper = new SavedEventApiHelper()
  var requestHelper = new RequestHelper();

  var container = document.getElementById("timeline");
  var list = document.createElement("ol");
  list.className="timeline";
  
  var sortedEvents = timelineHelper.sortByDate(events);

  sortedEvents.forEach(function(event) {
    var listItem = document.createElement("li");
    var pre = document.createElement("pre");
    var date = document.createElement("time");
    pre.innerText = event.start.split(" ").join("\n");
    console.log(date.textContent);
    date.appendChild(pre);
    listItem.appendChild(date);

    var cite = document.createElement("cite");
    cite.textContent = event.title;
    listItem.appendChild(cite);

    var createAddEventReponseWindow = function(result){
      console.log(result)
        var p = document.createElement("p")
      if(result === true){
        p.innerText = "event has been added"
      }
      else if(result === false){
        p.innerText = "event cannot be added"
      }
      element = document.getElementById("saved-events-message")
      element.appendChild(p)
    }
    var addEventButton = document.createElement("button");
    addEventButton.id = event._id;
    addEventButton.addEventListener("click", function(){
      console.log("making post request")
      var jsonString = JSON.stringify([{"id": event._id, "code": event.code, "title": event.title, "start": event.start, "end": event.end}])
      requestHelper.makePostRequest(
        "http://localhost:3000/api/festival/saved/performances", 
        // code below allows marker to appear on map after click "add event"
        //without page refresh, needs refactor.
        function() {
          requestHelper.makeRequest("http://localhost:3000/api/festival/events", function(results){
           new DisplayMap(results);
          });
        },
        jsonString
      )
    })
    addEventButton.innerText = "Add Event";
    listItem.appendChild(addEventButton);

    // var descList = document.createElement("dl");
    // descTerms.forEach(function(term)  {
    //   if (event[term.key]) {
    //     var descTerm = document.createElement("dt");
    //     descTerm.textContent = term.label;
    //     descList.appendChild(descTerm);
    //     var descElem = document.createElement("dd");
    //     descElem.textContent = event[term.key];
    //     descList.appendChild(descElem);
    //     var descBreak = document.createElement("br");
    //     descList.appendChild(descBreak);
    //   }
    // });
    // listItem.appendChild(descList);
    list.appendChild(listItem);
    container.appendChild(list);
  });
}

module.exports = Timeline;
