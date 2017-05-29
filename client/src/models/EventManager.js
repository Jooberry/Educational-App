var EventManager = function(){

}

EventManager.prototype = {
  checkEventsCollision: function(savedEvents, newEvent){
    //converting dates to seconds
    var startNewEvent = this.dateConverter(newEvent.dates.start)
    for(event of savedEvents){
      var startSavedEvent = this.dateConverter(event.dates.start)
      var endSavedEvent = this.dateConverter(event.dates.end)

      if(startNewEvent >= startSavedEvent  && startNewEvent < endSavedEvent ){
        return true;
      }
    }
    return false;
  },
  dateConverter: function(date){
    var convertedDate = new Date(date);
    var dateinSeconds = Date.parse(convertedDate)
    return dateinSeconds
  }

  // all: function()

}



module.exports = EventManager
