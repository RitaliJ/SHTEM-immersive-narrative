import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { AccountType } from "../util/types";
import CenteredModal from "./CenteredModal";
import DropdownMenu from "./DropdownMenu";

export default function HelpModal(props: {isOpen: boolean, setIsOpen: (value: boolean) => void, account: AccountType}) {
    const {isOpen, setIsOpen, account} = props;
    const [page, setPage] = useState(0);
    const [canContinue, setCanContinue] = useState(true);
    const [blur, setBlur] = useState("lg");
    const [target, setTarget] = useState("");
    const targetItems = ["Accordion Outfit", "Avocado", "Phoenix"];
    
    const pages: ReactNode[] = [
        <p key={0}>
            Hello {account.firstName}! Thank you for signing up for our website;
            we’re so happy to have you join us! My name is Carty, your friendly
            personal shopping guide. I’m here to show you around our store and
            help you with any questions that may pop up!
        </p>,
        <p key={1}>
            Welcome to the homepage of our store, which only contains the trendiest
            clothing and accessories!
        </p>,
        <div key={2}>
            Our store is very special as we don’t take payment through physical currency,
            but rather through our own personal currency of tokens. Luckily for you, you
            get to start off with 100 tokens already! Is there something in particular
            you’re looking to buy?
            <div className="w-full">
                <DropdownMenu label="Choose an item" callback={x => setTarget(x)} options={targetItems} />
            </div>
        </div>,
        <div key={3} className="flex gap-1 flex-wrap items-center">
            <p>That concludes my introduction. if you ever need any help, you can find me by pressing the</p>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>icon in the header.</p>
        </div>,
    ];

    //allow continue only if target product is chosen
    useEffect(() => {
        if (page === 2) {
            if (target) setCanContinue(true);
            else setCanContinue(false);
        }
    }, [target]);

    //function for advancing to next page and handling any other effects
    const advance = () => {
        if (canContinue) {
            if (page === 0) setBlur("");
            if (page === 1) setCanContinue(false);
            if (page === pages.length - 1) setIsOpen(false);
            else setPage(page + 1);
        }
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={() => {}} blur={blur}>
            <div className="flex bg-white border-2 border-gray-200 shadow-lg rounded-lg">
                <img
                    className="h-72 rounded-md"
                    src="https://steamuserimages-a.akamaihd.net/ugc/942844394047374257/FBE1C6921B8A98FEDE1309EEB49C3137BC3D88EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                    alt="Shopping assistant"
                />
                <div className="px-4 py-3 w-72 flex flex-col gap-2 items-center text-lg">
                    {pages[page]}
                    <button
                        onClick={() => advance()}
                        className={"px-3 py-1 text-lg rounded-lg mt-2 shadow-lg duration-150 "
                            + (canContinue ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}
                    >
                        {page === pages.length - 1 ? "Finish intro" : "Next"}
                    </button>
                    {!canContinue &&
                        <p className="text-red-500 italic">
                            * Please fill out all required fields
                        </p>
                    }
                </div>
            </div>
        </CenteredModal>
    )
}