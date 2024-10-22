const nodemailer = require('nodemailer');

const otpObject = new Map();

const generateOTP = async (req, res) => {
  try {
    console.log(req.body);

    const generatedotp = Math.floor(Math.random() * 900000) + 100000; // Ensure 6-digit OTP

    otpObject.set(req.body.email, generatedotp);

    console.log(req.body.email, otpObject);

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    const mailOptions = {
      from: 'noreply@mail.com',
      to: req.body.email,
      subject: 'OTP for updating email',
      text: `Your OTP is ${generatedotp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Something went wrong' });
      }

      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'OTP has been sent' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  generateOTP,
};
