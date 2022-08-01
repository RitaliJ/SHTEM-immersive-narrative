import { useEffect, useState } from "react";
import { CaptchaType } from "../util/types";
import CenteredModal from "./CenteredModal";
import GiftCodeContent from "./GiftCodeContent";

    //modal for a 3x3 image select captcha
    export default function Captcha(props: {
        isOpen: boolean,
        setIsOpen: (value: boolean) => void,
        captcha: CaptchaType,
        showCode: boolean,
        setShowCode: (value: boolean) => void
    }) {

    const {isOpen, setIsOpen, captcha, showCode, setShowCode} = props;
    const [selected, setSelected] = useState([false, false, false, false, false, false, false, false, false]);
    const [submit, setSubmit] = useState(false);
    const [hverSubmitCounter, setCounter] = useState(0);
    const [canSubmit, setCanSubmit] = useState(false);
    const [verified, setVerified] = useState(false);
    const [buttonOn, setButtonOn] = useState(false); //"I am human" button
    const [verTries, setVerTries] = useState(0);

    useEffect(() => { //reset selected useState when a new captcha loads
        setSelected([false, false, false, false, false, false, false, false, false]);
        setCounter(0);
        setShowCode(false);
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
        localStorage.setItem(captcha.title, JSON.stringify(selected));
        setCounter(hverSubmitCounter+1)
        setSubmit(true)
    }

    const answer = () => {
        if (!canSubmit) {
            return "Please select 3 or more choices."
        }
        if (submit) {
            if (captcha.hver && hverSubmitCounter < 6) {
                return "Sorry! It appears you are not human enough to have heartbeats. Please try again.";
            } else { 
                setShowCode(true);
                return "You are human enough to pass this!";
            }
        } 
    }

    const validate = () => {
        if (verTries < 3) {
            setVerTries(verTries + 1);
            setButtonOn(false);
        } else {
            setVerified(true);
        }
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative flex flex-col gap-8 items-center bg-white container p-8 rounded-lg w-max whitespace-nowrap">
                <button
                    onClick={() => { setIsOpen(false); setSubmit(false);}}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                {verified ? <>
                    {showCode ? (
                        <GiftCodeContent code={captcha.code} />
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
                                onClick={() => {if (canSubmit) handleSubmit()}}
                                className={"px-4 py-2 whitespace-nowrap w-min rounded-lg text-xl" +
                                (canSubmit ? " bg-blue-500 text-white" : " bg-gray-200 text-gray-400")} >
                                Submit
                            </button>
                            <p className="text-lg text-red-500 italic">
                                {answer()}
                            </p>
                        </>
                    )}
                </> : <>
                    <p className="text-xl px-8">
                        We need to verify that you are human.
                    </p>
                    <div className="flex gap-4 items-center">
                        <button
                            onClick={() => setButtonOn(!buttonOn)}
                            className={"w-8 h-8 ring-2 ring-black border-4 border-white duration-150 "
                                + (buttonOn ? "bg-blue-500" : "bg-white")}
                        />
                        <p className="text-lg font-bold">
                            I am human
                        </p>
                    </div>
                    <button
                        onClick={() => validate()}
                        className="bg-blue-500 text-white text-lg px-3 py-1 rounded-lg"
                    >
                        Continue
                    </button>
                    {!verified && verTries > 0 &&
                        <p className="text-red-500 italic text-lg">
                            It appears you aren't human! Please try again.
                        </p>
                    }
                </>}
            </div>
        </CenteredModal>
    )
}
