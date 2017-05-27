var RequestHelper = require('../helpers/request_helper.js');
var requestHelper = new RequestHelper();

var ShowList = function() {};

ShowList.prototype = {
  all: function(url, onCompleted) {
    requestHelper.makeRequest(url, onCompleted);
  },
  add: function(url, onCompleted, show) {
    var showToAdd = show;
    var jsonString = JSON.stringify(showToAdd);

    requestHelper.makePostRequest(url, onCompleted, jsonString);
  }
};

module.exports = ShowList;
