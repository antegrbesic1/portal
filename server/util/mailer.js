const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "portalinfofsre@gmail.com",
      pass: process.env.PORTAL_EMAIL_PASSWORD,
    },
  })
);

const mailOptions = {
  from: "portalinfofsre@gmail.com",
  to: "grbesicante27@gmail.com",
  subject: null,
  text: null,
};

module.exports = {
  transporter: transporter,
  mailOptions: mailOptions,
};
