import { useState } from "react"

//component for a button that toggles on/off
export default function ToggleButton(props: {label: string, callback: (name: string, on: boolean) => void}) {
    const {label, callback} = props;
    const [on, setOn] = useState(false);

    return (
        <button
            onClick={() => {callback(label, !on); setOn(!on)}}
            className={"px-4 py-2 rounded-lg duration-150 "
                + (on ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-black")} 
        >
            {label}
        </button>
    )
}