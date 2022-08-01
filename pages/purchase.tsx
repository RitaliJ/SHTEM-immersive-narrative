import Head from "next/head";
import { useEffect, useState } from "react";
import CenteredModal from "../components/CenteredModal";
import Header from "../components/Header";
import NiceLink from "../components/NiceLink";
import InputGroup from '../components/InputGroup'


//confirmation page after purchasing products
export default function Purchase() {
    const [isOpen, setIsOpen] = useState(false);
    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add
    const [code, setCode] = useState("");

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("purchase");
        if (x === null || x === "{}") { //if localstorage key doesn't exist, create it
            localStorage.setItem("purchase", JSON.stringify({millis: 0, clicks: 0}));
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
                const x = localStorage.getItem("purchase");
                if (x !== null) {
                    let x2 = JSON.parse(x);
                    x2.millis = millis + newMillis;
                    localStorage.setItem("purchase", JSON.stringify(x2));
                }
            }, 1000);
        }
    }, [newMillis]);

    //handle click event
    const handleClick = () => {
        const x = localStorage.getItem("purchase");
        if (x !== null) {
            let x2 = JSON.parse(x);
            x2.clicks += 1;
            localStorage.setItem("purchase", JSON.stringify(x2));
        }
    }
    function checkCode(){
        if (code == "2896") {
            location.href = "/dataleak";
        } else {
            return "Incorrect Code. Please Try Again";
        }

    }
    return (
        <>
            <Head>
                <title>SHTEM Website | Purchase</title>
                <meta name="description" content="Purchase" />
                <link rel="icon" href="https://media.discordapp.net/attachments/999069731732594699/1001568457806053486/unknown.png" />
            </Head>

            <Header/>

            <main className="container pt-12 pb-24 flex flex-col gap-4 items-center">
                <h1 className="text-4xl">
                    Thank you for your purchase.
                </h1>
                <p className="text-xl">
                    You should receive a confirmation email shortly.
                </p>
                <div className="flex gap-4 justify-center mt-8">
                    <button onClick={() => setIsOpen(true)} className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-green-500 hover:bg-green-700 text-white">
                        I have received my confirmation email.
                    </button>
                    <button onClick={() => setIsOpen(true)} className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-red-500 hover:bg-red-700 text-white">
                        I have not received my confirmation email.
                    </button>
                </div>
                <NiceLink href="/home" text="Back to homepage" />
                <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
                    <div className="bg-gray-900 w-full h-full flex justify-center items-center font-mono">
                        <div className="w-1/2 h-full flex flex-col gap-8 justify-center items-center">
                            <h1 className="text-4xl text-red-600">
                                WARNING! YOU HAVE BEEN HACKED
                            </h1>
                            <p className="text-3xl text-red-600">
                            Your data has been taken by hacker group THE NEW GENERATION. 
                            </p>
                            <p className="text-3xl text-red-600">
                                Call 714-202-2636 to get access to the data the TNGers collected.
                            </p>
                            <div className="text-2xl text-red-600 flex flex-col gap-4">
                                <InputGroup label="Code" callback={setCode} />
                                <button
                                    className="bg-red-600 text-gray-900 px-3 py-1 rounded-lg"
                                    onClick={() => checkCode()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </CenteredModal>
            </main>
        </>
    );
}
