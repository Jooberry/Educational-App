/*
 * {
 *   "code": "55537b7f1d6a5131db0d794aa6a13174be9fc7d4-733900",
 *   "start": "2017-07-20 17:30:00",
 *   "end": "2017-07-20 18:30:00"
 * }
 */
// var Savedquery = require('../../db/savedEventQuery')
// var query = new SavedEventQuery()

var Performance = function(options) {
  this.code = options.code;
  this.start = options.start;
  this.end = options.end;
}

Performance.prototype = {
  //
  // getTitle: function(){
  //   query.findTitle(this.code, function(title){
  //     var title = title
  //   })
  // }
};

module.exports = Performance;
