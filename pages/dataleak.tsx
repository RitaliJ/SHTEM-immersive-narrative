import Head from "next/head";
import { useEffect, useState } from "react";
import { AccountType } from "../util/types";

//page where all collected data is displayed
export default function Dataleak() {
    const [data, setData] = useState("");
    const [account, setAccount] = useState(undefined as unknown as AccountType);

    useEffect(() => {
        if (!data) {
            const acc = localStorage.getItem('shtemAccount')
            if (!acc) return;
            setData(acc);
            setAccount(JSON.parse(acc));
        }
    }, [data]);

    return (
        <>
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col gap-1 m-12">
                <h1 className="text-2xl font-bold">
                    {account && account.firstName + "'"}s data
                </h1>
                <p className="text-lg">
                    {data}
                </p>
            </main>
        </>
    )
}
