const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

// send email config
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ceresoftware@gmail.com",
    pass: "xjcswkgcvkqpgcyo",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// send email
const sendEmail = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "ceresoftware@gmail.com",
    subject: "message from RWWA site",
    html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message sent" });
    }
  });
});

module.exports = {
  sendEmail,
};
