const router = require("express").Router();
const Workout = require("../models/workout.js");
const Exercise = require("../models/exercise.js");
const path = require("path");
const mongojs = require("mongojs");

//Workout routes
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.updateOne(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $push: {
        exercises: body
      }
    }).then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get('/api/workouts', (req, res) => {
	Workout.aggregate([
    {$match: {} },
    {
        "$addFields": {
            "totalDuration": {
                "$reduce": {
                    "input": "$exercises",
                    "initialValue": 0,
                    "in": { "$add" : ["$$value", "$$this.duration"] }
                }
            }
        }
    }
  ])
  .exec((err, data) => {  
    if (err) console.log(err);
    res.json(data.slice(-7));
  });
});

router.get('/api/workouts/range', (req, res) => {
	Workout.aggregate([
      {$match: {} },
      {
          "$addFields": {
              "totalDuration": {
                  "$reduce": {
                      "input": "$exercises",
                      "initialValue": 0,
                      "in": { "$add" : ["$$value", "$$this.duration"] }
                  }
              }
          }
      }
    ])
    .exec((err, data) => {  
      if (err) console.log(err);
      res.json(data.slice(-7));
    });
});

router.get('/exercise', (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get('/stats', (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;