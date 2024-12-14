const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const codes = {}; // Временное хранилище кодов

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password', // Используйте App Passwords
    },
});

app.post('/send-code', (req, res) => {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    codes[email] = code;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your verification code',
        text: `Your code is: ${code}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

app.post('/verify-code', (req, res) => {
    const { code } = req.body;
    const email = Object.keys(codes).find(key => codes[key] === code);

    if (email) {
        delete codes[email];
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
