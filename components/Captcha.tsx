import { useEffect, useState } from "react";
import { CaptchaType } from "../util/types";
import CenteredModal from "./CenteredModal";
import GiftCodeContent from "./GiftCodeContent";
const constants = require('../util/constants')


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
    

    useEffect(() => { //reset selected useState when a new captcha loads
        setSelected([false, false, false, false, false, false, false, false, false]);
        setCounter(0);
        setShowCode(false);
    }, [captcha]);

    useEffect(() => { //reset selected useState when a new captcha loads
        if(selected.filter(Boolean).length >= 3){
            setCanSubmit(true);
        }else{
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
        if(!canSubmit){
            return "Please select 3 or more choices."
        }
        if (submit) {

            if (captcha.hver && hverSubmitCounter<6) {
                var x = "Sorry! It appears you are not human enough to have heartbeats. Please try again.";
                return(x)
            } else {
                setShowCode(true);
                var x = "You are human enough to pass this!";
                
                return (x)
            }
            
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
                        
                        <div className="text-lg text-red-800 italic">{answer()}</div>
                        

                    </>
                )}
            </div>
        </CenteredModal>
    )
}
// Footer
