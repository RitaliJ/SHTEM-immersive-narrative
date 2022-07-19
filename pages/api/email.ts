import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer')
require('dotenv').config()

//api route to send email to provided email address
export default (req: NextApiRequest, res: NextApiResponse) => {
    const {email, firstName, billingFirstName, billingLastName, address} = req.body;
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
        to: email,
        subject: "Purchase confirmation",
        html: `
            <h1>Thank you for your purchase, ${firstName}</h1>
            <h3>Billing information</h3>
            <p>Name: ${billingFirstName} ${billingLastName}</p>
            <p>Address: ${address}</p>
        `,
    };
    transporter.sendMail(mailData);
    res.status(200);
}
