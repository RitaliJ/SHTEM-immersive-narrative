import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer')
require('dotenv').config()

//api route to send email to provided email address
export default (req: NextApiRequest, res: NextApiResponse) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "shtembytesize@gmail.com",
            pass: process.env.GMAIL_PASS,
        },
        secure: true,
    });
    const mailData = {
        from: "shtembytesize@gmail.com",
        to: req.body.email,
        subject: "Test message to " + req.body.firstName,
        text: req.body.message,
    };
    transporter.sendMail(mailData);
    res.status(200);
}