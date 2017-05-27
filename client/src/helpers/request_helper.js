var RequestHelper = function() {};
// Copy/pasted from instructor code, alterations may be required

RequestHelper.prototype = {
  makeRequest: function(url, onRequestComplete) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function() {
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      onRequestComplete(results);
    });
    request.send();
  },
  makePostRequest: function(url, onRequestComplete, payload) {
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function() {
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      onRequestComplete(results);
    });
    request.send(payload);
  }
};

module.exports = RequestHelper;
