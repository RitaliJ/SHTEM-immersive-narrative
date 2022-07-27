import Head from 'next/head';
import { useEffect, useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import InputGroup from '../components/InputGroup'
import { AccountType, CaptchaType, ItemType, SurveyType } from '../util/types';
const constants = require('../util/constants')

//page for creating an account; information is saved in localStorage
export default function Login() {
    //useStates for account fields
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [year, setYear] = useState(undefined as unknown as number); //date of birth useStates
    const [month, setMonth] = useState(undefined as unknown as number);
    const [day, setDay] = useState(undefined as unknown as number);
    const years = Array.from(new Array(100), (x, i) => 2022 - i); //for choosing date of birth
    const months = Array.from(new Array(12), (x, i) => i + 1);
    const days = Array.from(new Array(31), (x, i) => i + 1);

    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("login");
        if (x === null || x === "{}") { //if localstorage key doesn't exist, create it
            localStorage.setItem("login", JSON.stringify({millis: 0, clicks: 0}));
        } else {
            const x2 = JSON.parse(x);
            setMillis(x2.millis);
        }
        setNewMillis(0);
        setStart(Date.now);
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    //update millis roughly once per second
    useEffect(() => {
        if (start && millis !== undefined && newMillis !== undefined) {
            setTimeout(() => {
                setNewMillis(Date.now() - start);
                const x = localStorage.getItem("login");
                if (x !== null) {
                    let x2 = JSON.parse(x);
                    x2.millis = millis + newMillis;
                    localStorage.setItem("login", JSON.stringify(x2));
                }
            }, 1000);
        }
    }, [newMillis]);

    //handle click event
    const handleClick = () => {
        const x = localStorage.getItem("login");
        if (x !== null) {
            let x2 = JSON.parse(x);
            x2.clicks += 1;
            localStorage.setItem("login", JSON.stringify(x2));
        }
    }

    //ensure that email is valid
    const validateEmail = () => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    //set localStorage and go to terms page
    const handleSubmit = (account: AccountType) => {
        console.log(month);
        if (validateEmail() && firstName && lastName && phone
            && year !== undefined && month !== undefined && day !== undefined
            && !Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day)) {
            localStorage.setItem("shtemAccount", JSON.stringify(account));
            //clear completed surveys and captchas for new account
            constants.surveys.forEach((x: SurveyType) => localStorage.setItem(x.title, "undefined"));
            constants.captchas.forEach((x: CaptchaType) => localStorage.setItem(x.title, "undefined"));
            location.href = "/terms";
        }
    }

    return (
        <div className="w-screen h-screen bg-blue-100">
            <Head>
                <title>SHTEM Website | Login</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="https://media.discordapp.net/attachments/999069731732594699/1001568457806053486/unknown.png" />
            </Head>
        
            <main className="container h-4/5 flex justify-center items-center">
                <div className="bg-white p-6 pb-4 rounded-lg flex flex-col gap-3 text-lg">
                    <h1 className="text-3xl font-bold text-center">
                        Create a new account
                    </h1>
                    <InputGroup label="Email" callback={setEmail} />
                    <InputGroup label="First Name" callback={setFirstName} />
                    <InputGroup label="Last Name" callback={setLastName} />
                    <InputGroup label="Phone Number" value={phone} callback={setPhone} onlyNumbers maxLength={10} />
                    <div className="flex gap-1">
                        <DropdownMenu label="Birth month" callback={x => setMonth(Number(x))} options={months}/>
                        <DropdownMenu label="Birth day" callback={x => setDay(Number(x))} options={days}/>
                        <DropdownMenu label="Birth year" callback={x => setYear(Number(x))} options={years}/>
                    </div>
                    
                    <div className="flex flex-col gap-1 mt-2 justify-center items-center">
                        <button
                            onClick={() => handleSubmit({
                                email,
                                firstName,
                                lastName,
                                phone,
                                DOB: {year, month, day},
                                balance: 100,
                                items: [undefined as unknown as ItemType],
                                purchases: [undefined as unknown as ItemType],
                                usedCodes: [],
                                firstVisit: true,
                                doneNewsletter: false,
                            })}
                            className={"duration-150 rounded-lg px-3 pt-1 pb-1.5 " + (email && firstName && lastName && phone
                                && validateEmail() && year !== undefined && month !== undefined && day !== undefined
                                && !Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day)
                                ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}
                        >
                            Create account
                        </button>
                        <p className="italic text-red-500">
                            {!(email && firstName && lastName && phone
                                && year !== undefined && month !== undefined && day !== undefined
                                && !Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day)) &&
                                "* Please fill all required fields"
                            }
                            {(email && firstName && lastName && phone
                                && year !== undefined && month !== undefined && day !== undefined
                                && !Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day) && !validateEmail()) &&
                                "* Please provide a valid email address"
                            }
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
