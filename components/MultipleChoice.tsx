//component for multiple choice question with radio buttons
export default function MultipleChoice(props: {
    label: string,
    selection: string,
    callback: (value: string) => void,
    options: string[],
}) {
    const {label, selection, callback, options} = props;

    return (
        <div className="grow w-full flex flex-col gap-1 min-w-0">
            <div className="flex gap-1">
                <p className="text-red-500">
                    *
                </p>
                <p className="font-bold">
                    {label}
                </p>
            </div>
            {options.map((o, i) =>
                <div key={i} className="flex gap-3 items-center">
                    <button
                        onClick={() => callback(o)}
                        className={"flex-none duration-300 w-6 h-6 border-4 border-white ring-2 ring-black rounded-full "
                        + (selection === o ? "bg-blue-500" : "bg-white")}
                    />
                    {o}
                </div>
            )}
        </div>
    )
}
