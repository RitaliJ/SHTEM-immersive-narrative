import { useEffect, useState } from "react";
import { CaptchaType } from "../util/types";
import CenteredModal from "./CenteredModal";

//modal for a 3x3 image select captcha
export default function Captcha(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    captcha: CaptchaType,
    callback: () => void,
}) {
    const {isOpen, setIsOpen, captcha, callback} = props;
    const [selected, setSelected] = useState([false, false, false, false, false, false, false, false, false]);
    const [showCode, setShowCode] = useState(false);

    useEffect(() => { //reset selected useState when a new captcha loads
        setSelected([false, false, false, false, false, false, false, false, false]);
    }, [captcha]);

    //flip selection state at index i
    const flipAtIndex = (i: number) => {
        let s = selected.slice();
        s[i] = !s[i];
        setSelected(s);
    }

    //add data to localStorage and show gift code
    const handleSubmit = () => {
        localStorage.setItem(captcha.title, JSON.stringify(selected));
        setShowCode(true);
    }

    //handle pressing close button after viewing gift code
    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => { //reset to next survey after this one closes
            setShowCode(false);
            callback();
        }, 200);
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-8 items-center bg-white container p-8 rounded-lg w-max whitespace-nowrap">
                {showCode ? (
                    <div className="flex flex-col gap-3 items-center text-lg">
                        <p>Your gift code is:</p>
                        <p className="text-3xl font-bold">
                            {captcha.code}
                        </p>
                        <p>Redeem your tokens using the $ icon in the header!</p>
                        <p>This code will disappear when you press the button below.</p>
                        <button
                            onClick={() => handleClose()}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg"
                        >
                            I have redeemed my tokens
                        </button>
                    </div>
                ) : (
                    <>
                        <p className="text-2xl font-bold">
                            {captcha.title}
                        </p>
                        <div className="flex flex-col gap-6">
                            {captcha.imgSrcs && [0, 1, 2].map(i =>
                                <div key={i} className="flex gap-6">
                                    {[0, 1, 2].map(j =>
                                        <img
                                            key={j}
                                            onClick={() => flipAtIndex(3 * i + j)}
                                            className={"border-4 border-white ring-8 w-48 h-48 duration-150 hover:cursor-pointer "
                                                + (selected[3 * i + j] ? "ring-blue-500 hover:ring-blue-400" : "ring-gray-200 hover:ring-gray-300")}
                                            src={captcha.imgSrcs[3 * i + j]}
                                            alt={i.toString()}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => handleSubmit()}
                            className="px-4 py-2 whitespace-nowrap w-min rounded-lg bg-blue-500 text-white text-xl">
                            Submit
                        </button>
                    </>
                )}
            </div>
        </CenteredModal>
    )
}
