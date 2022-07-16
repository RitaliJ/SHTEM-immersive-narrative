import Link from "next/link";
import { useEffect, useState } from "react";
import { AccountType } from "../util/types";

//header component
export default function Header() {
    const [account, setAccount] = useState({} as AccountType);

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

    return (
        <div className="bg-white flex items-center gap-6 sticky top-0 py-2 px-6 drop-shadow bg-opacity-50 backdrop-blur-lg">
            <Link href="/home">
                <button className="text-2xl font-bold">
                    Legendary Site
                </button>
            </Link>
            <span className="grow"></span>
            <span className="text-xl text-green-600 font-bold">
                {account.balance} V Bucks
            </span>
            <span className="text-xl">
                Logged in as {account.firstName}
            </span>
        </div>
    )
}
