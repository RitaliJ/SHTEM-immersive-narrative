import CenteredModal from "./CenteredModal";

//ad that pops up in a modal
export default function PopupAd(props: {isOpen: boolean, setIsOpen: (value: boolean) => void}) {
    const {isOpen, setIsOpen} = props;

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative bg-white container rounded-lg h-96">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <p className="text-5xl font-bold uppercase p-4">
                    This is an ad
                </p>
            </div>
        </CenteredModal>
    )
}