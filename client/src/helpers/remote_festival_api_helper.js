var keyFile = require('./key_file');
var Hashes = require('jshashes');
var Event = require('../models/event.js');
var EventsList = require('../models/events_list.js');
var Performance = require('../models/performance.js');
var PerformancesList = require('../models/performances_list.js');

var RemoteFestivalAPIHelper = function(currentIndex = 0) {
  this.currentIndex = currentIndex;
};

RemoteFestivalAPIHelper.prototype = {
  populateLocalDatabase: function() {
    I_HATE_GLOBAL_VARIABLES = this.currentIndex;

    function queryComponent(object, value) {
      return "&" + object + "=" + value;
    }

    function queryConstructor(queryString) {
      var SHA1 = new Hashes.SHA1;
      var server = "http://api.edinburghfestivalcity.com";

      var query = "/" + "events" +
        "?" + "key=" + keyFile.EFC.API_key +
        queryString;

      var signature = "&signature=" +
        SHA1.hex_hmac(keyFile.EFC.signing_key, query);

      var url = server + query + signature;

      return url;
    }
    var size = 100;
    var newQuery = queryComponent("festival", "jazz") +
      // queryComponent("size", 100) +
      queryComponent("size", size) +
      queryComponent("from", I_HATE_GLOBAL_VARIABLES);

    var url = queryConstructor(newQuery);

    function getAllEvents() {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.setRequestHeader("Accept", "application/json");

      function onLoad() {
        if (this.status !== 200) {
          return;
        }
        var jsonString = this.responseText;
        var results = JSON.parse(jsonString);
        console.log("INDEX", I_HATE_GLOBAL_VARIABLES, "TO", I_HATE_GLOBAL_VARIABLES + size, "-ish");

        var eventsList = new EventsList();
        for (event of results) {
          var theEvent = new Event(event);
          eventsList.events.push(theEvent);
          var performancesList = new PerformancesList();
          for (performance of event.performances) {
            performance.code = event.code;
            performance.title = event.title;
            var thePerformance = new Performance(performance);
            performancesList.performances.push(thePerformance);
          }
          performancesList.add(function() {
            console.log("Block of performances processed");
          })
        }
        eventsList.add(function() {
          console.log("Block of events processed");
        })
        if (results.length == 100) {
          console.log("GETTING NEXT PAGE");
          I_HATE_GLOBAL_VARIABLES += 100;
          var helper = new RemoteFestivalAPIHelper(I_HATE_GLOBAL_VARIABLES);
          helper.populateLocalDatabase();
        }
      }
      request.addEventListener('load', onLoad);

      request.send();
    }

    getAllEvents();
  }
}

module.exports = RemoteFestivalAPIHelper;
