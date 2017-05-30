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

var Timeline = function(events) {

  var container = document.getElementById("timeline");
  var list = document.createElement("ol");
  list.className="timeline";
  

  events.forEach(function(event) {
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