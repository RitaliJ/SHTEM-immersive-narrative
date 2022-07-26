import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountType, ProductType } from '../../util/types';
import Head from 'next/head';
import AddToCart from '../../components/AddToCart';
import BannerAd from '../../components/BannerAd';
import PopupAd from '../../components/PopupAd';
import NiceLink from '../../components/NiceLink';
import ToggleButton from "../../components/ToggleButton";
const constants = require('../../util/constants')

export default function Product(){
    const [product, setProduct] = useState(undefined as unknown as ProductType);
    const [account, setAccount] = useState(undefined as unknown as AccountType);
    const [addedToCart, setAddedToCart] = useState(false); //useState for opening/closing cart modal
    const [adIsOpen, setAdIsOpen] = useState(false); //useState for showing/hiding popup ad

    const [size, setSize] = useState("");
    const sizes = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]; //size options

    const router = useRouter();
    const id = router.query.id;

    //get account info from localStorage and product info from util/products.ts
    useEffect(() => {
        if (!account) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        }
        if (!product) {
            setProduct(constants.products[Number(id)]);
            // setInterval(() => { //show pop up ad after 5 seconds of inital page load
            //     if (!adIsOpen) {
            //         setAdIsOpen(true);
            //     }
            // }, 8000);
        }
    });

    return (
        <div className="h-screen flex flex-col">
            <Head>
                <title>{"SHTEM | " + (product && product.name)}</title>
            </Head>
            
            <Header
                addedToCart={addedToCart}
                callback={setAddedToCart}
                psaHtml="This is a test"
            />

            <div className="grow flex gap-8 my-8 mx-4 justify-center">
                <BannerAd imgSrc="https://cdn.discordapp.com/attachments/996489060275208295/1001275031537602560/sub-buzz-617-1631634133-1.png" href="/products/0" className="w-72" />
                <div className="max-w-[30rem] flex-col gap-2">
                    <NiceLink href="/home" text="← Continue shopping" className="mb-6" />
                    <img
                        src={product && product.imgSrc}
                        alt={product && product.name}
                        loading="lazy"
                    />
                </div>
                <div className="grow flex flex-col gap-4">
                    <div className="flex gap-4 text-lg font-semibold">
                        <h1 className="grow text-slate-900">
                            {product && product.name}
                        </h1>
                        <p className="text-slate-500 whitespace-nowrap">
                            {product && product.price} Tokens
                        </p>
                    </div>
                    <p className="w-full text-sm text-green-600 font-medium text-slate-700">
                        In stock
                    </p>
                    <p className="pb-6 border-b border-slate-200 space-x-2">
                        {product && product.desc}
                    </p>
                    <p className="font-bold">
                        Choose Size
                    </p>
                    <NiceLink
                        href="https://www.theshopforward.com/pages/poly-cotton-unisex-t-shirt-size-chart"
                        text="Size Chart"
                    />
                    <div className="flex flex-wrap gap-1">
                        {sizes.map(s =>
                            <ToggleButton
                                label={s}
                                isOn={size === s}
                                noToggle
                                callback={() => setSize(s)}
                            />
                        )}
                    </div>
                    <AddToCart product={product} callback={setAddedToCart} size={size} />
                    <p className="text-sm text-gray-200 text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </div>
                <BannerAd imgSrc="https://cdn.discordapp.com/attachments/996489060275208295/1001271847679184906/animorph.png" href="/products/0" className="w-72" />
            </div>
            <PopupAd isOpen={adIsOpen} setIsOpen={setAdIsOpen} />
        </div>
    );
}