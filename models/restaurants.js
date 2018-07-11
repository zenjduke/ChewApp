var orm = require("../config/orm.js");

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

var restaurants = {
    all: function(cb) {
      orm.all("restaurants", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      console.log("hi");
      orm.create("restaurants", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("restaurants", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("restaurants", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (restaurantsController.js).
  module.exports = restaurants;