var express             = require("express");
var router              = express.Router();

router.get("/education",function(req,res){
  res.render("pages/education");
});

module.exports = router;
