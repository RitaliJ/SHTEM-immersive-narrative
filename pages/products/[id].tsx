import Header from '../../components/Header';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountType, ProductType } from '../../util/types';
import Head from 'next/head';
import AddToCart from '../../components/AddToCart';
import Link from 'next/link';
import BannerAd from '../../components/BannerAd';
import PopupAd from '../../components/PopupAd';
const mod = require('../../util/products')

export default function Product(){
    const [product, setProduct] = useState(undefined as unknown as ProductType);
    const [account, setAccount] = useState({} as AccountType);
    const [addedToCart, setAddedToCart] = useState(false); //useState for opening/closing cart modal
    const [adIsOpen, setAdIsOpen] = useState(false); //useState for showing/hiding popup ad
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
            setProduct(mod.products[Number(id)]);
            setTimeout(() => { //show pop up ad after 5 seconds of inital page load
                setAdIsOpen(true);
            }, 3000);
        }
    });

    return(
        <div className="h-screen flex flex-col">
            <Head>
                <title>SHTEM | {product && product.name}</title>
            </Head>
            
            <Header addedToCart={addedToCart} callback={setAddedToCart} />

            <div className="grow flex gap-8 my-8 mx-4 justify-center">
                <BannerAd imgSrc="" href="/products/0" className="w-72" />
                <div className="max-w-[30rem] flex-col gap-2">
                    <Link href="/home">
                        <a className="text-xl text-blue-500 mb-6">
                            <p className="mb-6">
                                ← Continue shopping
                            </p>
                        </a>
                    </Link>
                    <img
                        src={product && product.imgSrc}
                        alt={product && product.name}
                        loading="lazy"
                    />
                </div>
                <div className="grow flex flex-col gap-4">
                    <div className="flex text-lg font-semibold">
                        <h1 className="grow text-slate-900">
                            {product && product.name}
                        </h1>
                        <p className="text-slate-500">
                            {product && product.price} V Bucks
                        </p>
                    </div>
                    <p className="w-full text-sm font-medium text-slate-700">
                        In stock
                    </p>
                    <p className="pb-6 border-b border-slate-200 space-x-2">
                        {product && product.desc}
                    </p>
                    <AddToCart product={product} callback={setAddedToCart} />
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </div>
                <BannerAd imgSrc="" href="/products/0" className="w-72" />
            </div>
            <PopupAd isOpen={adIsOpen} setIsOpen={setAdIsOpen} />
        </div>
    );
}