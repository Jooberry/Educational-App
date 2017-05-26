var MongoClient = require('mongodb').MongoClient;

var FestivalQueryHelper = function() {
  this.url = 'mongodb://localhost:27017/festival'
}

FestivalQueryHelper.prototype = {
  // all: function (onQueryFinished) {
  //   MongoClient.connect(this.url, function (err, db) {
  //     if (err) return;
  //     var collection = db.collection('countries');
  //     collection.find().toArray(function (err, docs) {
  //       onQueryFinished(docs);
  //     });
  //   });
  // },
  // add: function (countryToAdd, onQueryFinished) {
  //   MongoClient.connect(this.url, function (err, db) {
  //     if (err) return;
  //     var collection = db.collection('countries');
  //     collection.insert(countryToAdd);
  //     collection.find().toArray(function (err, docs) {
  //       onQueryFinished(docs);
  //     });
  //   });
  // }
};

module.exports = FestivalQueryHelper;
