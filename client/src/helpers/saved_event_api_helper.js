var requestHelper = require('./request_helper')



var SavedEventApiHelper = function(){
    this.url = "http://localhost:3000/api/festival/saved"
    this.requestHelper = new requestHelper()
    console.log(this.requestHelper)
}

SavedEventApiHelper.prototype = {
  all: function(onRequestComplete){
    // console.log("making request")
    // console.log(this.url)
    // console.log(this)
    // this.requestHelper.makeRequest = this.requestHelper.makeRequest.bind(this);
    this.requestHelper.makeRequest(this.url, onRequestComplete);
  }
}

module.exports = SavedEventApiHelper
