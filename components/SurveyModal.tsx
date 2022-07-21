import { SurveyType } from "../util/types";
import CenteredModal from "./CenteredModal";

//component for modal with survey on it
export default function SurveyModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    survey: SurveyType,
}) {
    const {isOpen, setIsOpen, survey} = props;

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
                    {survey.content}
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
