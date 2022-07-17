import { ProductType } from "../util/types";

export default function CartProduct(props: {product: ProductType, quantity: number}) {
    const {product, quantity} = props;

    return (
        <div className="flex gap-2 items-center text-3xl font-bold">
            <img
                src={product.imgSrc}
                alt={product.name}
                className="w-36"
            />
            <div className="grow flex gap-4">
                <span>{quantity}×</span>
                <span>{product.name}</span>
            </div>
            <span>
                {(product.price * quantity).toFixed(2)} V Bucks
            </span>
        </div>
    )
}