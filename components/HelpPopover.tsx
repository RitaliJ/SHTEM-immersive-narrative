import Image from "next/image";
import { Popover, Transition } from '@headlessui/react';
import { ReactNode, useEffect, useState } from 'react';

//modal for help popup
export default function HelpPopover(props: {html: ReactNode, outerHtml: ReactNode}) {
    const {outerHtml} = props;
    const [html, setHtml] = useState<ReactNode>();
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (props.html) {
            setHtml(props.html);
        }
    }, [props.html]);

    return (
        <Popover as="div" className="relative">
            {({open}) => (
                <>
                    <Popover.Button
                        onClick={()=> setOpened(true)}
                        className="relative outline-none flex items-center hover:bg-gray-200 duration-150 p-2 rounded-lg"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <div className={"duration-300 absolute top-2 right-1 w-4 h-4 rounded-full bg-red-500 "
                            + ((open || opened) ? "bg-opacity-0" : "bg-opacity-100")} />
                    </Popover.Button>
                    <Transition
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95 -translate-y-2"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Popover.Panel static className="absolute top-1 right-0 w-max">
                            <div className="overflow-hidden flex bg-white border-2 border-slate-200 shadow-lg rounded-lg">
                                <div className="px-4 py-3 w-min min-w-[18rem] flex flex-col gap-2 items-center">
                                    {html}
                                </div>
                                <div>
                                    <Image
                                        width="192"
                                        height="192"
                                        className="rounded-md"
                                        src="/cart.jpeg"
                                        alt="Shopping assistant"
                                    />
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                    {outerHtml}
                </>
            )}
        </Popover>
    )
}
