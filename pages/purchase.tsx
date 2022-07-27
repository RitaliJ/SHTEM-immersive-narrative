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
        if (code == "1111") {
            location.href = "/dataleak";
        } else {
            return "Incorrect Code. Please Try Again";
        }

    }
    return (
        <>
            <Head>
                <title>SHTEM Website | Checkout</title>
                <meta name="description" content="Cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main className="container pt-12 pb-24 flex flex-col gap-4 items-center">
                <h1 className="text-4xl">
                    Thank you for your purchase.
                </h1>
                <p className="text-xl">
                    You should receive a confirmation email shortly.
                </p>
                <div>
                    <button onClick={() => setIsOpen(true)} className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-green-500 hover:bg-green-700 text-white mt-8 float-left">
                        I have received my confirmation email.
                    </button>
                    <button onClick={() => setIsOpen(true)} className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-red-500 hover:bg-red-700 text-white mt-8 float-right">
                        I have not received my confirmation email.
                    </button>
                </div>
                <NiceLink href="/home" text="Back to homepage" />
                <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
                    <div className="bg-gray-900 w-full h-full flex flex-col items-center justify-center font-mono">
                        <h1 className="text-4xl text-red-600">
                            WARNING! YOU HAVE BEEN HACKED
                        </h1>
                        <p className="text-3xl text-red-600 w-6/12 mt-8">
                           Your data has been taken by hacker group THE NEW GENERATION Call XXX-XXX-XXXX to get access to the data the TNGers collected.
                        </p>
                        <div className= "text-2xl text-red-600 font-bold text-center justify-center">
                            <InputGroup label="Code" callback={setCode} />
                            <button onClick={() =>checkCode()}>Submit</button>
                            </div>
                    </div>
                </CenteredModal>
            </main>
        </>
    );
}
