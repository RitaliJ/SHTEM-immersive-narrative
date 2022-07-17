import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductType } from '../../util/types';
import Head from 'next/head';
import AddToCart from '../../components/AddToCart';
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