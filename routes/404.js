const router = require('express').Router();
const Users = require('../models/stat-tracker-schemas').Users;

router.post("/signUp", function(req, res){
  Users.findOne({username:req.body.username})
  .then(function (userExists) {
    if (userExists){
      res.status(400).send("User already exists");
    } else {
      Users.find().sort({_id:-1}).limit(1)
      .then(function (user) {
        let newUser = {
          _id: user[0]._id + 1,
          username: req.body.username,
          password: req.body.password
        };
        Users.create(newUser)
        .then(function (createdUser) {
          if (createdUser){
            res.status(201).send("User Created Successfully");
          } else {
            res.status(500).send("Error creating user");
          }
        }).catch(function (err) {
          console.log(err);
          res.status(500).send("Server error");
        });
      });
    }
  });
});

router.get("/*/teapot", function(req, res){
  res.status(418).send("418. I'm a Teapot. The requested entity is short and stout");
});

router.get("/*", function(req, res){
  res.status(404).send("Error, requested resource does not exist");
});

router.post("/*", function(req, res){
  res.status(404).send("Error, requested resource does not exist");
});

router.put("/*", function(req, res){
  res.status(404).send("Error, requested resource does not exist");
});

router.patch("/*", function(req, res){
  res.status(404).send("Error, requested resource does not exist");
});

router.delete("/*", function(req, res){
  res.status(404).send("Error, requested resource does not exist");
});

module.exports = router;
