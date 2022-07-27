import CenteredModal from "./CenteredModal";

export default function PrefillModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    text: string,
    callback: () => void,
}) {
    const {isOpen, setIsOpen, text, callback} = props;

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen} zIndex="z-20">
            <div className="z-40 flex flex-col gap-4 items-center relative bg-white container px-8 py-6 rounded-lg w-96">
                <p className="text-xl">
                    {text}
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={() => {callback(); setIsOpen(false)}}
                        className="px-16 py-2 rounded-lg text-lg bg-green-600 text-white"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => {setIsOpen(false)}}
                        className="px-5 py-2 rounded-lg text-lg bg-red-500 text-white"
                    >
                        No
                    </button>
                </div>
            </div>
        </CenteredModal>
    )
}