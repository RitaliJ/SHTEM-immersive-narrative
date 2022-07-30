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

    //start running timer on modal open
    useEffect(() => {
        if (isOpen) {
            setReward(0);
            setRunning(true);
            setCameraAllowed(false);
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
            <div className="relative flex flex-col gap-2 p-4 items-center bg-white w-min whitespace-nowrap rounded-lg oveflow-hidden">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl"
                >
                    ×
                </button>
                {cameraAllowed ?
                    <>
                        <img src = "https://cdn.discordapp.com/attachments/996489060275208295/1001981254520029215/proposed_ad_stare.jpg"></img>
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
                        <p>To ensure that you are staring at the logo, we need to access your camera.</p>
                        <button
                            onClick={() => setCameraAllowed(true)}
                            className="bg-white text-blue-600"
                        >
                            Allow
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-white text-blue-600"
                        >
                            Do Not Allow
                        </button>
                    </>
                }
            </div>
        </CenteredModal>
    )
}