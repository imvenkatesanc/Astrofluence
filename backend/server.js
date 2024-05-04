require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

const errorHandler = require('./_middleware/error-handler'); // Ensure correct path to error-handler middleware

// Middleware for enabling CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Middleware for parsing JSON and url-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/users', require('./users/users.controller'));

// Route for sending emails
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: 'venkatesanit2020@gmail.com',
      pass: 'wfwd orzx llmg gxhz',
    },
    secure: true,
  });

  // Mail options
  const mailOptions = {
    from: 'venkatesanit2020@gmail.com',
    to: 'samsudeenshait2020@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error: Could not send email');
    } else {
      console.log('Email sent successfully:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
