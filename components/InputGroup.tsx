//component for a text input with label
export default function InputGroup(props: {label: string, value?: string, callback: (text: string) => void}) {
    const {label, value, callback} = props;

    return (
        <div className="grow flex flex-col gap-1 min-w-0">
            <p className="font-bold">
                {label}
            </p>
            <input
                type="text"
                value={value}
                placeholder="type here..."
                className="border border-gray-400 px-2 py-1 rounded-md"
                autoComplete="no"
                onChange={(e) => callback(e.target.value)}
            />
        </div>
    )
}