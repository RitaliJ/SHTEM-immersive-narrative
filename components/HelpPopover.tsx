import { Popover, Transition } from '@headlessui/react';
import { ReactNode } from 'react';

//modal for help popup
export default function HelpPopover(props: {html: ReactNode, outerHtml: ReactNode}) {
    const {html, outerHtml} = props;

    return (
        <Popover as="div" className="relative">
            {({open}) => (
                <>
                    <Popover.Button className="relative outline-none flex items-center hover:bg-gray-200 duration-150 p-2 rounded-lg">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className={"duration-300 absolute top-2 right-1 w-4 h-4 rounded-full bg-red-500 "
                            + (open ? "bg-opacity-0" : "bg-opacity-100")} />
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
                        <Popover.Panel static className="absolute top-1 right-0 w-48">
                            <div className="overflow-hidden flex flex-col bg-slate-100 border-2 border-slate-200 shadow-lg rounded-lg">
                                <img
                                    src="https://steamuserimages-a.akamaihd.net/ugc/942844394047374257/FBE1C6921B8A98FEDE1309EEB49C3137BC3D88EE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                                    alt="Shopping assistant"
                                />
                                <div className="px-4 py-3">
                                    {html}
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
