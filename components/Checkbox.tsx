export default function Checkbox(props: {text: string, on: boolean, setOn: (value: boolean) => void}) {
    const {text, on, setOn} = props;

    return (
        <div className="flex gap-3 items-center">
            <button
                onClick={() => setOn(!on)}
                className={"w-8 h-8 m-[2px] ring-2 ring-black border-4 border-white duration-150 "
                    + (on ? "bg-blue-500" : "bg-white")}
            />
            <div className="flex gap-1 text-lg">
                <p className="text-red-500">
                    *
                </p>
                <p className="font-bold">
                    {text}
                </p>
            </div>
        </div>
    )
}
