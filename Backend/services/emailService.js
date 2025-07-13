

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendPartnershipEmail = async ({ name, email, phone, message }) => {
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: "contact.skillroom@gmail.com",
    subject: "New Partnership Inquiry",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  const clientMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank You for Your Inquiry!",
    html: `
      <h1>Thanks, ${name}!</h1>
      <p>Your inquiry has been received. Our team will connect with you within 24 hours to explore partnership opportunities.</p>
      <p>Best regards,<br>SkillRoom Team</p>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);
  } catch (error) {
    console.error("Email error:", error.message);
    throw new Error("Failed to send email");
  }
};

exports.sendCallbackEmail = async ({ name, contact, email }) => {
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: "contact.skillroom@gmail.com",
    subject: "New Callback Request",
    text: `Name: ${name}\nContact: ${contact}\nEmail: ${email || "Not provided"}`,
  };

  let clientMailOptions = null;
  if (email) {
    clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Callback Request!",
      html: `
        <h1>Thanks, ${name}!</h1>
        <p>Your callback request has been received. Our team will contact you soon to discuss further.</p>
        <p>Best regards,<br>SkillRoom Team</p>
      `,
    };
  }

  try {
    await transporter.sendMail(adminMailOptions);
    if (clientMailOptions) {
      await transporter.sendMail(clientMailOptions);
    }
  } catch (error) {
    console.error("Email error:", error.message);
    throw new Error("Failed to send email");
  }
};

exports.sendBusinessPartnershipEmail = async ({ orgName, name, email, message }) => {
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: "contact.skillroom@gmail.com",
    subject: "New Business Partnership Inquiry",
    text: `Organization: ${orgName}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  const clientMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank You for Your Business Partnership Inquiry!",
    html: `
      <h1>Thanks, ${name}!</h1>
      <p>Your business partnership inquiry for ${orgName} has been received. Our team will reach out within 24 hours to discuss collaboration opportunities.</p>
      <p>Best regards,<br>SkillRoom Team</p>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);
  } catch (error) {
    console.error("Email error:", error.message);
    throw new Error("Failed to send email");
  }
};

exports.sendCvSubmissionEmail = async ({ name, email, cvUrl }) => {
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: "contact.skillroom@gmail.com",
    subject: "New CV Submission",
    text: `Name: ${name}\nEmail: ${email}\nCV: ${cvUrl}`,
  };

  const clientMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank You for Your CV Submission!",
    html: `
      <h1>Thanks, ${name}!</h1>
      <p>Your CV has been received. Our team will review it and reach out soon to discuss potential opportunities.</p>
      <p>Best regards,<br>SkillRoom Team</p>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);
  } catch (error) {
    console.error("Email error:", error.message);
    throw new Error("Failed to send email");
  }
};
