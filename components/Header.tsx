import { AccountType } from "../util/types";

//header component
export default function Header(props: {account: AccountType}) {
    const {account} = props;

    return (
        <div className="bg-white flex gap-1 sticky top-0 py-2 px-6 drop-shadow bg-opacity-50 backdrop-blur-lg">
            <span className="grow text-2xl font-bold">
                Legendary Site
            </span>
            <span className="text-xl">
                Logged in as {account.firstName}
            </span>
        </div>
    )
}
