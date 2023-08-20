const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harshitsharma0529@gmail.com", //!process.env.EMAIL_USER , ye es se kaam nhi kr rha hai
    pass: "nncrlnoadedqhphl", //! process.env.EMAIL_PASS ,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: "This  is from nodemailer",
  text: "This is the body part",
};

module.exports = {
  transporter,
  mailOptions,
};
