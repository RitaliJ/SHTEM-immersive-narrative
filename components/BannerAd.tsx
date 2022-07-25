import { CSSProperties } from "react";
import Link from "next/link";

//component for banner ads to display around page content
export default function BannerAd(props: {imgSrc: string, href: string, className?: string}) {
    const {imgSrc, href, className} = props;
    const divStyle: CSSProperties = {
        backgroundImage: `url(${imgSrc})`,
    };

    return (
        <Link href={href}>
            <div
                style={divStyle}
                className={"bg-contain bg-repeat hover:cursor-pointer bg-gray-300 flex-none " + className}
            />
        </Link>
    )
}