var requestHelper = require('./request_helper')

var helper = new requestHelper()


var savedEventApiHelper = function(){
    this.url = "http://localhost:3000/festival/api/saved"
}

savedEventApiHelper.prototype = {
  all: function(onRequestComplete){
    helper.makeGetRequest(this.url, onRequestComplete)
  }.bind(this)
}
