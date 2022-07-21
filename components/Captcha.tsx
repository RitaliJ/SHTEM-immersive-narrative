import { useState } from "react";
import CenteredModal from "./CenteredModal";

export default function Captcha(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    text: string,
    imgSrcs: string[],
}) {
    const {isOpen, setIsOpen, text, imgSrcs} = props;
    const [selected, setSelected] = useState([false, false, false, false, false, false, false, false, false]);

    const flipAtIndex = (i: number) => {
        let s = selected.slice();
        s[i] = !s[i];
        setSelected(s);
    }

    const handleSubmit = () => {

    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-8 items-center bg-white container p-8 rounded-lg w-max whitespace-nowrap">
                <p className="text-2xl font-bold">
                    {text}
                </p>
                <div className="flex flex-col gap-6">
                    {[0, 1, 2].map(i =>
                        <div className="flex gap-6">
                            {[0, 1, 2].map(j =>
                                <img
                                    onClick={() => flipAtIndex(3 * i + j)}
                                    className={"border-4 border-white ring-8 w-48 h-48 duration-150 hover:cursor-pointer "
                                        + (selected[3 * i + j] ? "ring-blue-500 hover:ring-blue-400" : "ring-gray-200 hover:ring-gray-300")}
                                    src={imgSrcs[3 * i + j]}
                                    alt={i.toString()}
                                />
                            )}
                        </div>
                    )}
                </div>
                <button
                    onClick={() => {handleSubmit(); setIsOpen(false)}}
                    className="px-4 py-2 whitespace-nowrap w-min rounded-lg bg-blue-500 text-white text-xl">
                    Submit
                </button>
            </div>
        </CenteredModal>
    )
}
