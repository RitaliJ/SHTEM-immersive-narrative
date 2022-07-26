import Link from "next/link";

//nicer looking Link component
export default function NiceLink(props: {href: string, text: string, className?: string}) {
    const {href, text, className} = props;

    return (
        <div className={className + " border-b border-gray hover:border-blue-500 duration-150 w-min whitespace-nowrap"}>
            <Link href={href}>
                <a className="text-lg text-gray-300">
                    {text}
                </a>
            </Link>
        </div>
    )
}