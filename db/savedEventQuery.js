var MongoClient = require("mongodb")
var FestivalQuery = require("./festival_query_helper")

var festivalQuery = new FestivalQuery();



var SavedEventQuery = function(){
  this.url = "mongodb://localhost:27017/festival"
}

SavedEventQuery.prototype = {
  allPerformances: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('savedperformances')
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs)
        })
      }
    })
  },
  addPerformance: function(performance, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('savedperformances')
        collection.insert(performance);
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs)
        })
      }
    })
  },
  delete: function(id){
    MongoClient.connect(this.url, function(err, db){
    if(db){
      console.log({"_id": id})
      var collection = db.collection('savedperformances')
      collection.remove({"_id": id})
      }
    })
  }
}

module.exports = SavedEventQuery
