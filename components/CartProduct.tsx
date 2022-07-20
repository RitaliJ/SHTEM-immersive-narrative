import Link from "next/link";
import { ItemType, ProductType } from "../util/types";

//component for item in shopping cart list
export default function CartProduct(props: {item: ItemType, className?: string, callback?: () => void}) {
    const {item, className, callback} = props;
    const {product, quantity} = item;

    return (
        <div className={"flex gap-4 items-center p-2 " + className}>
            {callback && <button
                onClick={() => callback()}
                className="bg-red-500 text-white text-2xl font-normal px-4 rounded-full">
                ×
            </button>}
            <div className="flex justify-center items-center w-24 h-full">
                <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="max-h-full"
                />
            </div>
            <span>{quantity}×</span>
            <Link href={"/products/" + product.id}>
                <span className="grow line-clamp-1 hover:cursor-pointer">
                    {product.name}
                </span>
            </Link>
            <span className="whitespace-nowrap">
                {(product.price * quantity).toFixed(2)} V Bucks
            </span>
        </div>
    )
}