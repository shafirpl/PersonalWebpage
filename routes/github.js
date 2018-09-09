var express             = require("express");
var router              = express.Router();

router.get("/github",function(req,res){
  res.render("pages/github");
});

module.exports = router;
