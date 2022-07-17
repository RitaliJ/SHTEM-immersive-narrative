import { ProductType } from "../util/types";

export default function CartProduct(props: {product: ProductType, quantity: number}) {
    const {product, quantity} = props;

    return (
        <div className="flex gap-4 items-center text-3xl font-bold">
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