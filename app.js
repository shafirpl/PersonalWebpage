var express               = require("express");
var app                   = express();
var bodyParser            = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("pages/homepage");
})

app.listen(80,function(){
    console.log("Server has started");
});
