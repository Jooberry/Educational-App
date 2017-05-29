var assert = require('assert')

var Event = require("../Event");

var event = new Event({  "performances": [{
    "start": "2017-07-20 17:30:00",
    "end": "2017-07-20 18:30:00",
    "price": 15.5
  }]})

describe("Event", function(){
  it("Even has date", function(){
    assert.equal("2017-07-20 17:30:00", event.dates.start)
    assert.equal("2017-07-20 18:30:00", event.dates.end)
  })
})
