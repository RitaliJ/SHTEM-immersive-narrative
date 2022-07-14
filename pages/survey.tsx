import Head from "next/head";
import { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import ToggleButton from "../components/ToggleButton";
import { AccountType } from "../util/types";

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
        location.href = "/";
    }

    return (
        <div className="w-screen h-screen bg-gray-300">
            <Head>
                <title>SHTEM Website | Survey</title>
                <meta name="description" content="Survey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className="container h-4/5 flex justify-center items-center">
                <div className="bg-white p-6 pb-4 rounded-lg flex flex-col gap-3 text-lg max-w-min">
                    <h1 className="text-3xl font-bold text-center whitespace-nowrap">
                        Let us know what your interests are
                    </h1>
                    <p className="italic text-center">
                        Click to select any number of interests
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                        <ToggleButton label="Lorem" callback={updateInterests} />
                        <ToggleButton label="Ipsum" callback={updateInterests} />
                        <ToggleButton label="Dolor" callback={updateInterests} />
                        <ToggleButton label="Sit" callback={updateInterests} />
                        <ToggleButton label="Amet" callback={updateInterests} />
                        <ToggleButton label="Consectetur" callback={updateInterests} />
                        <ToggleButton label="Adipiscing" callback={updateInterests} />
                        <ToggleButton label="Elit" callback={updateInterests} />
                    </div>
                    <div className="flex mt-2 justify-center">
                        <button
                            onClick={() => handleSubmit()}
                            className="bg-blue-500 rounded-lg px-3 pt-1 pb-1.5 text-white"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}