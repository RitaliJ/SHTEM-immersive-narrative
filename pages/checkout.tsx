import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import { AccountType } from "../util/types";

export default function Checkout() {
    const [account, setAccount] = useState({} as AccountType);
    const [total, setTotal] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [shipping, setShipping] = useState(5);

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

    //set total price and account details once account is retrieved
    useEffect(() => {
        if (!account.email) return;
        let t = 0;
        account.items.forEach(i =>
            t += i.product.price * i.quantity
        );
        setTotal(t);
        setFirstName(account.firstName);
        setLastName(account.lastName);
    }, [account]);

    return (
        <>
            <Head>
                <title>SHTEM Website | Checkout</title>
                <meta name="description" content="Cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <main className="container pt-12 pb-24 flex text-lg divide-x divide-gray-300">
                <div className="w-2/5 flex flex-col gap-2 p-4 pr-8 h-min">
                    <h3 className="text-2xl mb-4">
                        Shipping address
                    </h3>
                    <div className="flex gap-2">
                        <InputGroup label="First name" value={firstName} callback={setFirstName} />
                        <InputGroup label="Last name" value={lastName} callback={setLastName} />
                    </div>
                    <InputGroup label="Address" callback={setAddress} />
                    <InputGroup label="Apartment, suite, etc." callback={setAddress2} />
                    <div className="flex gap-2">
                        <InputGroup label="City" callback={setCity} />
                        <InputGroup label="State" callback={setState} />
                        <InputGroup label="ZIP Code" callback={setZip} />
                    </div>
                    <div className="flex mt-4 items-center">
                        <div className="grow">
                            <Link href="/cart">
                                <a className="text-lg text-blue-500">
                                    ← Return to cart
                                </a>
                            </Link>
                        </div>
                        <Link href="/shipping">
                            <button className="bg-green-600 text-lg text-white px-10 py-3 rounded-lg">
                                Place order
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex flex-col p-4 pl-8 divide-y divide-gray-300">
                    {account.email && account.items.map(i =>
                        <CartProduct {...{...i, className: "text-lg h-24"}} />
                    )}
                    <div className="flex flex-col gap-2 pt-4">
                        <div className="flex gap-2 px-2 text-lg">
                            <p className="grow">Subtotal</p>
                            <p>{total.toFixed(2)} V Bucks</p>
                        </div>
                        <div className="flex gap-2 px-2 text-lg">
                            <p className="grow">Shipping</p>
                            <p>{shipping.toFixed(2)} V Bucks</p>
                        </div>
                        <div className="flex gap-2 px-2 text-2xl">
                            <p className="grow">Total</p>
                            <p>{(total + shipping).toFixed(2)} V Bucks</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}