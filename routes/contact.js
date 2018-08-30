var express             = require("express");
var router              = express.Router();
var bodyParser            = require("body-parser");
var nodemailer            = require("nodemailer");

router.get("/contact",function(req,res){
  res.render("pages/contact",{msg:null});
});


router.post("/send",function(req,res){

  const output = `<p>New Contact Request </p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Company: ${req.body.company}</li>
  <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>`;

  //nodemailer stuff
  let transporter = nodemailer.createTransport({
        host: 'smtp.mail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'shafi.rpl@mail.com', // generated ethereal user
            pass: 'GMdrmc8936@' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Recruiter" <shafi.rpl@mail.com>', // sender address
        to: 'shafi.rpl@gmail.com', // list of receivers
        subject: 'Hiring Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        //redirecting to contact page saying message successfully sent
        res.render("pages/contact",{msg:'Email has been sent'});
    });

});

module.exports = router;
