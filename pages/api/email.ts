import { NextApiRequest, NextApiResponse } from "next";
import { ItemType } from "../../util/types";
const nodemailer = require('nodemailer')
require('dotenv').config()

//api route to send email to provided email address
export default function email (req: NextApiRequest, res: NextApiResponse) {
    const {email, firstName, billingFirstName, billingLastName, address, items, total} = req.body;
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
            <h2>Thank you for your purchase, ${firstName}</h2>
            <h3>Billing information</h3>
            <p>Name: ${billingFirstName} ${billingLastName}</p>
            <p>Address: ${address}</p>
            <h3>Items purchased</h3>
            ${items.map((i: ItemType) =>
                `<p>${i.quantity}× ${i.product.name} (Size ${i.size})</p>`   
            ).join("")}
            <p>Total: ${total.toFixed(2)} Tokens</p>
        `,
    };
    transporter.sendMail(mailData);
    res.status(200);
}
