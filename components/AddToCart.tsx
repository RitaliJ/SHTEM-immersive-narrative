import { useState } from "react";
import { ProductType } from "../util/types";

//component for quantity selection and "Add to cart" button on product pages
export default function AddToCart(props: {product: ProductType, callback: (value: boolean) => void}) {
    const {product, callback} = props;
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
        callback(true);
    }

    return (
        <div className="bg-slate-100 p-2 pl-4 flex gap-4 items-center text-md w-min whitespace-nowrap rounded-lg">
            <span>Quantity:</span>
            <div className="flex gap-2 text-lg">
                {num === 1 ? (
                    <button
                        className="text-slate-400 bg-slate-200 duration-150 rounded-full px-3">
                        {"ᐸ"}
                    </button>
                ) : (
                    <button
                        onClick={() => increment(-1)}
                        className="bg-slate-300 hover:bg-slate-400 duration-150 rounded-full px-3">
                        {"ᐸ"}
                    </button>
                )}
                <span className="min-w-[2rem] text-center">
                    {num}
                </span>
                <button
                    onClick={() => increment(1)}
                    className="bg-slate-300 hover:bg-slate-400 duration-150 rounded-full px-3">
                    {"ᐳ"}
                </button>
            </div>
            <span className="min-w-[8rem] text-right text-green-600 font-bold">
                {product && (product.price * num).toFixed(2)} V Bucks
            </span>
            <button
                onClick={() => addToCart()}
                className="bg-black text-white px-2 py-1 rounded-lg">
                Add to cart
            </button>
        </div>
    )
}