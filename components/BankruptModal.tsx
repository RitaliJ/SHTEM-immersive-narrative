import Image from "next/image";
import CenteredModal from "./CenteredModal";

export default function BankruptModal(props: {isOpen: boolean, setIsOpen: (value: boolean) => void}) {
    const {isOpen, setIsOpen} = props;

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen} zIndex="z-20">
            <div className="flex bg-white border-2 border-gray-200 shadow-lg rounded-lg">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <div>
                    <Image
                        width="192"
                        height="192"
                        className="rounded-md"
                        src="/cart.jpg"
                        alt="Shopping assistant"
                    />
                </div>
                <div className="px-4 py-3 pt-12 w-72 flex flex-wrap gap-x-1 items-center text-lg h-min">
                    {"It looks like you can't afford this purchase! To earn more tokens, press the".split(" ").map((w, i) =>
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
                </div>
            </div>
        </CenteredModal>
    )
}