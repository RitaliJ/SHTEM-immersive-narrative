import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer')
const path = require('path')
require('dotenv').config()

//api route to send email to provided email address
export default function(req: NextApiRequest, res: NextApiResponse) {
    const {email, resist} = req.body;
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
        subject: "Thank you for your participation!",
        attachments: resist ? [
            {
                filename: 'resistance.pdf', // <= Here: made sure file name match
                path: path.join(__dirname, '../../../../public/resistance.pdf'), // <= Here
                contentType: 'application/pdf'
            }
        ] : [],
        html: resist ? `
            <div>
                <p style="margin-bottom: 10px">Hello,</p>
                <p style="margin-bottom: 10px">
                    Thank you for participating in our simulated shopping experience! The TNGers are
                    proud of you for joining the resistance movement and making the right decision.
                    To learn more about how you can resist, check out the attached PDF below containing
                    effective ways you can resist to surveillance capitalism along with easy guides to
                    accomplish them. But first, we must give credit to the organizations and people who
                    made our project come to life:
                </p>
                <li>Mentors: Marieke Gaboury and Devon Baur</li>
                <li>Research team: Houda Miftah, Julian Reed, Audrey Edwards</li>
                <li>Story team: Alex Nguyen, Nina Franz, Cecilia Colberg</li>
                <li>Website development team: Ayushman Chakraborty, Ritali Jain, Kepler Boyce</li>
                <li>Affiliated organizations: Stanford STEM to SHTEM program, Palo Alto Children’s Theatre</li>
                <p style="margin-bottom: 10px">Have a magnificent day,</p>
                <p>TNGers</p>
            </div>
        ` : `
            <div>
                <p style="margin-bottom: 10px">Hello,</p>
                <p style="margin-bottom: 10px">
                    Thank you for participating in the simulated shopping experience! To continue
                    shopping, click on this link:
                    <a href="https://shtem.herokuapp.com/home">https://shtem.herokuapp.com/home</a>.
                    But first, I must give credit to the organizations and people who made this
                    project come to life:
                </p>
                <li>Mentors: Marieke Gaboury and Devon Baur</li>
                <li>Research team: Houda Miftah, Julian Reed, Audrey Edwards</li>
                <li>Story team: Alex Nguyen, Nina Franz, Cecilia Colberg</li>
                <li>Website development team: Ayushman Chakraborty, Ritali Jain, Kepler Boyce</li>
                <li>Affiliated organizations: Stanford STEM to SHTEM program, Palo Alto Children’s Theatre</li>
                <p style="margin-bottom: 10px">See you shopping soon!</p>
                <p>Carty, your personal shopping assistant</p>
            </div>
        `,
    };
    transporter.sendMail(mailData);
    res.status(200);
}
