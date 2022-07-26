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
        <p>
            Hello {account.firstName}! Thank you for signing up for our website;
            we’re so happy to have you join us! My name is Carty, your friendly
            personal shopping guide. I’m here to show you around our store and
            help you with any questions that may pop up!
        </p>,
        <p>
            Welcome to the homepage of our store, which only contains the trendiest
            clothing and accessories!
        </p>,
        <>
            Our store is very special as we don’t take payment through physical currency,
            but rather through our own personal currency of tokens. Luckily for you, you
            get to start off with 100 tokens already! Is there something in particular
            you’re looking to buy?
            <div className="w-full">
                <DropdownMenu label="Choose an item" callback={x => setTarget(x)} options={targetItems} />
            </div>
        </>,
        <>
            <div className="flex gap-1 flex-wrap items-center">
                <p>That concludes my introduction. if you ever need any help, you can find me by pressing the</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p>icon in the header.</p>
            </div>
        </>,
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
                    src="https://cdn.vox-cdn.com/thumbor/aDkDyg6qmsgdI-fxAZkyXVcDMOY=/0x0:712x423/1400x1400/filters:focal(385x120:497x232):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/55531033/Screen_Shot_2017_06_30_at_3.17.00_PM.0.png"
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