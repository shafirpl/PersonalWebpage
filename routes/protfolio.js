var express             = require("express");
var router              = express.Router();

router.get("/protfolio",function(req,res){
  res.render("pages/protfolio");
});

module.exports = router;
