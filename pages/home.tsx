import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { AccountType } from '../util/types';

export default function Home() {
    const [account, setAccount] = useState({} as AccountType);

    useEffect(() => {
        if (!account.email) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        }
    });

    return (
        <div className="w-screen">
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header account={account} />

            <main className="container pt-12">

                <h1 className="text-7xl font-bold text-center">
                    Buy our things
                </h1>
            </main>
        </div>
    )
}
