import Link from "next/link";
import { useEffect, useState } from "react";
import { AccountType } from "../util/types";
import CartModal from "./CartModal";
import { useRouter } from 'next/router'
import HelpPopover from "./HelpPopover";

//header component
export default function Header(props: {addedToCart?: boolean, callback?: (value: boolean) => void, personalShopper?: string}) {
    const {addedToCart, callback} = props;
    const [account, setAccount] = useState({} as AccountType);
    const [isOpen, setIsOpen] = useState(false); //useState for cart modal opening/closing
    const router = useRouter();

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

    //open modal when addedToCart becomes true
    useEffect(() => {
        if (addedToCart) {
            setIsOpen(true);
            const acc = localStorage.getItem("shtemAccount");
            if (acc !== "undefined" && acc !== null) {
                setAccount(JSON.parse(acc));
            }
        }
    }, [addedToCart]);

    //close modal
    useEffect(() => {
        if (!isOpen && callback) {
            callback(false);
        }
    }, [isOpen]);

    const refreshAccount = () => {
        const acc = localStorage.getItem("shtemAccount");
        if (acc !== "undefined" && acc !== null) {
            setAccount(JSON.parse(acc));
        }
    }

    const PSA = props.personalShopper ? props.personalShopper : "This is your P.S.A";

    return (
        <div className="flex items-center gap-4 sticky top-0 px-6 duration-150
            bg-slate-200 shadow-md hover:shadow-lg bg-opacity-50 backdrop-blur-lg">
            <Link href="/home">
                <button className="text-xl font-bold">
                    Legendary Site
                </button>
            </Link>
            <span className="grow"></span>
            <span className="text-lg text-green-600 font-bold">
                {account.balance && account.balance.toFixed(2)} Tokens
            </span>
            <button
                onClick={() => {router.pathname !== "/checkout" && setIsOpen(true)}}
                className="flex items-center hover:bg-gray-200 duration-150 p-2 rounded-lg"
            >
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                </svg>
                {router.pathname !== "/checkout" && account.items && account.items[0] &&
                    <p className="bg-red-500 font-bold text-white rounded-full px-2">
                        {account.items.length}
                    </p>
                }
            </button>
            <span className="text-lg">
                Logged in as {account.firstName}
            </span>
            <HelpPopover instructions={PSA} />
            <CartModal isOpen={isOpen} setIsOpen={setIsOpen} callback={refreshAccount} />
        </div>
    )
}
