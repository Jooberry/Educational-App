var requestHelper = require('./request_helper')



var SavedEventApiHelper = function(){
    this.url = "http://localhost:3000/api/festival/saved"
    this.requestHelper = new requestHelper()
    console.log(this.requestHelper)
}

SavedEventApiHelper.prototype = {

  all: function(onRequestComplete){
    this.requestHelper.makeRequest(this.url, onRequestComplete);
  },
  
  allPerformances: function(onRequestComplete){
    this.requestHelper.makeRequest(this.url + "/performances", onRequestComplete)
  }

}

module.exports = SavedEventApiHelper
