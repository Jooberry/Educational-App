var MongoClient = require("mongodb")

var SavedEventQuery = function(){
  this.url = "mongodb://localhost:27017/festival"
}

SavedEventQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('savedevents')
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs)
        })
      }
    })
  },

  add: function(event, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('savedevents')
        collection.insert(events);
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs)
        })
      }
    })
  }
}

module.exports = SavedEventQuery
