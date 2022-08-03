import CenteredModal from "./CenteredModal";
import YouTube from "react-youtube";

export default function VideoAd(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    id: string,
}) {
    const {isOpen, setIsOpen, id} = props;

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-3 items-center relative bg-white container overflow-hidden rounded-lg w-min">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl text-white">
                    ×
                </button>
                <div className="pointer-events-none">
                    <YouTube
                        videoId={id}
                        opts={{
                            height: "360",
                            width: "640",
                            playerVars: { //autostart, hide buttons/controls, and loop
                                autoplay: 1,
                                controls: 0,
                                disablekb: 1,
                                fs: 0,
                                loop: 1,
                                playlist: id,
                                cc_load_policy: 1,
                            },
                        }}
                    />
                </div>
            </div>
        </CenteredModal>
    )
}