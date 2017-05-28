var express = require('express');
var router = express.Router();
var path = require("path");

var festivalRouter = require('./festival_router.js');
var savedEventsRouter = require("./saved_events_controller.js")
router.use('/api/festival', festivalRouter);
router.use('/api/festival/saved', savedEventsRouter)

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

// This is a test function to check that server requests are going through
// router.get('/TEST', function(req, res) {
//   res.json({
//     doesThisWork: "Yes!"
//   });
// })

module.exports = router;
