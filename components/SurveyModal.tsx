import { useEffect, useState } from "react";
import { SurveyDataType, SurveyType } from "../util/types";
import CenteredModal from "./CenteredModal";
import GiftCodeContent from "./GiftCodeContent";
import InputGroup from "./InputGroup";
import MultipleChoice from "./MultipleChoice";

//component for modal with survey on it
export default function SurveyModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    survey: SurveyType,
    showCode: boolean,
    setShowCode: (value: boolean) => void,
}) {
    const {isOpen, setIsOpen, survey, showCode, setShowCode} = props;
    const [data, setData] = useState({} as SurveyDataType);
    const [page, setPage] = useState(0);
    const [started, setStarted] = useState(false);
    const [showFinal, setShowFinal] = useState(false); //show final text

    //helper function for setting a particular key-value pair in data object
    const setValue = (key: string, value: string) => {
        let d = {};
        Object.assign(d, data);
        d = {...d, [key]: value}; //add key-0value pair
        setData(d);
    }

    //function for checking if all questions on this page have a response
    const checkValid = () => {
        let bool = true;
        if (!survey.questions) return false;
        survey.questions[page].forEach((q, i) => {
            if (!(q.label in data && data[q.label]) && !(q.conditional && data[survey.questions[page][i - 1].label] !== "Yes")) {
                bool = false;
                return;
            }
        });
        return bool;
    }

    //add data to localStorage and show gift code
    const handleSubmit = () => {
        if (checkValid()) {
            if (survey.finalText && showFinal) {
                localStorage.setItem(survey.title, JSON.stringify(data));
                setShowCode(true);
                setPage(0);
                setStarted(false);
            }
            if (page === survey.questions.length - 1) {
                if (survey.finalText) {
                    setShowFinal(true);
                } else {
                    localStorage.setItem(survey.title, JSON.stringify(data));
                    setShowCode(true);
                    setPage(0);
                    setStarted(false);
                }
            } else {
                setPage(page + 1);
            }
        }
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative bg-white container px-8 py-6 rounded-lg w-96 max-h-[80%] overflow-y-auto scrollbar">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                {!started && !showCode ? (
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-xl pr-6">
                            To earn more heartbeats, please fill out this survey from one of our partners.
                        </p>
                        <button
                            onClick={() => setStarted(true)}
                            className="bg-blue-500 text-white px-3 py-1 text-xl rounded-lg"
                        >
                            Start
                        </button>
                    </div>
                ) : (
                    showCode ? (
                        <GiftCodeContent code={survey.code} />
                    ) : (
                        <div className="flex flex-col gap-3 items-center text-lg">
                            <h1 className="text-2xl font-bold">
                                {survey.title}
                            </h1>
                            {showFinal && survey.finalText ? (
                                <p>
                                    {survey.finalText}
                                </p>
                            ) : survey.questions && survey.questions[page].map((q, i) => {
                                if (q.conditional && data[survey.questions[page][i - 1].label] !== "Yes") {
                                    return;
                                } else if ("options" in q) { //multiple choice
                                    return (
                                        <MultipleChoice
                                            key={q.label}
                                            label={q.label}
                                            selection={data[q.label]}
                                            callback={(x) => setValue(q.label, x)}
                                            options={q.options}
                                        />
                                    )
                                } else { //short answer
                                    return (
                                        <InputGroup
                                            key={q.label}
                                            label={q.label}
                                            value={data[q.label] ?? ""}
                                            callback={(x) => setValue(q.label, x)}
                                        />
                                    )
                                }
                            })}
                            <button
                                onClick={() => handleSubmit()}
                                className={"px-4 py-2 whitespace-nowrap w-min rounded-lg duration-150 "
                                    + (checkValid() ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}>
                                {survey.questions && page === survey.questions.length - 1 ? "Submit" : "Next"}
                            </button>
                            <p className="italic text-red-500">
                                {!checkValid() &&
                                    "* Please fill all required fields"
                                }
                            </p>
                        </div>
                    )
                )}
            </div>
        </CenteredModal>
    )
}
