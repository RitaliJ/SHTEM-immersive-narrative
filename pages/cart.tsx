import Head from "next/head";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import Header from "../components/Header";
import { AccountType } from "../util/types";

export default function Cart() {
    const [account, setAccount] = useState({} as AccountType);
    const [total, setTotal] = useState(0);

    //get account from localStorage on page load
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

    //set total price once account is retrieved
    useEffect(() => {
        if (!account.email) return;
        let t = 0;
        account.items.forEach(i =>
            t += i.product.price * i.quantity
        );
        setTotal(t);
    }, [account]);

    return (
        <>
            <Head>
                <title>SHTEM Website | Cart</title>
                <meta name="description" content="Cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <main className="container pt-12 pb-24">
                <h1 className="text-7xl font-bold mb-12">
                    Your cart
                </h1>
                <div className="flex flex-col gap-2 divide-y-2 divide-gray-300">
                    {account.email && account.items.map(i =>
                        <CartProduct {...i} />
                    )}
                    {Number(total.toFixed(2)) > account.balance ? (
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 justify-end pt-4 text-right text-3xl font-bold">
                                <p>Total:</p>
                                <p className="text-red-500">
                                    {total.toFixed(2)} V Bucks
                                </p>
                            </div>
                            <p className="text-right text-xl italic">
                                You can't afford this purchase!
                            </p>
                        </div>
                    ) : (
                        <div className="flex gap-2 justify-end pt-4 text-right text-3xl font-bold">
                            <p>Total:</p>
                            <p>{total.toFixed(2)} V Bucks</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}