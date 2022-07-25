import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../util/types";

//component for product image and details to display on home page
export default function ProductPreview(props: {product: ProductType}) {
    const {product} = props;
    
    return (
        <Link href={"/products/" + product.id}>
            <div className="flex flex-col gap-1 w-96 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer
                shadow-md hover:shadow-xl duration-300 rounded-lg p-4">
                <Image src={product.imgSrc} alt={product.name} />
                <div className="flex mt-1 text-lg gap-2">
                    <p className="font-bold grow line-clamp-2">
                        {product.name}
                    </p>
                    <p className={"whitespace-nowrap font-bold text-green-600"}>
                        {(product.price).toFixed(2)} Tokens
                    </p>
                </div>
                <p className="line-clamp-5">
                    {product.desc}
                </p>
            </div>
        </Link>
    )
}