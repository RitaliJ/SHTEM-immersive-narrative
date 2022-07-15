import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductPreview from '../components/ProductPreview';
import { AccountType } from '../util/types';

export default function Home() {
    const [account, setAccount] = useState({} as AccountType);

    useEffect(() => {
        if (!account.email) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        }
    });

    return (
        <div className="bg-white">
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header account={account} />

            <main className="container pt-12 pb-24">
                <h1 className="text-7xl font-bold text-center mb-12">
                    Buy our things
                </h1>
                <div className="flex justify-center gap-4 flex-wrap">
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                    <ProductPreview
                        imgSrc="https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg"
                        name="MICKE desk"
                        desc="Top 10 desk of all time"
                        price={39.99}
                        id={0}
                    />
                </div>
            </main>
        </div>
    )
}
