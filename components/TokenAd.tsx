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
            <div className="relative flex flex-col gap-2 p-4 items-center bg-white w-min rounded-lg whitespace-nowrap oveflow-hidden">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl"
                >
                    ×
                </button>
                {cameraAllowed ? <>
                    <img src = "https://cdn.discordapp.com/attachments/996489060275208295/1003691578558267524/B0D3893A-CEC3-4463-A2C6-38531F18C1B4.png"></img>
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
                    <p className="text-2xl font-bold px-12 whitespace-nowrap">
                        Authorize camera
                    </p>
                    <img src = "https://cdn.discordapp.com/attachments/996489060275208295/1003694136941084832/BA6EE846-2205-4343-AA9A-8DFDBED21E0A.jpg"></img>
                    <p className="text-lg break-words text-center whitespace-normal italic leading-6">
                        We need to make sure that you're looking at the ad to give you your reward. You will
                        earn heartbeats based on your heartrate while viewing the ad.
                    </p>
                    <button
                        onClick={() => setCameraAllowed(true)}
                        className="bg-green-600 text-white rounded-lg px-24 py-3"
                    >
                        Allow
                    </button>
                </>}
            </div>
        </CenteredModal>
    )
}