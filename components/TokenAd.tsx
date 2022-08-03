import { useEffect, useState } from "react";
import CenteredModal from "./CenteredModal";

export default function TokenAd(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    callback: (value: number) => void,
}) {
    const {isOpen, setIsOpen, callback} = props;
    const [reward, setReward] = useState(0);
    const [running, setRunning] = useState(false);
    const [heartrate, setHeartrate] = useState(70);
    const [cameraAllowed, setCameraAllowed] = useState(false);
    const [nextCamera, setNextCamera] = useState(false);

    //start running timer on modal open
    useEffect(() => {
        if (isOpen) {
            setReward(0);
            setCameraAllowed(false);
            setNextCamera(false);
        } else {
            setRunning(false);
            callback(reward);
        }
    }, [isOpen]);


    //once start time is set, begin incrementing reward
    useEffect(() => {
        if (running) {
            setTimeout(() => {
                setReward(reward + 1);
            }, 60000 / heartrate);
        }
    }, [running, reward]);

    //update heartrate roughly once every 2 seconds
    useEffect(() => {
        setTimeout(() => {
            let h = heartrate;
            h += Math.floor(Math.random() * 11);
            h -= 4; //slightly increase heartrate over time on average
            if (h > 120) h === heartrate ? h = 119 : h = 120;
            if (h < 50) h === heartrate ? h = 51 : h = 50;
            setHeartrate(h);
        }, 1000 + Math.floor(Math.random() * 2001));
    }, [heartrate]);

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={"relative flex flex-col gap-2 p-4 items-center bg-white w-min rounded-lg whitespace-nowrap oveflow-hidden "
                    + (cameraAllowed ? "w-min" : "w-72")}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl"
                >
                    ×
                </button>
                {cameraAllowed ? <>
                    <div className="mx-8">
                        <img className="max-h-[60vh]" src="https://cdn.discordapp.com/attachments/996489060275208295/1003691578558267524/B0D3893A-CEC3-4463-A2C6-38531F18C1B4.png" />
                    </div>
                    <div className="flex gap-1 text-2xl">
                        <p>Heartrate:</p>
                        <p className="font-bold">
                            {heartrate} BPM
                        </p>
                    </div>
                    <p className="text-xl">
                        Current reward: {reward} Heartbeats
                    </p>
                    <p className="italic">
                        You can close this popup at any time to receive your Heartbeats
                    </p>
                </> : <>
                    {nextCamera ? <>
                        <p className="text-xl break-words whitespace-normal pt-8 pb-4 text-center">
                            Now turn on your camera to start earning!
                        </p>
                        <button
                            onClick={() => setCameraAllowed(true)}
                            className="bg-blue-500 text-white px-3 py-1 text-xl rounded-lg"
                        >
                            Allow Camera Access
                        </button>
                    </> : <>
                        <p className="text-xl break-words whitespace-normal pt-8 pb-4 text-center">
                            Get in a comfy position and make sure your face is right in front of the camera.
                            You need to stare directly at the ad; try not to blink! The more heartbeats you
                            give, the more heartbeats you will receive. What an easy way to get heartbeats!
                        </p>
                        <button
                            onClick={() => {setNextCamera(true); setRunning(true);}}
                            className="bg-blue-500 text-white rounded-lg px-12 py-3"
                        >
                            Next
                        </button>
                    </>}
                </>}
            </div>
        </CenteredModal>
    )
}