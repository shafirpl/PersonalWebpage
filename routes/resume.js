var express             = require("express");
var router              = express.Router();

router.get("/resume",function(req,res){
  var file = "./resume.pdf";
  res.download(file);
});

module.exports = router;
