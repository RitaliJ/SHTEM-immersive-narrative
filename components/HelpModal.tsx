import Image from "next/image";
import { ReactNode, useState } from "react";
import { AccountType } from "../util/types";
import CenteredModal from "./CenteredModal";

export default function HelpModal(props: {isOpen: boolean, setIsOpen: (value: boolean) => void, account: AccountType}) {
    const {isOpen, setIsOpen, account} = props;
    const [page, setPage] = useState(0);
    const [blur, setBlur] = useState("lg");
    
    const pages: ReactNode[] = [
        <p key={0}>
            Hello {account.firstName}! Thank you for signing up for our website;
            we{"'"}re so happy to have you join us! My name is Carty, your friendly
            personal shopping guide.
        </p>,
        <p key={1}>
            I{"'"}m here to show you around our store and help you with any questions that may pop up!
        </p>,
        <p key={2}>
            Welcome to the homepage of our store, which only contains the trendiest
            clothing and accessories!
        </p>,
        <p key={3}>
            Our store is very special as we don{"'"}t take payment through physical currency,
            but rather through our own personal currency of Heartbeats.
        </p>,
        <p key={4}>
            Luckily for you, you get to start off with 500 Heartbeats already! Look around the store,
            pick an item that interests you, and purchase it!
        </p>,
        <div key={5} className="flex gap-x-1 flex-wrap items-center h-min">
            {"That concludes my introduction. if you ever need any help, you can find me by pressing the".split(" ").map((w, i) =>
                <p key={i}>
                    {w}
                </p>
            )}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {"icon in the header.".split(" ").map((w, i) =>
                <p key={i}>
                    {w}
                </p>
            )}
        </div>,
    ];

    //function for advancing to next page and handling any other effects
    const advance = () => {
        if (page === 1) setBlur("");
        if (page === pages.length - 1) setIsOpen(false);
        else setPage(page + 1);
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={() => {}} blur={blur}>
            <div className="flex bg-white border-2 border-gray-200 shadow-lg rounded-lg">
                <div>
                    <Image
                        width="192"
                        height="192"
                        className="rounded-md"
                        src="/cart.jpg"
                        alt="Shopping assistant"
                    />
                </div>
                <div className="px-4 py-3 w-72 flex flex-col gap-2 items-center text-lg">
                    {pages[page]}
                    <button
                        onClick={() => advance()}
                        className="px-3 py-1 text-lg rounded-lg mt-2 shadow-lg duration-150 bg-blue-500 text-white"
                    >
                        {page === pages.length - 1 ? "Finish intro" : "Next"}
                    </button>
                </div>
            </div>
        </CenteredModal>
    )
}