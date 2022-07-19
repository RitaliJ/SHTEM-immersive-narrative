import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import { AccountType, ItemType } from "../util/types";

export default function Checkout() {
    const [account, setAccount] = useState({} as AccountType);
    const [total, setTotal] = useState(0);
    const [email, setEmail] = useState(""); //useStates for input field values
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
        setEmail(account.email);
        setFirstName(account.firstName);
        setLastName(account.lastName);
    }, [account]);

    //handle clicking on order button
    const handleSubmit = () => {
        if (firstName && lastName && address && city && state && zip) {
            const data = {
                email,
                firstName: account.firstName,
                billingFirstName: firstName,
                billingLastName: lastName,
                address: `${address}, ${city}, ${state} ${zip}`,
                items: account.items,
                total,
            };
            fetch("/api/email", { //send email request to api route
                method: "POST",
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            let acc = account; //reset shopping cart in localStorage account info
            acc.items = [undefined as unknown as ItemType];
            acc.balance -= total; //remove spent money from balance
            localStorage.setItem("shtemAccount", JSON.stringify(acc));
        }
    }

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
                    <InputGroup label="Email" value={email} callback={setEmail} />
                    <div className="flex gap-2">
                        <InputGroup label="First name" value={firstName} callback={setFirstName} />
                        <InputGroup label="Last name" value={lastName} callback={setLastName} />
                    </div>
                    <InputGroup label="Address" callback={setAddress} />
                    <InputGroup label="Apartment, suite, etc." optional callback={setAddress2} />
                    <div className="flex gap-2">
                        <InputGroup label="City" callback={setCity} />
                        <InputGroup label="State" callback={setState} />
                        <InputGroup label="ZIP Code" callback={setZip} />
                    </div>
                    <div className="flex items-center mt-4">
                        <div className="grow">
                            <Link href="/home">
                                <a className="text-lg text-blue-500">
                                    ← Back
                                </a>
                            </Link>
                        </div>
                        <Link href={firstName && lastName && address && city && state && zip ?
                            "/purchase" : "/checkout"}>
                            <button
                                onClick={() => handleSubmit()}
                                className={"duration-150 text-lg px-10 py-3 rounded-lg "
                                + (firstName && lastName && address && city && state && zip ?
                                "bg-green-600 text-white" : "bg-gray-200 text-gray-400")}>
                                Place order
                            </button>
                        </Link>
                    </div>
                    <p className="italic text-red-500 text-right">
                        {!(firstName && lastName && address && city && state && zip) &&
                            "* Please fill all required fields"
                        }
                    </p>
                </div>
                <div className="w-full flex flex-col p-4 pl-8 divide-y divide-gray-300">
                    {account.email && account.items.map(i =>
                        <CartProduct item={i} className="text-lg h-24" />
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