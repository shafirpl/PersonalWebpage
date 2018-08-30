var express             = require("express");
var router              = express.Router();

router.get("/experience",function(req,res){
  res.render("pages/experience");
});

module.exports = router;
