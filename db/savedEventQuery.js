var MongoClient = require("mongodb")

var SavedEventQuery = function(){
  this.url = "mongodb://localhost:27017/festival"
}

SavedEventQuery.prototype = {
//   all: function(onQueryFinished){
//     MongoClient.connect(this.url, function(err, db){
//       if(db){
//         var collection = db.collection('savedevents')
//         collection.find().toArray(function(err, docs){
//           onQueryFinished(docs)
//         })
//       }
//     })
//   },
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

  // add: function(event, onQueryFinished){
  //   MongoClient.connect(this.url, function(err, db){
  //     if(db){
  //       var collection = db.collection('savedevents')
  //       collection.insert(events);
  //       collection.find().toArray(function(err, docs){
  //         onQueryFinished(docs)
  //       })
  //     }
  //   })
  // },
  delete: function(id){
    MongoClient.connect(this.url, function(err, db){
    if(db){
      var collection = db.collection('savedperformances')
      collection.remove({"_id": id})
      }
    })
  }
}
  //needs some thought
//   findTitle: function(code, onQueryFinished){
//     MongoClient.connect(this.url, function(err, db){
//       if(db){
//         var collection = db.collection('savedevents')
//         collection.find({"code": code}).toString(function(err, docs){
//           onQueryFinished(docs)
//         })
//       }
//     })
//   }
// }

module.exports = SavedEventQuery
