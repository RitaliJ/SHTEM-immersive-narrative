import { useEffect } from "react";

//component for a text input with label
export default function InputGroup(props: {
    label: string,
    value?: string,
    optional?: boolean,
    onlyNumbers?: boolean,
    maxLength?: number,
    callback: (text: string) => void,
}) {
    const {label, value, optional, onlyNumbers, maxLength, callback} = props;

    return (
        <div className="grow w-full flex flex-col gap-1 min-w-0">
            <div className="flex gap-1">
                {!optional && <p className="text-red-500">
                    *
                </p>}
                <p className="font-bold">
                    {label}
                </p>
            </div>
            <input
                type="text"
                value={value}
                placeholder={optional ? "(optional)" : "type here..."}
                className="border border-gray-400 px-2 py-1 rounded-md"
                autoComplete="no"
                onChange={e => {
                    if (onlyNumbers && /[a-zA-Z]/.test(e.target.value)) return;
                    if (!maxLength || (maxLength && e.target.value.length <= maxLength)) {
                        callback(e.target.value);
                    }
                }}
            />
        </div>
    )
}