var PerformancesList = function() {
  this.performances = [];
}

PerformancesList.prototype = {
  add: function(onRequestComplete) {
    var formattedEvents = this.performances.map(function(performance) {
      return {
        code: performance.code,
        start: performance.start,
        end: performance.end
      }
    });
    var jsonString = JSON.stringify(formattedEvents);
    // console.log("\n\njsonString\ n\ n ");
    // console.log(jsonString);
    var request = new XMLHttpRequest();
    request.open('POST', "http://localhost:3000/api/festival/performances");
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function() {
      if (this.status !== 200) return;
      onRequestComplete();
    });
    request.send(jsonString);
  }
  //,
};

module.exports = PerformancesList;
