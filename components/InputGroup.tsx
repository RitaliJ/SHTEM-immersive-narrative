export default function InputGroup(props: {
    label: string,
    placeholder: string,
    callback: (text: string) => void},
) {
    const {label, placeholder, callback} = props;

    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold">
                {label}
            </p>
            <input
                type="text"
                className="border-2 border-gray-400 px-2 py-1 rounded-md"
                placeholder={placeholder}
                onChange={(e) => callback(e.target.value)}
            />
        </div>
    )
}