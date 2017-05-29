// var SavedEventQuery = require('../../db/savedEventQuery')

// var query = new SavedEventQuery()

var EventManager = function(){

}

EventManager.prototype = {
  checkEventsCollision: function(savedEvents, newEvent){
    //converting dates to seconds
    var startNewEvent = this.dateConverter(newEvent.start)
    for(event of savedEvents){
      var startSavedEvent = this.dateConverter(event.start)
      var endSavedEvent = this.dateConverter(event.end)

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

}



module.exports = EventManager
