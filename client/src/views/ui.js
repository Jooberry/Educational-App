var RemoteFestivalAPIHelper = require('../helpers/remote_festival_api_helper.js');
var SavedEventApiHelper = require('../helpers/saved_event_api_helper.js')
var MapWrapper = require("../helpers/mapWrapper")
var RequestHelper = require('../helpers/request_helper.js');

var UI = function() {

  this.render();
  this.setUpSavedEvents()

  counter = 0;
};

UI.prototype = {

  render: function() {
    console.log("The UI has been asked to render");

    var setupFestivalAPI = function() {
      var populateButton = document.querySelector("#info-window #populate");
      var logButton = document.querySelector("#info-window #log");

      populateButton.addEventListener('click', function() {
        console.log("populate button has been clicked")
        var remoteFestivalAPIHelper = new RemoteFestivalAPIHelper();
        remoteFestivalAPIHelper.populateLocalDatabase();
      });

      logButton.addEventListener('click', function() {
        console.log("log button has been clicked");
        var requestHelper = new RequestHelper();

        var url = "http://localhost:3000/api/festival"

        requestHelper.makeRequest(url + "/events", function(results) {
          console.log(" = = == = = \n = EVENTS = \n = = == = = ")
          console.log(results);
        });

        requestHelper.makeRequest(url + "/performances", function(results) {
          console.log(" = = = =  = = = = \n = PERFORMANCES = \n = = = =  = = = = ")
          console.log(results);
        });
      });
    }

    var setupMap = function() {
      var mapDiv = document.getElementById('main-map');
      var center = {
        lat: 55.953251,
        lng: -3.188267
      };
      var mainMap = new MapWrapper(mapDiv, center, 13);
      mainMap.addMarker(center);
      mainMap.addClickEvent();
    }

    setupFestivalAPI();

    setupMap();
  },

  setUpSavedEvents: function(){
    var savedEvents = document.getElementById("saved-events")
    var savedEventHelper = new SavedEventApiHelper()

    var populateSavedEvents = function(events){
      var heading = document.getElementById("saved-events-heading")
      var table = document.createElement('table')
      var tr = document.createElement("tr")

      var title = document.createElement("th")
      // title.innerText = event.getTitle();
      title.innerText = "Name"
      tr.appendChild(title)

      var start = document.createElement("th")
      start.innerText = "Start time"
      tr.appendChild(start)

      var end = document.createElement("th")
      end.innerText = "End time"
      tr.appendChild(end)

      table.appendChild(tr)

      for(event of events){
        var tr = document.createElement("tr")
        var title = document.createElement("td")
        // title.innerText = event.getTitle();
        title.innerText = event.code
        tr.appendChild(title)

        var start = document.createElement("td")
        start.innerText = event.start
        tr.appendChild(start)

        var end = document.createElement("td")
        end.innerText = event.end
        tr.appendChild(end)

        table.appendChild(tr)
      }
      heading.appendChild(table)
    }
    var heading = document.createElement('h3')
    heading.setAttribute("id", "saved-events-heading")
    heading.innerText = "Your Saved Events"
    var opened = false
    heading.addEventListener("click", function(){
      if(opened === false) {
        savedEventHelper.allPerformances(populateSavedEvents)
        opened = true
        return
      }
      if(opened === true){
        heading.innerHTML = "Your Saved Events"
        opened = false
      }
    })
    savedEvents.appendChild(heading)
  }
};


module.exports = UI;
