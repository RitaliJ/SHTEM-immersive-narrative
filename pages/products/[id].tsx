import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductType } from '../../util/types';
import Head from 'next/head';
const mod = require('../../util/products')

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
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <main className="container pt-12 pb-24">
                <h1>Product Name: {product.name}</h1>
                <img
                    src={product.imgSrc} // Route of the image file // currently a fake file src
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt={product.name}
                />
                <p>Description of product: {product.desc}</p>
            </main>
        </>
    )
}