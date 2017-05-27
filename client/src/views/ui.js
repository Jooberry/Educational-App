// This is the model that holds the list of shows
// var ShowList = require('../models/show_list');
var RemoteFestivalAPIHelper = require('../helpers/remote_festival_api_helper.js');

var UI = function() {
  this.render();
}

UI.prototype = {

  render: function() {
    console.log("The UI has been asked to render");
    var remoteFestivalAPIHelper = new RemoteFestivalAPIHelper();
    remoteFestivalAPIHelper.populateLocalDatabase();


    var setupFestivalAPI = function() {
      var populateButton = document.querySelector("#info-window #populate");
      var logButton = document.querySelector("#info-window #log");
      // Do stuff
    }

    setupFestivalAPI();
  }
}

module.exports = UI;
