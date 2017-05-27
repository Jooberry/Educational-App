var keyFile = require('./key_file');
var Hashes = require('jshashes');

var RemoteFestivalAPIHelper = function() {};

RemoteFestivalAPIHelper.prototype = {
  populateLocalDatabase: function() {

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

      console.log("Making following request:", url);
      return url;
    }

    var newQuery = queryComponent("festival", "jazz") +
      queryComponent("size", "5") +
      queryComponent("from", "0");

    var url = queryConstructor(newQuery);

    // Get all events
    function getAllEvents() {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.setRequestHeader("Accept", "application/json")
      request.addEventListener('load', function() {
        if (this.status !== 200) return;
        var jsonString = this.responseText;
        var results = JSON.parse(jsonString);
        console.log("Things have worked, maybe?");
        console.log(results);
      });
      request.send();
    }

    getAllEvents();
    // Get all performances from events
    // Store all events into local database
    // Store all performances into local database
  }
  // , {}
};

module.exports = RemoteFestivalAPIHelper;
