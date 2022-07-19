import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import Header from "../components/Header";
import { AccountType } from "../util/types";

//page for viewing shopping cart
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

    //function to remove item from cart
    const removeItem = (id: number) => {
        let acc = {} as AccountType;
        Object.assign(acc, account);
        acc.items = acc.items.filter(i => i.product.id !== id);
        localStorage.setItem("shtemAccount", JSON.stringify(acc));
        setAccount(acc);
    }

    return (
        <>
            <Head>
                <title>SHTEM Website | Cart</title>
                <meta name="description" content="Cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <main className="container pt-12 pb-24">
                <Link href="/home">
                    <a className="text-xl text-blue-500">
                        <p className="mb-6">
                            ← Continue shopping
                        </p>
                    </a>
                </Link>
                <h1 className="text-5xl font-bold mb-12">
                    Your cart
                </h1>
                <div className="flex flex-col divide-y divide-gray-300">
                    {account.email && account.items.map(i =>
                        <CartProduct {...{...i, className: "h-24 text-xl",
                            callback: () => removeItem(i.product.id)}} />
                    )}
                    {Number(total.toFixed(2)) > account.balance ? (
                        <div className="flex flex-col gap-1 items-end pt-4 px-2">
                            <div className="flex gap-2 text-2xl">
                                <p>Total:</p>
                                <p className="text-red-500">
                                    {total.toFixed(2)} V Bucks
                                </p>
                            </div>
                            <p className="text-right text-lg italic">
                                You can't afford this purchase!
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 items-end pt-4 px-2">
                            <div className="flex gap-2 text-2xl">
                                <p>Total:</p>
                                <p className="text-green-600">
                                    {total.toFixed(2)} V Bucks
                                </p>
                            </div>
                            <Link href="/checkout">
                                <button className="bg-green-600 text-lg text-white px-10 py-3 rounded-lg">
                                    Continue to checkout
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}