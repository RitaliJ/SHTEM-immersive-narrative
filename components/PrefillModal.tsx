import CenteredModal from "./CenteredModal";

export default function PrefillModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    callback: () => void,
}) {
    const {isOpen, setIsOpen, callback} = props;

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-3 items-center relative bg-white container px-8 py-6 rounded-lg w-96">
                <p className="text-xl">
                    It looks like we already have your email and name. Would you like us to prefill
                    this information?
                </p>
                <button
                    onClick={() => {callback(); setIsOpen(false)}}
                    className="px-3 py-1 rounded-lg text-lg bg-green-600 text-white"
                >
                    Yes
                </button>
                <button
                    onClick={() => {callback(); setIsOpen(false)}}
                    className="px-3 py-1 rounded-lg text-lg bg-red-500 text-white"
                >
                    No
                </button>
            </div>
        </CenteredModal>
    )
}