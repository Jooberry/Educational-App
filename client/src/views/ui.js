var datesArray = [{
    date: '2017-07-23',
    title: 'Jazz: Ultimate Classics'
  },
  {
    date: '2017-07-24',
    title: 'Continuing to Jazz'
  },
  {
    date: '2017-07-26',
    title: 'Tired of Coding Jazz'
  }
]

// This is the model that holds the list of shows
// var ShowList = require('../models/show_list');
var RemoteFestivalAPIHelper = require('../helpers/remote_festival_api_helper.js');
var MapWrapper = require("../helpers/mapWrapper")

var UI = function() {
  var infoText = document.getElementById('info-text');
  var eventTitle = document.createElement('h1');
  eventTitle.innerText = 'FESTIVAL STUFF';
  infoText.appendChild(eventTitle);

  var eventDate = document.createElement('p');
  eventDate.innerText = '1-29 July, 2017';
  infoText.appendChild(eventDate);

  this.onTimelinePreviousClick();
  this.onTimelineNextClick();

  this.render();

  counter = 0;
};

UI.prototype = {

  onTimelinePreviousClick: function() {

    var previousButton = document.getElementById('previous');
    previousButton.addEventListener('click', function() {

      var infoText = document.getElementById('info-text');
      infoText.innerHTML = '';

      counter--;

      if (counter === 0 || counter === -1) {
        counter = datesArray.length;
      }
      console.log(counter)
      var eventTitle = document.createElement('h1');
      eventTitle.innerText = datesArray[counter - 1].title;
      infoText.appendChild(eventTitle);

      var eventDate = document.createElement('p');
      eventDate.innerText = datesArray[counter - 1].date;
      infoText.appendChild(eventDate);

    });
  },

  onTimelineNextClick: function() {

    var nextButton = document.getElementById('next');
    nextButton.addEventListener('click', function() {

      var infoText = document.getElementById('info-text');
      infoText.innerHTML = '';

      counter++;

      if (counter === datesArray.length + 1) {
        counter = 1;
      }

      var eventTitle = document.createElement('h1');
      eventTitle.innerText = datesArray[counter - 1].title;
      infoText.appendChild(eventTitle);

      var eventDate = document.createElement('p');
      eventDate.innerText = datesArray[counter - 1].date;
      infoText.appendChild(eventDate);

    });
  },

  render: function() {
    console.log("The UI has been asked to render");

    var setupFestivalAPI = function() {
      var populateButton = document.querySelector("#info-window #populate");
      var logButton = document.querySelector("#info-window #log");

      populateButton.addEventListener('click', function() {
        console.log("populate button has been clicked")
        var remoteFestivalAPIHelper = new RemoteFestivalAPIHelper();
        remoteFestivalAPIHelper.populateLocalDatabase();
      })
    }

    var setupMap = function() {
      var mapDiv = document.getElementById('main-map');
      var center = {
        lat: 55.953251,
        lng: -3.188267
      };
      var mainMap = new MapWrapper(mapDiv, center, 13);
      mainMap.addMarker(center);
      // mainMap.addClickEvent();
    }

    setupFestivalAPI();
    setupMap();
  }

};


module.exports = UI;
