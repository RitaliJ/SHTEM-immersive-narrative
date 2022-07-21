import Head from 'next/head'
import { useEffect, useState } from 'react'
import BannerAd from '../components/BannerAd';
import Header from '../components/Header'
import ProductPreview from '../components/ProductPreview';
import { AccountType, ProductType } from '../util/types';
const mod = require('../util/constants');

//home page with product list to scroll through
export default function Home() {
    const [account, setAccount] = useState({} as AccountType);
    const [products, setProducts] = useState([undefined as unknown as ProductType]);

    //get account from localStorage and products from util/products.ts on page load
    useEffect(() => {
        if (!account.email) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        }
        if (!products[0]) {
            setProducts(mod.products);
        }
    });

    return (
        <>
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header psaHtml="This is your personal shopping assistant!" />

            <main className="flex gap-4 mt-12 mb-8 mx-4 justify-center">
                <BannerAd imgSrc="" href="/products/0" className="w-72" />
                <div>
                    <h1 className="text-5xl font-bold text-center mb-12">
                        Buy our things
                    </h1>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {products[0] && products.map((p, i) =>
                            <ProductPreview key={i} product={p} />
                        )}
                    </div>
                </div>

                <BannerAd imgSrc="" href="/products/1" className="w-72" />

            </main>
        </>
    )
}
