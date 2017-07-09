const router = require('express').Router();

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
