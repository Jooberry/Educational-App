var Performance = function(options) {
  this.code = options.code;
  this.start = options.start;
  this.end = options.end;
  this.title = options.title;
  this.description = options.description;
  this.image = options.image;
}

Performance.prototype = {

  // getTitle: function(){
  //   query.(this.code, function(title){
  //     var title = title
  //   })
  // }
  add: function(onRequestComplete) {
    var jsonString = JSON.stringify({
      code: this.code,
      start: this.start,
      end: this.end,
      title: this.title,
      description: this.description,
      image: this.image
    });
    var request = new XMLHttpRequest();
    request.open('POST', "http://localhost:3000/api/festival/performances");
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function() {
      if (this.status !== 200) return;
      var jsonString = this.responseText;
      var result = JSON.parse(jsonString);
      onRequestComplete(result);
    });
    request.send(jsonString);
  }
};

module.exports = Performance;
