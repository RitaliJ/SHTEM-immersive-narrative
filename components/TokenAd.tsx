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
    const [startTime, setStartTime] = useState(0);
    const tokensPerMinute = 1;

    //start running timer on modal open
    useEffect(() => {
        if (isOpen) {
            setReward(0);
            setStartTime(Date.now());
            setRunning(true);
        } else {
            setRunning(false);
            callback(reward);
        }
    }, [isOpen]);

    //once start time is set, begin incrementing reward
    useEffect(() => {
        if (running) {
            setTimeout(() => {
                setReward(tokensPerMinute * (Date.now() - startTime) / 60000);
            }, 100);
        }
    }, [running, reward]);

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative flex flex-col gap-2 p-4 items-center bg-white w-min whitespace-nowrap rounded-lg oveflow-hidden">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <p className="text-5xl font-bold uppercase">
                    This is an ad
                </p>
                <p className="text-xl">
                    Current reward: {reward.toFixed(2)} Tokens
                </p>
                <p className="italic">
                    You can close this popup at any time to receive your tokens
                </p>
            </div>
        </CenteredModal>
    )
}