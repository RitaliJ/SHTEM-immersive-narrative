import Head from "next/head";
import { SetStateAction, useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import ToggleButton from "../components/ToggleButton";
import { AccountType } from "../util/types";

//page for collecting additional information about the user
export default function Survey() {
    const [account, setAccount] = useState<AccountType>();
    const [interests, setInterests] = useState([""]);//array of interest names

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
            setInterests([...interests, name].filter(e => e !== ""));
        } else {
            setInterests(interests.filter(e => e !== name));
        }
    }

    //set localStorage and go to index
    const handleSubmit = () => {
        localStorage.setItem("shtemInterests", JSON.stringify(interests));
        location.href = "/home";
    }

    return (
        <div className="w-screen h-screen bg-blue-100">
            <Head>
                <title>SHTEM Website | Survey</title>
                <meta name="description" content="Survey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className="container h-4/5 flex justify-center items-center">
                <div className="bg-white p-6 pb-4 rounded-lg flex flex-col gap-3 text-lg max-w-min">
                    <h1 className="text-2xl font-bold text-center">
                        We{"'"}d love to make this shopping experience perfect for <em>you</em>!
                    </h1>
                    <h1 className="text-xl font-bold text-center whitespace-nowrap mt-4">
                        Let us know what your interests are
                    </h1>
                    <p className="italic text-center">
                        Click to select any number of interests
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                        <ToggleButton label="Balenciaga" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="GUCCI" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="Louis Vuitton" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="Armani" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="Prada" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="Chanel" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="Versace" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="Cartier" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
                        <ToggleButton label="Hermes" callback={updateInterests} offBg="bg-amber-100 hover:bg-amber-200" />
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