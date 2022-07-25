import { useState } from "react";
import { ItemType, ProductType } from "../util/types";

//component for quantity selection and "Add to cart" button on product pages
export default function AddToCart(props: {product: ProductType, size: string, callback: (value: boolean) => void}) {
    const {product, size, callback} = props;
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
            newAcc.items[0] = {product, quantity: num, size};
        } else {
            let bool = false;
            //check if this item is already in items; if so, just increase quantity
            newAcc.items.forEach((i: ItemType) => {
                if (product.id === i.product.id && size === i.size) {
                    i.quantity += num;
                    bool = true;
                }
            });
            if (!bool) { //if this is a new item, add it
                newAcc.items.push({product, quantity: num, size});
            }
        }
        localStorage.setItem("shtemAccount", JSON.stringify(newAcc));
        callback(true);
    }

    return (
        <div className="shadow-md bg-slate-100 p-2 pl-4 flex gap-4 items-center text-md w-min whitespace-nowrap rounded-lg">
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
                {product && (product.price * num).toFixed(2)} Tokens
            </span>
            <button
                onClick={() => {if (size) addToCart()}}
                className={"px-2 py-1 rounded-lg duration-150 "
                    + (size ? "bg-black text-white" : "bg-gray-200 text-gray-400")}>
                Add to cart
            </button>
            {!size &&
                <span className="text-red-500 italic pr-3">
                    You must choose a size
                </span>
            }
        </div>
    )
}