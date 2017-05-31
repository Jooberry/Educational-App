var express = require('express');

var savedEventsRouter = express.Router()
var EventManager = require("../client/src/models/EventManager")
var SavedEventQuery = require('../db/savedEventQuery')
var eventManager = new EventManager();
var query = new SavedEventQuery()

savedEventsRouter.get('/', function(req, res){
  query.all(function(events){
    res.json(events)
  })
})

savedEventsRouter.get('/performances', function(req, res){
  query.allPerformances(function(events){
    res.json(events)
  })
})

savedEventsRouter.delete("/performances/remove/:id/", function(req, res){
  query.delete(req.params.id)
  console.log("deleting")
  res.json({"action": "was deleted"})
})

savedEventsRouter.post("/performances", function(req, res){
  var payload = req.body;
  console.log(payload)

  query.allPerformances(function(docs){
    var collision = eventManager.checkEventsCollision(docs, payload)
    if (collision === true) {(
      res.json({value: false})
      // console.log(res.json);
    )}
    else if ( collision === false ){
      console.log(this)
      query.addPerformance(payload, function(){
      })
      res.json({value: true})
      // console.log(res.json);
    }
  })
})

module.exports = savedEventsRouter;
