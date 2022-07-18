//component for a text input with label
export default function InputGroup(props: {label: string, callback: (text: string) => void}) {
    const {label, callback} = props;

    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold">
                {label}
            </p>
            <input
                type="text"
                className="border border-gray-400 px-2 py-1 rounded-md"
                placeholder="type here..."
                autoComplete="no"
                onChange={(e) => callback(e.target.value)}
            />
        </div>
    )
}