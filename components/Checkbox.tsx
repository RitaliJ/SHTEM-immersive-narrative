export default function Checkbox(props: {text: string, optional?: boolean, on: boolean, setOn: (value: boolean) => void}) {
    const {text, optional, on, setOn} = props;

    return (
        <div className="flex gap-3 items-center">
            <button
                onClick={() => setOn(!on)}
                className={"flex-none w-8 h-8 m-[2px] ring-2 ring-black border-4 border-white duration-150 "
                    + (on ? "bg-blue-500" : "bg-white")}
            />
            <div className="flex gap-x-1 text-lg flex-wrap">
                {!optional &&
                    <p className="text-red-500">
                        *
                    </p>
                }
                {text.split(" ").map((w, i) =>
                    <p key={i} className="font-bold m-0">
                        {w}
                    </p>
                )}
            </div>
        </div>
    )
}
