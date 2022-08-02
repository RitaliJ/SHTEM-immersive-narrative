import { useEffect, useState } from "react";
import { CaptchaType } from "../util/types";
import CenteredModal from "./CenteredModal";
import Checkbox from "./Checkbox";
import GiftCodeContent from "./GiftCodeContent";

    //modal for a 3x3 image select captcha
    export default function Captcha(props: {
        isOpen: boolean,
        setIsOpen: (value: boolean) => void,
        captcha: CaptchaType,
        showCode: boolean,
        setShowCode: (value: boolean) => void,
        newCaptcha: () => void,
    }) {

    const {isOpen, setIsOpen, captcha, showCode, setShowCode, newCaptcha} = props;
    const [selected, setSelected] = useState([false, false, false, false, false, false, false, false, false]);
    const [canSubmit, setCanSubmit] = useState(false);
    const [verified, setVerified] = useState(false);
    const [buttonOn, setButtonOn] = useState(false); //"I am human" button
    const [submit, setSubmit] = useState(false);

    useEffect(() => { //reset selected useState when a new captcha loads
        setSelected([false, false, false, false, false, false, false, false, false]);
        setShowCode(false);
        setSubmit(false);
    }, [captcha]);

    useEffect(() => { //reset selected useState when a new captcha loads
        if (selected.filter(Boolean).length > 0) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }, [selected]);

    //flip selection state at index i
    const flipAtIndex = (i: number) => {
        let s = selected.slice();
        s[i] = !s[i];
        setSelected(s);
    }

    //add data to localStorage and show gift code
    const handleSubmit = () => {
        if (!captcha.hver) {
            setShowCode(true);
            setVerified(false);
        }
        if (captcha.hver && submit) {
            newCaptcha();
        }
        localStorage.setItem(captcha.title, JSON.stringify(selected));
        setSubmit(true);
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative flex flex-col gap-8 items-center bg-white container p-8 rounded-lg w-max whitespace-nowrap">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                {verified || submit ? <>
                    {showCode ? (
                        <GiftCodeContent code={captcha.code} />
                    ) : (
                        <>
                            <p className="text-2xl font-bold mt-4">
                                {captcha.title}
                            </p>
                            <div className="flex flex-col gap-6">
                                {captcha.imgSrcs && [0, 1, 2].map(i =>
                                    <div key={i} className="flex gap-6">
                                        {[0, 1, 2].map(j =>
                                            <img
                                                key={j}
                                                onClick={() => flipAtIndex(3 * i + j)}
                                                className={"border-4 border-white ring-8 w-[16vh] h-[16vh] duration-150 hover:cursor-pointer "
                                                    + (selected[3 * i + j] ? "ring-blue-500 hover:ring-blue-400" : "ring-gray-200 hover:ring-gray-300")}
                                                src={captcha.imgSrcs[3 * i + j]}
                                                alt={i.toString()}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    if (canSubmit) handleSubmit();
                                }}
                                className={"px-4 py-2 whitespace-nowrap w-min rounded-lg text-xl duration-150 "
                                    + (canSubmit ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}
                            >
                                {captcha.hver && submit ? "Try again" : "Submit"}
                            </button>
                            {!canSubmit &&
                                <p className="text-red-500 italic text-lg">
                                    You must select at least one option
                                </p>
                            }
                            {captcha.hver && submit &&
                                <p className="text-red-500 italic text-lg">
                                    It appears you are not human! Please try again.
                                </p>
                            }
                        </>
                    )}
                </> : <>
                    <p className="text-xl px-8 mt-4">
                        We need to verify that you are human.
                    </p>
                    <Checkbox text="I am human" on={buttonOn} setOn={setButtonOn} />
                    <button
                        onClick={() => {if (buttonOn) {setVerified(true); setButtonOn(false)}}}
                        className={"text-lg px-3 py-1 rounded-lg duration-150 "
                            + (buttonOn ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}
                    >
                        Continue
                    </button>
                </>}
            </div>
        </CenteredModal>
    )
}
