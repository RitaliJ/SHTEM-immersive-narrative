import Link from "next/link";
import { ProductType } from "../util/types";

//component for product image and details to display on home page
export default function ProductPreview(props: {product: ProductType}) {
    const {product} = props;
    
    return (
        <Link href={"/products/" + product.id}>
            <div className="flex flex-col gap-1 w-96 bg-white-200 hover:bg-white-300 hover:cursor-pointer
                shadow-md hover:shadow-xl duration-300 rounded-lg p-4">
                <img src={product.imgSrc} alt={product.name} />
                <div className="flex mt-1 text-lg gap-2">
                    <p className="font-bold grow line-clamp-2">
                        {product.name}
                    </p>
                    <p className={"whitespace-nowrap text-green-600 text-xs"}>
                        {(product.price).toFixed(2)} Tokens
                    </p>
                </div>
                <p className="line-clamp-5 text-gray-500">
                    {product.desc}
                </p>
            </div>
        </Link>
    )
}