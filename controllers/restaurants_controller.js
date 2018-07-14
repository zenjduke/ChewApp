var express = require("express");

var router = express.Router();

// Import the model (restaurant.js) to use its database functions.
var restaurant = require("../models/restaurants.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  restaurant.all(function(data) {
    var hbsObject = {
      restaurants: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/restaurants", function(req, res) {
  restaurant.create([
    "name", "type", "location", "price", "devoured", "rating"
  ], [
    req.body.name, req.body.type, req.body.location, req.body.price, req.body.devoured, req.body.rating
  ], function(result) {
    // Send back the ID of the new restaurant
    res.json({ id: result.insertId });
  });
});

router.put("/api/restaurants/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  restaurant.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/restaurants/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  restaurant.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// // Update a quote by an id and then redirect to the root route.
// router.put("/api/restaurants/:id", function(req, res) {
//   connection.query(
//     "UPDATE quotes SET rating = ? WHERE id = ?",
//     [req.body.author, req.body.quote, req.params.id],
//     function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;
