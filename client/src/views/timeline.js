// var events = [
//   {
//     date: '2017-07-23',
//     startTime: '20:30',
//     title: 'Jazz: Ultimate Classics',
//     description: 'Pretty great',
//     eventCode: 'F1'
//   },
//   {
//     date: '2017-07-24',
//     startTime: '20:45',
//     title: 'Continuing to Jazz',
//     description: 'I wanted to continue to jazz',
//     eventCode: 'F2'
//   },
//   {
//     date: '2017-07-26',
//     startTime: '19:30',
//     title: 'Tired of Coding Jazz',
//     description: 'Made me lethargic',
//     eventCode: 'F3'
//   },
//   {
//     date: '2017-07-21',
//     startTime: '19:45',
//     title: 'Group Jazz Time',
//     description: 'Jazz in a group',
//     eventCode: 'F4'
//   }
// ]

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

var Timeline = function(events) {

  // var savedEventHelper = new SavedEventApiHelper()
  var requestHelper = new RequestHelper()

  var container = document.getElementById("timeline");
  var list = document.createElement("ol");
  list.className="timeline";


  events.forEach(function(event) {
    var listItem = document.createElement("li");

    var date = document.createElement("time");
    date.textContent = event.start;
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
      requestHelper.makePostRequest("http://localhost:3000/api/festival/saved/performances", createAddEventReponseWindow,
      jsonString)
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
