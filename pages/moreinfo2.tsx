import Head from "next/head";
import { SetStateAction, useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import ToggleButton from "../components/ToggleButton";
import { AccountType } from "../util/types";

//page for collecting additional information about the user
export default function moreInfo() {
    const [account, setAccount] = useState<AccountType>();
    const [info2, setinfo2] = useState([""]);//array of interest names
    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("extrovert2");
        if (x === null || x === "{}") { //if localstorage key doesn't exist, create it
            localStorage.setItem("extrovert2", JSON.stringify({millis: 0, clicks: 0}));
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
                const x = localStorage.getItem("extrovert2");
                if (x !== null) {
                    let x2 = JSON.parse(x);
                    x2.millis = millis + newMillis;
                    localStorage.setItem("extrovert2", JSON.stringify(x2));
                }
            }, 1000);
        }
    }, [newMillis]);

    //handle click event
    const handleClick = () => {
        const x = localStorage.getItem("extrovert2");
        if (x !== null) {
            let x2 = JSON.parse(x);
            x2.clicks += 1;
            localStorage.setItem("extrovert2", JSON.stringify(x2));
        }
    }

    //get account info from localStorage; if it doesn't exist, send user to login page
    useEffect(() => {
        if (!account) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        }
    });

    //function to add/remove an interest
    const updateInterests = (name: string, on: boolean) => {
        if (on) {
            setinfo2([...info2, name].filter(e => e !== ""));
        } else {
            setinfo2(info2.filter(e => e !== name));
        }
    }

    //set localStorage and go to index
    const handleSubmit = () => {
        localStorage.setItem("shtemInfo2", JSON.stringify(info2));
        location.href = "/moreinfo3";
    }

    return (
        <div className="w-screen h-screen bg-blue-100">
            <Head>
                <title>SHTEM Website | Survey</title>
                <meta name="description" content="Survey" />
                <link rel="icon" href="https://media.discordapp.net/attachments/999069731732594699/1001568457806053486/unknown.png" />
            </Head>
        
            <main className="container h-4/5 flex justify-center items-center">
                <div className="bg-white p-6 pb-4 rounded-lg flex flex-col gap-3 text-lg max-w-min">
                    <h1 className="text-2xl font-bold text-center">
                        We would love to get some more information about you so that we can provide a more pleasurable user experience!
                    </h1>
                    <h1 className="text-xl font-bold text-center whitespace-nowrap mt-4">
                        You have a project in school. Your teacher has given you an option to either work in a large group, small group or by youself? Which one do you decide upon?
                    </h1>
                    <p className="italic text-center">
                        One answer only. 
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                        <ToggleButton label=" I like to work in a large group fosho" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="I like to work in a small group" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="I like to work independently" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />

                    </div>

                    <div className="flex mt-2 justify-center">
                        <button
                            onClick={() => handleSubmit()}
                            className="bg-blue-500 rounded-lg px-3 pt-1 pb-1.5 text-white" >
                            Submit
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}