const express = require("express");
const router = express.Router();
const Activity = require("../models/activity-schema.js");

router.get("/",function (req,res) {
  Activity.find().then(function (data) {
    if (data){
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(data);
    } else {
      res.status(404).send("No Activities Found");
    }
  }).catch(function (err) {
    console.log(err);
    res.status(400).send("Bad request. Try again.");
  });
});

router.post("/", function(req, res){
  Activity.find().sort({_id:-1}).limit(1).then(function (foundActivity) {
    let newId = foundActivity[0]._id + 1;
    let newActivity = {
      _id:newId,
      name:req.body.name,
      createdBy:req.body.createdBy
    };
    Activity.create(newActivity).then(function (madeActivity) {
      if (madeActivity){
        res.status(201).send({
          message:"Activity Created Successfully",
          activity: madeActivity});
      } else {
        res.status(500).send("Error creating activity");
      }
    }).catch(function (err) {
      console.log(err);
      res.status(400).send("Bad request. Try again.");
    });
  });
});

router.get("/:id", function(req, res){

});

router.put("/:id", function(req, res){

});

router.delete("/:id", function(req, res){

});

router.post("/:id/stats", function(req, res){

});

router.delete("/:id/stats/:statId", function(req, res){

});
module.exports = router;
