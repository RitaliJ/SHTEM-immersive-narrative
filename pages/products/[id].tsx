import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductType } from '../../util/types';
import Head from 'next/head';
import AddToCart from '../../components/AddToCart';
import Link from 'next/link';
const mod = require('../../util/products')

//page for an individual product
export default function Product() {
    const [product, setProduct] = useState({} as ProductType);
    const router = useRouter();
    const id = router.query.id; //get id from dynamic route

    //set product on page load from id in url
    useEffect(() => {
        if (!product.name) {
            setProduct(mod.products[Number(id)]);
        }
    });

    return (
        <>
            <Head>
                <title>SHTEM Website | {product.name}</title>
                <meta name="description" content="Product" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <main className="container pt-12 pb-24 flex gap-8">
                <div className="grow flex flex-col gap-4">
                    <Link href="/home">
                        <button className="bg-blue-500 text-2xl text-white px-3 pb-1.5 pt-1 rounded-lg mb-4 w-min whitespace-nowrap">
                            ← Back to all products
                        </button>
                    </Link>
                    <h1 className="text-5xl font-bold">
                        {product.name}
                    </h1>
                    <p className="text-xl">
                        {product.desc}
                    </p>
                    <AddToCart product={product} />
                </div>
                <img className="w-1/2" src={product.imgSrc} alt={product.name} />
            </main>
        </>
    )
}