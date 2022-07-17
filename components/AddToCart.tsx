import Link from "next/link";
import { useState } from "react";
import { ProductType } from "../util/types";

export default function AddToCart(props: {product: ProductType}) {
    const {product} = props;
    const [num, setNum] = useState(1);

    //change num when you press the left and right buttons
    const increment = (amount: number) => {
        if (num + amount > 0) {
            setNum(num + amount);
        }
    }

    //add {num} copies of this product to the cart
    const addToCart = () => {
        const acc = localStorage.getItem("shtemAccount");
        if (!acc) return;
        let newAcc = JSON.parse(acc);
        if (newAcc.items[0] === null) { //properly handle case where items is empty
            newAcc.items[0] = {product, quantity: num};
        } else {
            let bool = false;
            //check if this item is already in items; if so, just increase quantity
            newAcc.items.forEach((i: {product: ProductType, quantity: number}) => {
                if (product.id === i.product.id) {
                    i.quantity += num;
                    bool = true;
                }
            });
            if (!bool) { //if this is a new item, add it
                newAcc.items.push({product, quantity: num});
            }
        }
        localStorage.setItem("shtemAccount", JSON.stringify(newAcc));
    }

    return (
        <div className="bg-gray-100 p-2 pl-4 flex gap-4 items-center text-2xl w-min whitespace-nowrap rounded-lg">
            <span>Quantity:</span>
            <div className="flex gap-2 text-xl">
                {num === 1 ? (
                    <button
                        className="text-gray-400 bg-gray-200 duration-150 rounded-full px-3">
                        {"ᐸ"}
                    </button>
                ) : (
                    <button
                        onClick={() => increment(-1)}
                        className="bg-gray-300 hover:bg-gray-400 duration-150 rounded-full px-3">
                        {"ᐸ"}
                    </button>
                )}
                <span className="text-2xl min-w-[2rem] text-center">
                    {num}
                </span>
                <button
                    onClick={() => increment(1)}
                    className="bg-gray-300 hover:bg-gray-400 duration-150 rounded-full px-3">
                    {"ᐳ"}
                </button>
            </div>
            <span className="text-green-600 font-bold">
                {product.price} V Bucks
            </span>
            <Link href="/cart">
                <button
                    onClick={() => addToCart()}
                    className="bg-blue-500 text-white px-2 py-1 rounded-lg">
                    Add to cart
                </button>
            </Link>
        </div>
    )
}