import { NextApiRequest, NextApiResponse } from "next";
import { ItemType } from "../../util/types";
const nodemailer = require('nodemailer')
require('dotenv').config()

//api route to send email to provided email address
export default function(req: NextApiRequest, res: NextApiResponse) {
    const {email} = req.body;
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
            <div style="display: flex; gap: 1rem;">
                <p>Hello,</p>
                <p>
                    THANK YOU for participating in our simulated shopping experience! The TNGers are
                    proud of you for joining the resistance movement and making the right decision.
                    To learn more about how you can resist, check out the attached PDF below containing
                    effective ways you can resist to surveillance capitalism along with easy guides to
                    accomplish them. But first, we must give credit to the organizations and people who
                    made our amazing project come to life:
                </p>
                <li>Mentors: Marieke Gaboury and Devon Baur</li>
                <li>Research team: Houda Miftah, Julian Reed, Audrey Edwards.</li>
                <li>Story team: Alex Nguyen, Nina Franz, Cecilia Colberg.</li>
                <li>Website development team: Ayushman Chakraborty, Ritali Jain, Kepler Boyce.</li>
                <li>Affiliated organizations: Stanford STEM to SHTEM program, Palo Alto Children’s Theatre.</li>
                <p>Have a magnificent day,</p>
                <p>TNGERS</p>
            </div>
        `,
    };
    transporter.sendMail(mailData);
    res.status(200);
}
