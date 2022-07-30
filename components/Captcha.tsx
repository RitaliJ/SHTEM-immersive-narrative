// import { constants } from "buffer";
import { useEffect, useState } from "react";
import { CaptchaType } from "../util/types";
import CenteredModal from "./CenteredModal";
import GiftCodeContent from "./GiftCodeContent";
const constants = require('../util/constants');

//modal for a 3x3 image select captcha
export default function Captcha(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    captcha: CaptchaType,
    showCode: boolean,
    setShowCode: (value: boolean) => void,
}) {
    const {isOpen, setIsOpen, captcha, showCode, setShowCode} = props;
    const [selected, setSelected] = useState([false, false, false, false, false, false, false, false, false]);
    const [captchaC, setCaptcha] = useState(captcha)

    useEffect(() => { //reset selected useState when a new captcha loads
        setSelected([false, false, false, false, false, false, false, false, false]);
    }, [captchaC]);

    //flip selection state at index i
    const flipAtIndex = (i: number) => {
        let s = selected.slice();
        s[i] = !s[i];
        setSelected(s);
    }

    //add data to localStorage and show gift code
    const handleSubmit = () => {
        localStorage.setItem(captchaC.title, JSON.stringify(selected));
        if(captchaC.humanityCaptcha){
            console.log('Wrong!');

            const acc = localStorage.getItem("shtemAccount");
            if (acc !== "undefined" && acc !== null) {
                const acc2 = JSON.parse(acc);
                let foundCaptcha = false;
                constants.captchas.forEach((c: CaptchaType) => {
                    if (!acc2.usedCodes.includes(c.code) && !foundCaptcha && c.humanityCaptcha) {
                        setCaptcha(c);
                        foundCaptcha = true;
                    }
                });
                if (!foundCaptcha)  setShowCode(true);
            }
            
        }else{
            setShowCode(true);
        }
    }
    

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative flex flex-col gap-8 items-center bg-white container p-8 rounded-lg w-max whitespace-nowrap">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                {showCode ? (
                    <GiftCodeContent code={captchaC.code} />
                ) : (
                    <>
                        <p className="text-2xl font-bold">
                            {captchaC.title}
                        </p>
                        <div className="flex flex-col gap-6">
                            {captchaC.imgSrcs && [0, 1, 2].map(i =>
                                <div key={i} className="flex gap-6">
                                    {[0, 1, 2].map(j =>
                                        <img
                                            key={j}
                                            onClick={() => flipAtIndex(3 * i + j)}
                                            className={"border-4 border-white ring-8 w-[16vh] h-[16vh] duration-150 hover:cursor-pointer "
                                                + (selected[3 * i + j] ? "ring-blue-500 hover:ring-blue-400" : "ring-gray-200 hover:ring-gray-300")}
                                            src={captchaC.imgSrcs[3 * i + j]}
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
