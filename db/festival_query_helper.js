var MongoClient = require('mongodb').MongoClient;

var FestivalQueryHelper = function() {
  this.url = 'mongodb://localhost:27017/festival';
  this.performances = 'performances';
}

FestivalQueryHelper.prototype = {
  allShows: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
        throw "FAILED TO ACCESS |" + 'shows' + "| COLLECTION IN |" + this.url + "| DATABASE";
        return;
      }
      var collection = db.collection('shows');
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      });
    });
  },
  addShow: function(showToAdd, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (err) {
        throw "FAILED TO ACCESS |" + 'shows' + "| COLLECTION IN |" + this.url + "| DATABASE";
        return;
      }
      var collection = db.collection('shows');
      collection.insert(showToAdd);
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      });
    });
  }
};

module.exports = FestivalQueryHelper;
