import { useState } from "react";
import { SurveyType } from "../util/types";
import CenteredModal from "./CenteredModal";
import InputGroup from "./InputGroup";

//component for modal with survey on it
export default function SurveyModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    survey: SurveyType,
}) {
    const {isOpen, setIsOpen, survey} = props;
    const [data, setData] = useState({});

    const setValue = (key: string, value: string) => {
        let d = structuredClone(data);
        d = {...d, [key]: value}; //add key-0value pair
        setData(d);
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative bg-white container px-8 py-6 rounded-lg w-96">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <div className="flex flex-col gap-3 items-center text-lg">
                    <h1 className="text-2xl font-bold">
                        {survey.title}
                    </h1>
                    <>
                        {survey.questions.map(q => {
                            if ("options" in q) { //multiple choice
                                
                            } else { //short answer
                                return (
                                    <InputGroup label={q.label} callback={(x) => setValue(q.label, x)} />
                                )
                            }
                        })}
                    </>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-500 text-white px-4 py-2 whitespace-nowrap w-min rounded-lg">
                        Submit
                    </button>
                </div>
            </div>
        </CenteredModal>
    )
}
