import Head from "next/head";
import { useEffect, useState } from "react";
import { AccountType } from "../util/types";

//page where all collected data is displayed
export default function Dataleak() {
    const [account, setAccount] = useState(undefined as unknown as AccountType);

    useEffect(() => {
        if (!account) {
            const acc = localStorage.getItem('shtemAccount')
            if (!acc) return;
            setAccount(JSON.parse(acc));
        }
    }, [account]);

    return (
        <>
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col gap-1 m-12 text-lg items-center font-mono">
                <div className="w-min whitespace-nowrap">
                    <h1 className="text-2xl font-bold">
                        {account && account.firstName + "'"}s data
                    </h1>
                    {account && <>
                        <div className="flex gap-2">
                            <p>Email:</p>
                            <p>{account.email}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>Name:</p>
                            <p>{account.firstName} {account.lastName}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>Phone number:</p>
                            <p>{account.phone}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>Date of birth:</p>
                            <p>{account.DOB.month}/{account.DOB.day}/{account.DOB.year}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>Account balance:</p>
                            <p>{account.balance.toFixed(2)} Tokens</p>
                        </div>
                        <p>Items purchased:</p>
                        <div className="flex flex-col gap-1 pl-4">
                            {account.items.map((x, i) =>
                                <div key={i} className="flex gap-2">
                                    <p>•</p>
                                    <p>{x.quantity}×</p>
                                    <p>{x.product.name}</p>
                                    <p>(Size {x.size})</p>
                                </div>
                            )}
                        </div>
                        <p>Gift codes used:</p>
                        <div className="flex flex-col gap-1 pl-4">
                            {account.usedCodes.map((x, i) =>
                                <div key={i} className="flex gap-2">
                                    <p>•</p>
                                    <p>{x}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <p>Filled out newsletter:</p>
                            <p>{account.doneNewsletter ? "Yes" : "No"}</p>
                        </div>
                    </>}
                </div>
            </main>
        </>
    )
}
