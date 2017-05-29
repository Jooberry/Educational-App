var assert = require('assert')

var EventManager = require("../EventManager")
var Performance = require("../performance")

beforeEach(function () {
  savedEvents = [];
  event1 = new Performance({
      "start": "2017-07-20 17:30:00",
      "end": "2017-07-20 18:30:00",
      "price": 15.5
  })
  event2 = new Performance({
      "start": "2017-07-20 19:30:00",
      "end": "2017-07-20 20:30:00",
      "price": 15.5
  })
  event3 = new Performance({
      "start": "2017-07-20 18:00:00",
      "end": "2017-07-20 18:30:00",
      "price": 15.5
  })
  event4 = new Performance({
      "start": "2017-07-21 17:30:00",
      "end": "2017-07-21 18:30:00",
      "price": 15.5
  })
  savedEvents.push(event1)
  savedEvents.push(event2)
  eventManager = new EventManager();
});

describe("EventManager", function(){
  it("check function should return true if event is not overlapping", function(){
    var result = eventManager.checkEventsCollision(savedEvents, event4)
    assert.equal(false, result)
  })
  it("check function should return false if the event is overlapping", function(){
    var result = eventManager.checkEventsCollision(savedEvents, event3)
    assert.equal(true, result)
  })
})
