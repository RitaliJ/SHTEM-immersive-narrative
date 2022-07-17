import { ProductType } from "../util/types";

//component for item in shopping cart list
export default function CartProduct(props: {product: ProductType, quantity: number, callback: () => void}) {
    const {product, quantity, callback} = props;

    return (
        <div className="flex gap-4 items-center text-3xl font-bold">
            <button
                onClick={() => callback()}
                className="bg-red-500 text-white text-5xl font-normal px-4 rounded-full">
                ×
            </button>
            <img
                src={product.imgSrc}
                alt={product.name}
                className="w-36"
            />
            <span>{quantity}×</span>
            <span className="grow line-clamp-1">
                {product.name}
            </span>
            <span className="whitespace-nowrap">
                {(product.price * quantity).toFixed(2)} V Bucks
            </span>
        </div>
    )
}