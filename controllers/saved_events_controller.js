var express = require('express');

var savedEventsRouter = express.Router()

var SavedEventQuery = require('../db/savedEventQuery')

var query = new SavedEventQuery()

savedEventsRouter.get('/', function(req, res){
  query.all(function(events){
    res.json(events)
  })
})

SavedEventQuery.post("/", function(req, res){

})
