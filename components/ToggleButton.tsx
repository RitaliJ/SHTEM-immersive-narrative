import { useEffect, useState } from "react"

//component for a button that toggles on/off
export default function ToggleButton(props: {
    label: string,
    isOn?: boolean,
    noToggle?: boolean,
    offBg?: string,
    callback: (name: string, on: boolean) => void,
}) {
    const {label, isOn, noToggle, offBg, callback} = props;
    const [on, setOn] = useState(false);

    useEffect(() => {
        if (isOn !== undefined) {
            setOn(isOn);
        }
    }, [isOn]);

    return (
        <button
            onClick={() => {
                if (!(on && noToggle)) {
                    callback(label, !on);
                    setOn(!on);
                }
            }}
            className={"px-4 py-2 rounded-lg duration-150 "
                + (on ? "bg-green-500 text-white" : "text-black "
                + (offBg ? offBg : "bg-gray-200 hover:bg-gray-300"))} 
        >
            {label}
        </button>
    )
}