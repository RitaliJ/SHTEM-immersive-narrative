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

    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("products/" + id);
        if (x === null || x === "{}") { //if localstorage key doesn't exist, create it
            localStorage.setItem("products/" + id, JSON.stringify({millis: 0, clicks: 0}));
        } else {
            const x2 = JSON.parse(x);
            setMillis(x2.millis);
        }
        setNewMillis(0);
        setStart(Date.now);
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    //update millis roughly once per second
    useEffect(() => {
        if (start && millis !== undefined && newMillis !== undefined) {
            setTimeout(() => {
                setNewMillis(Date.now() - start);
                const x = localStorage.getItem("products/" + id);
                if (x !== null) {
                    let x2 = JSON.parse(x);
                    x2.millis = millis + newMillis;
                    localStorage.setItem("products/" + id, JSON.stringify(x2));
                }
            }, 1000);
        }
    }, [newMillis]);

    //handle click event
    const handleClick = () => {
        const x = localStorage.getItem("products/" + id);
        if (x !== null) {
            let x2 = JSON.parse(x);
            x2.clicks += 1;
            localStorage.setItem("products/" + id, JSON.stringify(x2));
        }
    }

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
                <title>{"Sahara Prime | " + (product && product.name)}</title>
                <meta name="description" content="Product" />
                <link rel="icon" href="/logo.png" />
            </Head>
            
            <Header
                addedToCart={addedToCart}
                callback={setAddedToCart}
                psaHtml={account && `This is your personal shopping assistant.
                    Find the "${account.target}" item and purchase it!`}
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
                            {product && product.price.toFixed(2)} Heartbeats
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
                                key={s}
                                label={s}
                                isOn={size === s}
                                noToggle
                                callback={() => setSize(s)}
                            />
                        )}
                    </div>
                    <AddToCart product={product} callback={setAddedToCart} size={size} />
                    <p className="text-sm text-gray-400/90 text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </div>
                <BannerAd imgSrc="https://cdn.discordapp.com/attachments/996489060275208295/1001271847679184906/animorph.png" href="/products/0" className="w-72" />
            </div>
            <PopupAd isOpen={adIsOpen} setIsOpen={setAdIsOpen} />
        </div>
    );
}