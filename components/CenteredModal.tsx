import {Fragment, ReactNode} from 'react';
import {Dialog, Transition} from '@headlessui/react';

// A reusable component to wrap a transition and dialog overlay around a screen-centered div.
// https://github.com/GunnWATT/watt/blob/main/client/src/components/layout/CenteredModal.tsx
export default function CenteredModal(props: {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    blur?: string,
    zIndex?: string,
    children: ReactNode,
}) {
    const {isOpen, setIsOpen, blur, zIndex, children} = props;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                open={true} onClose={() => setIsOpen(false)}
                className={"fixed inset-0 flex items-center justify-center "
                    + (zIndex ? zIndex : "z-10")}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className={"fixed inset-0 bg-black/40 duration-300"
                        + (blur ? " backdrop-blur-" + blur : "")} />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {children}
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}
