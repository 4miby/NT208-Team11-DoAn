import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer';
const sendEmail = async (email,link,name) => {
  try {
    console.log(email);
    console.log(link);
    console.log(name);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
      port: 465, // Port for SMTP (usually 465)
      secure: true, // Usually true if connecting to port 465
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Password (for gmail, your app password)
      },
    });
    // Define and send message inside transporter.sendEmail() and await info about send from promise:
    let info = await transporter.sendMail({
      from: "huyvo6999@gmail.com",
      to: email,
      subject: "Reset PassWord for WanderestBooking",
      html: `
      <h1>Hi {${name}}</h1>
      <p>You requested to reset your password.</p>
      <p> Please, click the link below to reset your password</p>
      <a href="http://${link}">Reset Password</a>
      `,
    });
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};


export default sendEmail;