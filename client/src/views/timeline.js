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

var TimelineHelper = require('../helpers/timeline_helper.js');

var Timeline = function(events) {

  var timelineHelper = new TimelineHelper();

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

    var addEventButton = document.createElement("button");
    addEventButton.id = "add-button";
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