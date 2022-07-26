import { useState } from "react";
import CenteredModal from "./CenteredModal";
const constants = require('../util/constants')

//modal for redeeming tokens with gift codes from surveys, captchas, etc.
export default function RedeemModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    callback: () => void,
}) {
    const {isOpen, setIsOpen, callback} = props;
    const [value, setValue] = useState("");
    const [showErr1, setShowErr1] = useState(false); //error for invalid code
    const [showErr2, setShowErr2] = useState(false); //error for already used code

    //increase account balance in localStorage if code is valid
    const handleRedeem = () => {
        if (constants.giftCodes[value]) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc !== "undefined" && acc !== null) {
                let acc2 = JSON.parse(acc);
                if (!acc2.usedCodes.includes(value)) {
                    acc2.balance += constants.giftCodes[value];
                    acc2.usedCodes.push(value);
                    localStorage.setItem("shtemAccount", JSON.stringify(acc2));
                    setIsOpen(false);
                    setValue("");
                    callback();
                } else {
                    setShowErr2(true);
                }
            }
        } else {
            setShowErr1(true);
        }
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-3 items-center relative bg-white container px-8 py-6 rounded-lg w-96">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <p className="text-2xl font-bold">
                    Redeem heartbeats
                </p>
                <input
                    type="text"
                    value={value}
                    placeholder="XXXXXX"
                    className="uppercase font-mono text-center border border-gray-400 px-4 py-3 text-2xl rounded-md w-36"
                    autoComplete="no"
                    onChange={e => {
                        if (e.target.value.length <= 6) setValue(e.target.value);
                        setShowErr1(false);
                        setShowErr2(false);
                    }}
                />
                <button
                    onClick={() => {if (value.length === 6) handleRedeem()}}
                    className={"px-3 py-1 rounded-lg duration-150 text-lg "
                        + (value.length === 6 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}
                >
                    Redeem
                </button>
                {(showErr1 || showErr2) &&
                    <p className="italic text-red-500 text-lg">
                        {showErr1
                            ? "Invalid code!"
                            : "You have already used this gift code!"
                        }
                    </p>
                }
            </div>
        </CenteredModal>
    )
}
