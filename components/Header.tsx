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
        <div className="bg-white flex items-center gap-4 sticky top-0 px-6 drop-shadow bg-opacity-50 backdrop-blur-lg">
            <Link href="/home">
                <button className="text-2xl font-bold">
                    Legendary Site
                </button>
            </Link>
            <span className="grow"></span>
            <span className="text-xl text-green-600 font-bold">
                {account.balance} V Bucks
            </span>
            <Link href="/cart">
                <button className="flex items-center hover:bg-gray-200 duration-150 p-2 rounded-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                    </svg>
                    {account.items && account.items[0] &&
                        <p className="bg-red-500 text-white rounded-full px-2">
                            {account.items.length}
                        </p>
                    }
                </button>
            </Link>
            <span className="text-xl">
                Logged in as {account.firstName}
            </span>
        </div>
    )
}
