import Header from '../../components/Header';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountType, ProductType } from '../../util/types';
import Head from 'next/head';
import AddToCart from '../../components/AddToCart';
import Link from 'next/link';
const mod = require('../../util/products')

export default function Product(){
    const [product, setProduct] = useState({} as ProductType);
    const [account, setAccount] = useState({} as AccountType);
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
        if (!product.id) {
            setProduct(mod.products[Number(id)]);
        }
    });

    const buyProduct = () => {
        console.log("Purchasing Product");
    }

    return(
        <>
            <Head>
                <title>SHTEM | {product && product.name}</title>
            </Head>
            
            <Header />

            <div className="container flex gap-8 mt-8">
                <div className="flex flex-col gap-2">
                    <Link href="/home">
                        <button className="bg-blue-500 text-lg text-white px-3 py-1 rounded-lg mb-6 w-min whitespace-nowrap">
                            ← Continue shopping
                        </button>
                    </Link>
                    <img
                        src={product.imgSrc}
                        alt={product.name}
                        loading="lazy"
                    />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex text-lg font-semibold">
                        <h1 className="grow text-slate-900">
                            {product.name}
                        </h1>
                        <p className="text-slate-500">
                            {product.price} V Bucks
                        </p>
                    </div>
                    <p className="w-full text-sm font-medium text-slate-700">
                        In stock
                    </p>
                    <p className="pb-6 border-b border-slate-200 space-x-2">
                        {product.desc}
                    </p>
                    <AddToCart product={product} />
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </div>
            </div>
        </>
    );
}