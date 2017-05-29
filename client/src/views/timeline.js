var events = [
  {
    date: '2017-07-23',
    startTime: '20:30',
    title: 'Jazz: Ultimate Classics',
    description: 'Pretty great',
    eventCode: 'F1'
  },
  {
    date: '2017-07-24',
    startTime: '20:45',
    title: 'Continuing to Jazz',
    description: 'I wanted to continue to jazz',
    eventCode: 'F2'
  },
  {
    date: '2017-07-26',
    startTime: '19:30',
    title: 'Tired of Coding Jazz',
    description: 'Made me lethargic',
    eventCode: 'F3'
  }
]

var descTerms = [
    { 
      key: "eventCode", 
      label: "Event ID"
    },
    { 
      key: "startTime",
      label: "Start Time"
    },
    { 
      key: "description",
      label: "Description"
    }
];

var Timeline = function() {

  var container = document.getElementById("timeline");
  var list = document.createElement("ol");
  list.className="timeline";
  

  events.forEach(function(event) {
    var listItem = document.createElement("li");
    
    var date = document.createElement("time");
    date.textContent = event.date;
    listItem.appendChild(date);
    
    var cite = document.createElement("cite");
    cite.textContent = event.title;
    listItem.appendChild(cite);

    var descList = document.createElement("dl");
    descTerms.forEach(function(term)  {
      if (event[term.key]) {
        var descTerm = document.createElement("dt");
        descTerm.textContent = term.label;
        descList.appendChild(descTerm);
        var descElem = document.createElement("dd");
        descElem.textContent = event[term.key];
        descList.appendChild(descElem);
      }
    });
    listItem.appendChild(descList);
    list.appendChild(listItem);
    container.appendChild(list);
  });



}

module.exports = Timeline;