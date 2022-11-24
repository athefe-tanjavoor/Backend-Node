var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "atifrokz1234@gmail.com",
    pass: "yourpass",
  },
});
var mailOptions = {
  from: "youremail@gmail.com",
  to: "toemail@gmai.com",
  subject: "sending email using node.js",
  text: "That was easy",
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email sent:" + info.response);
  }
});
