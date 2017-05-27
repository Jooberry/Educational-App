// var FestivalQueryView = require('./festival_query_view.js');

// var ShowList = require('../models/show_list');

var UI = function() {
  // this.ShowList = new ShowList();
  this.render();
}

UI.prototype = {
  render: function() {
    console.log("The UI has been asked to render")
  }
}

module.exports = UI;
