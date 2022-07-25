import Link from "next/link";
import { useEffect, useState } from "react";
import { AccountType } from "../util/types";
import CartProduct from "./CartProduct";
import CenteredModal from "./CenteredModal";

//modal for viewing cart contents
export default function CartModal(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    callback: () => void,
}) {
    const {isOpen, setIsOpen, callback} = props;
    const [account, setAccount] = useState({} as AccountType);
    const [total, setTotal] = useState(0);

    //refresh account every time modal opens
    useEffect(() => {
        const acc = localStorage.getItem("shtemAccount");
        if (acc === "undefined" || acc === null) {
            location.href = "/login";
        } else {
            setAccount(JSON.parse(acc));
        }
    }, [isOpen]);

    //set total price once account is retrieved
    useEffect(() => {
        if (!account.email) return;
        let t = 0;
        for (let i of account.items) {
            if (i) {
                t += i.product.price * i.quantity;
            }
        };
        setTotal(t);
    }, [account]);

    //function to remove item from cart
    const removeItem = (id: number, size: string) => {
        let acc = {} as AccountType;
        Object.assign(acc, account);
        acc.items = acc.items.filter(i => !(i.product.id === id && i.size === size));
        localStorage.setItem("shtemAccount", JSON.stringify(acc));
        setAccount(acc);
        callback();
    }

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="relative bg-white container px-8 py-6 rounded-lg">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl">
                    ×
                </button>
                <h1 className="text-5xl font-bold mb-12">
                    Your cart
                </h1>
                <div className="flex flex-col divide-y divide-gray-300">
                    {account.email && account.items[0] ? (
                        account.items.map(i =>
                            <CartProduct key={i.product.id} item={i} className="h-24 text-xl"
                                callback={() => removeItem(i.product.id, i.size)} />
                        )
                    ) : (
                        <p className="text-xl p-2">Your cart is empty.</p>
                    )}
                    {Number(total.toFixed(2)) > account.balance ? (
                        <div className="flex flex-col gap-1 items-end pt-4 px-2">
                            <div className="flex gap-2 text-2xl">
                                <p>Total:</p>
                                <p className="text-red-500">
                                    {total.toFixed(2)} V Bucks
                                </p>
                            </div>
                            <p className="text-right text-lg italic">
                                You can't afford this purchase! The amount in your cart exceeds your tokens!
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 items-end pt-4 px-2">
                            <div className="flex gap-2 text-2xl">
                                <p>Total:</p>
                                <p className="text-green-600">
                                    {total.toFixed(2)} Tokens
                                </p>
                            </div>
                            {account.email && account.items[0] ? (
                                <Link href="/checkout">
                                    <button className="bg-green-600 text-lg text-white px-10 py-3 rounded-lg">
                                        Continue to checkout
                                    </button>
                                </Link>
                            ) : (
                                <button className="bg-gray-200 text-lg text-gray-400 px-10 py-3 rounded-lg">
                                    Continue to checkout
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </CenteredModal>
    )
}