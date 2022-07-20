import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function DropdownMenu(props: {
    label: string,
    optional?: boolean,
    callback: (value: string) => void,
    options: string[] | number[],
}) {
    const {label, optional, callback, options} = props;
    const newOptions = ["...", ...options]; //"Click to select" as default selection
    const [selected, setSelected] = useState(newOptions[0]);

    return (
        <div className="grow flex flex-col gap-1 min-w-[8rem]">
            <div className="flex gap-1">
                {!optional && <p className="text-red-500">
                    *
                </p>}
                <p className="font-bold">
                    {label}
                </p>
            </div>
            <div className="relative">
                <Listbox value={selected} onChange={setSelected}>
                    <Listbox.Button className="flex items-center w-full border border-gray-400 text-left px-2 py-1 rounded-md">
                        <p className={"grow" + (selected === newOptions[0] ? " text-gray-400" : "")}>
                            {selected}
                        </p>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 -translate-y-2"
                        enterTo="opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 -translate-y-2"
                    >
                        <Listbox.Options className="border border-gray-400 scrollbar absolute bg-white mt-1 flex flex-col divide-y max-h-60 w-full overflow-y-auto rounded-lg">
                            {newOptions.map(o =>
                                <button
                                    onClick={() => {
                                        setSelected(o);
                                        if (newOptions[0] === o) {
                                            callback(undefined as unknown as string);
                                        } else {
                                            callback(o.toString());
                                        }
                                    }}
                                    className={"rounded-lg px-2 py-1 text-left"
                                        + (selected === o ? " bg-gray-200" : " hover:bg-gray-100")
                                        + (newOptions[0] === o ? " text-gray-400" : "")}>
                                    {o}
                                </button>
                            )}
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>
        </div>
    )
}