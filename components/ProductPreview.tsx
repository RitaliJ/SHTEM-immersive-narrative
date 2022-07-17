import Link from "next/link";
import { ProductType } from "../util/types";

export default function ProductPreview(props: {product: ProductType}) {
    const {product} = props;
    
    return (
        <Link href={"/products/" + product.id}>
            <div className="flex flex-col gap-1 w-72 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer
                duration-150 rounded-lg p-4">
                <img src={product.imgSrc} alt={product.name} />
                <div className="flex mt-1">
                    <p className="font-bold grow line-clamp-2">
                        {product.name}
                    </p>
                    <p className={"whitespace-nowrap font-bold text-green-600"}>
                        {product.price + " V Bucks"}
                    </p>
                </div>
                <p className="line-clamp-5">
                    {product.desc}
                </p>
            </div>
        </Link>
    )
}