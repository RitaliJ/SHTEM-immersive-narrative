import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import DropdownMenu from "../components/DropdownMenu";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import NiceLink from "../components/NiceLink";
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
    const [shipping, setShipping] = useState(5); //shipping cost
    const [cardNumber, setCardNumber] = useState("");
    const [securityPin, setSecurityPin] = useState("");
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", //states for dropdown menu
                    "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
                    "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
                    "NJ", "NM", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
                    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",];

    const [inBudget, setInBudget] = useState(true);

    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("checkout");
        if (x === null || x === "{}") { //if localstorage key doesn't exist, create it
            localStorage.setItem("checkout", JSON.stringify({millis: 0, clicks: 0}));
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
                const x = localStorage.getItem("checkout");
                if (x !== null) {
                    let x2 = JSON.parse(x);
                    x2.millis = millis + newMillis;
                    localStorage.setItem("checkout", JSON.stringify(x2));
                }
            }, 1000);
        }
    }, [newMillis]);

    //handle click event
    const handleClick = () => {
        const x = localStorage.getItem("checkout");
        if (x !== null) {
            let x2 = JSON.parse(x);
            x2.clicks += 1;
            localStorage.setItem("checkout", JSON.stringify(x2));
        }
    }

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
        setInBudget(account.balance > t + shipping);
    }, [account]);

    //check whether you can afford new shipping selection
    useEffect(() => {
        setInBudget(account.balance > total + shipping);
    }, [shipping]);

    //handle clicking on order button
    const handleSubmit = () => {
        if (firstName && lastName && address && city && state
            && zip.toString().length === 5 && cardNumber.toString().length === 16
            && securityPin.toString().length === 3) {
            const data = {
                email,
                firstName: account.firstName,
                billingFirstName: firstName,
                billingLastName: lastName,
                address: `${address}, ${city}, ${state} ${zip}`,
                address2,
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
            if (!acc.purchases[0]) {
                acc.purchases = acc.items;
            } else {
                acc.purchases = [...acc.purchases, ...acc.items];
            }
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
            
            <Header psaHtml="Order things here!" />

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
                        <DropdownMenu label="State" callback={setState} options={states} />
                        <InputGroup label="ZIP Code" value={zip} callback={setZip} onlyNumbers maxLength={5} />
                    </div>
                    <div className="flex gap-2">
                        <InputGroup label="Card Number" value={cardNumber} callback={setCardNumber} onlyNumbers maxLength={16} />
                        <InputGroup label="Security PIN" value={securityPin} callback={setSecurityPin} onlyNumbers maxLength={3} />
                    </div>
                    <div className="flex items-center mt-4">
                        <div className="grow">
                            <NiceLink href="/home" text="← Back" className="mb-6" />
                        </div>
                        <Link href={firstName && lastName && address && city && state && inBudget
                            && zip.toString().length === 5 && cardNumber.toString().length === 16
                            && securityPin.toString().length === 3 ?
                            "/purchase" : "/checkout"}>
                            <button
                                onClick={() => handleSubmit()}
                                className={"duration-150 text-lg px-10 py-3 rounded-lg "
                                    + (firstName && lastName && address && city && state && zip && inBudget
                                    && zip.toString().length === 5 && cardNumber.toString().length === 16
                                    && securityPin.toString().length === 3 ?
                                "bg-green-600 text-white" : "bg-gray-200 text-gray-400")}>
                                Place order
                            </button>
                        </Link>
                    </div>
                    <p className="italic text-red-500 text-right">
                        {inBudget 
                            ? (firstName && lastName && address && city && state && zip && cardNumber && securityPin
                            ? (zip.toString().length !== 5 || cardNumber.toString().length !== 16
                                || securityPin.toString().length !== 3
                                ? "* Invalid ZIP code, card number, or security PIN" : "")
                            : "* Please fill all required fields")
                            : "* Total amount exceeds account balance"
                        }
                    </p>
                </div>
                <div className="w-full flex flex-col p-4 pl-8 divide-y divide-gray-300">
                    {account.email && account.items.map(i =>
                        <CartProduct key={i.product.id} item={i} className="text-lg h-24" />
                    )}
                    <div className="flex flex-col gap-2 pt-4">
                        <div className="flex gap-2 px-2 text-lg text-gray-400">
                            <p className="grow">Subtotal</p>
                            <p>{total.toFixed(2)} Heartbeats</p>
                        </div>
                        <div className="flex gap-2 px-2 text-lg text-gray-400">
                            <p className="grow">Shipping</p>
                            <p>{shipping.toFixed(2)} Heartbeats</p>
                        </div>
                        <div className="flex gap-2 px-2 text-2xl">
                            <p className="grow">Total</p>
                            <p className='text-green-600'>{(total + shipping).toFixed(2)} Heartbeats</p>
                        </div>

                        <h3 className="text-2xl mt-12 mb-4">
                            Choose shipping
                        </h3>
                        <div className="flex gap-2 flex-wrap">
                            <button
                                onClick={() => setShipping(0)}
                                className={"duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-md "
                                    + (shipping === 0 ? "bg-blue-500 text-white" : "bg-blue-100 text-black")}
                            >
                                Free
                            </button>
                            <button
                                onClick={() => setShipping(5)}
                                className={"duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-md "
                                    + (shipping === 5 ? "bg-blue-500 text-white" : "bg-blue-100 text-black")}
                            >
                                <div className="flex gap-2">
                                    <p>Standard</p>
                                    <p>•</p>
                                    <p>5 Heartbeats</p>
                                </div>
                            </button>
                            <button
                                onClick={() => setShipping(15)}
                                className={"duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-md "
                                    + (shipping === 15 ? "bg-blue-500 text-white" : "bg-blue-100 text-black")}
                            >
                                <div className="flex gap-2">
                                    <p>Express</p>
                                    <p>•</p>
                                    <p>15 Heartbeats</p>
                                </div>
                            </button>
                            <button
                                onClick={() => setShipping(25)}
                                className={"duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-md "
                                    + (shipping === 25 ? "bg-blue-500 text-white" : "bg-blue-100 text-black")}
                            >
                                <div className="flex gap-2">
                                    <p>Overnight</p>
                                    <p>•</p>
                                    <p>25 Heartbeats</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}