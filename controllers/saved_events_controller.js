var express = require('express');

var savedEventsRouter = express.Router()

var SavedEventQuery = require('../db/savedEventQuery')

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
  //is response needed here?
  console.log("deleting")
  res.json({"action": "was deleted"})
})

module.exports = savedEventsRouter;
