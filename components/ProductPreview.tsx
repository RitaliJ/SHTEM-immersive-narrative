import Link from "next/link";

export default function ProductPreview(props: {
    imgSrc: string,
    name: string,
    desc: string,
    price: number,
    id: number,
    className?: string,
}) {
    const {imgSrc, name, desc, price, id, className} = props;
    
    return (
        <Link href={"/products/" + id}>
            <div className="flex flex-col gap-1 w-72 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer duration-150 rounded-lg p-4">
                <img src={imgSrc} alt={name} />
                <div className="flex">
                    <p className="font-bold grow">
                        {name}
                    </p>
                    <p>{price + " V Bucks"}</p>
                </div>
                <p>{desc}</p>
            </div>
        </Link>
    )
}