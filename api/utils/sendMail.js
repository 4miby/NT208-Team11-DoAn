import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer';
// Hàm gửi mail 
const sendEmail = async (email,link,name) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
      port: 465, // Port for SMTP (usually 465)
      secure: true, // Usually true if connecting to port 465
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Password (for gmail, your app password)
      },
    });
    // Gửi mail bao gồm đường link để thực hiện việc reset password
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
    // Xử lý lỗi nếu có
    return {
      success: false,
      error: error.message,
    };
  }
};
// END

export default sendEmail;