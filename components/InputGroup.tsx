export default function InputGroup(props: {label: string, placeholder: string}) {
    const {label, placeholder} = props;

    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold">
                {label}
            </p>
            <input type="text" className="border-2 border-gray-400 px-1 rounded-md" placeholder={placeholder} />
        </div>
    )
}