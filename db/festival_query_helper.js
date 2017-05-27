var MongoClient = require('mongodb').MongoClient;

/*
 * events =>
 *      "title": "Ingrid Lucia Sings Billie Holiday ",
 *      "code": "55537b7f1d6a5131db0d794aa6a13174be9fc7d4-733900"
 * performances =>
 *      "start": "2017-07-20 17:30:00",
 *      "end": "2017-07-20 18:30:00",
 *      "code": "55537b7f1d6a5131db0d794aa6a13174be9fc7d4-733900"
 */

var FestivalQueryHelper = function() {
  this.url = 'mongodb://localhost:27017/festival';
}

FestivalQueryHelper.prototype = {
  allEvents: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
        throw "FAILED TO ACCESS |" + 'events' + "| COLLECTION IN |" + this.url + "| DATABASE";
        return;
      }
      var collection = db.collection('events');
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      });
    });
  },
  addEvent: function(eventToAdd, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
        throw "FAILED TO ACCESS |" + 'events' + "| COLLECTION IN |" + this.url + "| DATABASE";
        return;
      }
      var collection = db.collection('events');
      collection.insert(eventToAdd);
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      });
    });
  },
  allPerformances: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
        throw "FAILED TO ACCESS |" + 'performances' + "| COLLECTION IN |" + this.url + "| DATABASE";
        return;
      }
      var collection = db.collection('performances');
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      });
    });
  },
  addPerformance: function(performanceToAdd, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
        throw "FAILED TO ACCESS |" + 'performancess' + "| COLLECTION IN |" + this.url + "| DATABASE";
        return;
      }
      var collection = db.collection('performances');
      collection.insert(performanceToAdd);
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      });
    });
  }
};

module.exports = FestivalQueryHelper;
