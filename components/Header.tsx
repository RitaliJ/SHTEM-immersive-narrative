import Link from "next/link";
import { AccountType } from "../util/types";

//header component
export default function Header(props: {account: AccountType}) {
    const {account} = props;

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
