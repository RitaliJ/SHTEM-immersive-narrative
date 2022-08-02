import CenteredModal from "./CenteredModal";

export default function CookiesModal(props: {isOpen: boolean, setIsOpen: (value: boolean) => void}) {
    const {isOpen, setIsOpen} = props;

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-3 items-center relative bg-white container px-8 py-6 rounded-lg w-96">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <p className="pr-4">
                    This website uses cookies to personalize content and provide a better experience.
                    By clicking accept, you agree to our cookie policy.
                </p>
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-green-600 text-white px-3 py-1 text-xl rounded-lg"
                >
                    Accept Cookies
                </button>
            </div>
        </CenteredModal>
    )
}