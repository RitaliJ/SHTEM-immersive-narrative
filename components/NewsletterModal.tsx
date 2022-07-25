import { useEffect, useState } from "react";
import CenteredModal from "./CenteredModal";
import InputGroup from "./InputGroup";

export default function NewsletterModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    email: string,
}) {
    const {isOpen, setIsOpen, email} = props;
    const [value, setValue] = useState("");

    //prefill with email from account in localStorage
    useEffect(() => {
        if (isOpen && !value) {
            setValue(email);
        }
    }, [isOpen]);

    //ensure that email is valid
    const validateEmail = () => {
        var re = /\S+@\S+\.\S+/;
        return re.test(value);
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-3 items-center relative bg-white container px-8 py-6 rounded-lg w-min">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <p className="text-2xl font-bold whitespace-nowrap px-12">
                    Sign up for our newsletter
                </p>
                <InputGroup label="Email" value={value} callback={setValue} />
                <button
                    onClick={() => setIsOpen(false)}
                    className={"text-lg px-3 py-1 rounded-lg duration-150 "
                        + (validateEmail() ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}
                >
                    Sign up
                </button>
                {!validateEmail() &&
                    <p className="text-red-500 italic">
                        Invalid email address
                    </p>
                }
            </div>
        </CenteredModal>
    )
}