import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductPreview from '../components/ProductPreview';
import { AccountType, ProductType } from '../util/types';
const mod = require('../util/products');

export default function Home() {
    const [products, setProducts] = useState([{} as ProductType]);

    //get products from util/products.ts on page load
    useEffect(() => {
        if (!products[0].name) {
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
            
            <Header />

            <main className="container pt-12 pb-24">
                <h1 className="text-7xl font-bold text-center mb-12">
                    Buy our things
                </h1>
                <div className="flex justify-center gap-4 flex-wrap">
                    {products.map(p =>
                        <ProductPreview {...p} />    
                    )}
                </div>
            </main>
        </>
    )
}
