import { useEffect, useState } from "react";
import CenteredModal from "./CenteredModal";
import InputGroup from "./InputGroup";
import PrefillModal from "./PrefillModal";

export default function NewsletterModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    email: string,
    callback: (value: number) => void,
}) {
    const {isOpen, setIsOpen, email, callback} = props;
    const [value, setValue] = useState(""); //useState for value of input element
    const [prefillOpen, setPrefillOpen] = useState(false); //useState for prefill modal component

    //when modal is openend, open prefill modal on top of this one
    useEffect(() => {
        if (isOpen) {
            setPrefillOpen(true);
        }
    }, [isOpen]);

    //ensure that email is valid
    const validateEmail = () => {
        var re = /\S+@\S+\.\S+/;
        return re.test(value);
    }

    //handle submit
    const handleSubmit = () => {
        setIsOpen(false);
        callback(1);
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
                    onClick={() => handleSubmit()}
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
                <PrefillModal
                    isOpen={prefillOpen}
                    setIsOpen={setPrefillOpen}
                    text="It looks like we already have your email. Would you like us to prefill
                        it for you?"
                    callback={() => setValue(email)}
                />
            </div>
        </CenteredModal>
    )
}