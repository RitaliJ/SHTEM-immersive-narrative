import CenteredModal from "./CenteredModal";

export default function VideoAd(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}) {
    const {isOpen, setIsOpen} = props;

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-3 items-center relative bg-white container px-8 py-6 rounded-lg w-min">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
            </div>
        </CenteredModal>
    )
}