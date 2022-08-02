import { NextApiRequest, NextApiResponse } from "next";
import { ItemType } from "../../util/types";
const nodemailer = require('nodemailer')
require('dotenv').config()

//api route to send email to provided email address
export default function(req: NextApiRequest, res: NextApiResponse) {
    const {email, firstName} = req.body;
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
        subject: "Welcome to the Resistance",
        html: `
            <h2>Welcome to the resistance, ${firstName}</h2>
        `,
    };
    transporter.sendMail(mailData);
    res.status(200);
}
