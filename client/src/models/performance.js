/*
 * {
 *   "code": "55537b7f1d6a5131db0d794aa6a13174be9fc7d4-733900",
 *   "start": "2017-07-20 17:30:00",
 *   "end": "2017-07-20 18:30:00"
 * }
 */

var Performance = function(options) {
  this.code = options.code;
  this.start = options.start;
  this.end = options.end;
}

Performance.prototype = {
  // add: function(onRequestComplete) {
//   var jsonString = JSON.stringify({
//     performance: {
//       code: this.code,
//       start: this.start,
//       end: this.end
//     }
//   });
//   // console.log(jsonString);
//   var request = new XMLHttpRequest();
//   request.open('POST', "http://localhost:3000/api/festival/performances");
//   request.setRequestHeader('Content-Type', 'application/json');
//   request.addEventListener('load', function() {
//     if (this.status !== 200) return;
//     var jsonString = this.responseText;
//     // console.log(jsonString);
//     var result = JSON.parse(jsonString);
//     // onRequestComplete(results);
//     onRequestComplete(result);
//   });
//   request.send(jsonString);
// }
  //,};
}

module.exports = Performance;
