import {Fragment, ReactNode} from 'react';
import {Popover, Transition} from '@headlessui/react';

//modal for help popup
export default function HelpPopover() {
    return (
        <Popover as="div" className="relative">
            <Popover.Button className="outline-none flex items-center hover:bg-gray-200 duration-150 p-2 rounded-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 -translate-y-2"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0"
            >
                <Popover.Panel className="absolute top-[3.5rem] right-0 w-48">
                    <div className="bg-slate-100 border-2 border-slate-200 shadow-lg rounded-lg p-6">
                        This is the help menu
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
