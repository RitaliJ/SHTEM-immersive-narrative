import { NextApiRequest, NextApiResponse } from "next";
import { ItemType } from "../../util/types";
const nodemailer = require('nodemailer')
require('dotenv').config()

//api route to send email to provided email address
export default function(req: NextApiRequest, res: NextApiResponse) {
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
            <div>
                <h2>Thank you for your purchase, ${firstName}!</h2>
                <h3>Billing information</h3>
                <p>Name: ${billingFirstName} ${billingLastName}</p>
                <p>Address: ${address}</p>
                <h3>Items purchased</h3>
                <hr>
                ${items.map((i: ItemType) => `
                    <div style="display: flex">
                        <p style="margin: 0 10px 0 0">${i.quantity}×</p>
                        <p style="margin: 0 10px 0 0">${i.product.name}</p>
                        <p style="margin: 0">(Size ${i.size})</p>
                    </div>
                    <hr>
                `).join("")}
                <p>Total: ${total.toFixed(2)} Tokens</p>
            </div>
        `,
    };
    transporter.sendMail(mailData);
    res.status(200);
}
