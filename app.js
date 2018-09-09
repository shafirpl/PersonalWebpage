var express               = require("express");
var secure                = require('express-force-https');
var app                   = express();
var bodyParser            = require("body-parser");
var nodemailer            = require("nodemailer");

//routes

var educationRoute        = require("./routes/education.js");
var homepageRoute         = require("./routes/homepage.js");
var aboutRoute            = require("./routes/about.js");
var resumeRoute           = require("./routes/resume.js");
var contactRoute          = require("./routes/contact.js");
var experienceRoute       = require("./routes/experience.js");
var protfolioRoute        = require("./routes/protfolio.js");
var githubRoute        = require("./routes/github.js");



app.use(secure);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.use(homepageRoute);
app.use(educationRoute);
app.use(aboutRoute);
app.use(resumeRoute);
app.use(contactRoute);
app.use(experienceRoute);
app.use(protfolioRoute);
app.use(githubRoute);



app.listen(80,function(){
    console.log("Server has started");
});
