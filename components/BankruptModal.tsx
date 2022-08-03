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
                        src="/cart.jpeg"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
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