const path = require("path");
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");

var transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "tanjavoorathefe@gmail.com",
    pass: "zelblxtuyfdqiwik",
  },
});
var handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partiaLsDir: path.resolve("./views/email.handlebars"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views"),
  extName: ".handlebars",
};
transporter.use("compile", hbs(handlebarOptions));
var mailOptions = {
  from: "tanjavoorathefe@gmail.com",
  to: "atifrokz1234@gmail.com",
  subject: "sending Email using node.js",
  template: "email",
  context: {
    tittle: "Title Here",
    text: "lorem ipsum dolor sit amer",
  },
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email sent:" + info.response);
  }
});
