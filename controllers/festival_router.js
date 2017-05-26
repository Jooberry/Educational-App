var express = require('express');
var festivalRouter = express.Router();

var FestivalQueryHelper = require('../db/festival_query_helper.js');
var dbHelper = new FestivalQueryHelper();

// index
festivalRouter.get('/', function(req, res) {
  dbHelper.allShows(function(shows) {
    res.json(shows);
  });
});

// create
festivalRouter.post('/', function(req, res) {
  var show = req.body.show;
  dbHelper.addShow(show, function(results) {
    res.json(results);
  });
});

module.exports = festivalRouter;
