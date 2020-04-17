const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aurinassam@gmail.com",
      pass: "BEBBEBBEB@aurin",
    },
  });

  const mailOptions = {
    from: "aurinassam@gmail.com",
    to: "debashishcoc@gmail.com",
    subject: "Order Notification",
    // text:
    html: `<h1>Contact notification</h1>
            <p>${req.body.message}</p>
            <p>${req.body.name}</p>
            <p>${req.body.email}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ message: error });
    } else {
      res.status(200).json({ message: "success" });
    }
  });
});

module.exports = router;
