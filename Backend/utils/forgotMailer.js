const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const forgotMailer = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset OTP [forgot]",
    text: `Your OTP for password reset is: ${otp}. It is valid for 10 minutes. [forgot]`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = forgotMailer;