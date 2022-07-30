import { useState } from "react";

export default function GiftCodeContent(props: {code: string}) {
    const {code} = props;
    const [copied, setCopied] = useState(false);

    return (
        <div className="flex flex-col gap-3 items-center text-lg">
            <p>Your gift code is:</p>
            <p className="text-3xl font-bold">
                {code}
            </p>
            <button
                onClick={() => {navigator.clipboard.writeText(code); setCopied(true)}}
                className={"px-3 py-1 rounded-lg text-lg duration-150 "
                    + (copied ? "bg-gray-200 text-gray-400" : "bg-blue-500 text-white")}
            >
                {copied ? "Copied!" : "Copy to clipboard"}
            </button>
            <div className="flex gap-1 flex-wrap items-center">
                <p>Redeem your heartbeats using the</p>

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>icon in the header.</p>
            </div>
            <p>Come back after redeeming your heartbeats to complete another survey!</p>
        </div>
    )
}