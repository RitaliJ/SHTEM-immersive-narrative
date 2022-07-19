import Link from "next/link";

//component for banner ads to display around page content
export default function BannerAd(props: {imgSrc: string, href: string, className?: string}) {
    const {imgSrc, href, className} = props;

    return (
        <Link href={href}>
            <div className={"hover:cursor-pointer bg-gray-300 flex-none " + className}>
                <p className="text-5xl font-bold uppercase p-4">
                    This is an ad
                </p>
            </div>
        </Link>
    )
}