const MongoClient = require("mongodb").MongoClient;
const MongoURL = "mongodb://localhost:27017";

function getConnection(callback)
  {
        return MongoClient.connect(MongoURL, callback);
  }


module.exports = {
    getConnection
}