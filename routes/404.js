const router = require('express').Router();

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
