import Head from 'next/head'
import { useEffect, useState } from 'react'
import BannerAd from '../components/BannerAd';
import Header from '../components/Header'
import HelpModal from '../components/HelpModal';
import ProductPreview from '../components/ProductPreview';
import { AccountType, ProductType } from '../util/types';
const constants = require('../util/constants');

//home page with product list to scroll through
export default function Home() {
    const [account, setAccount] = useState({} as AccountType);
    const [products, setProducts] = useState([undefined as unknown as ProductType]);
    const [helpOpen, setHelpOpen] = useState(false);
    
    useEffect(() => {
        if (!account.email) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        } else if (account.firstVisit) { //if this is the first visit to /home, open help modal
            setHelpOpen(true);
            let acc = {} as AccountType; //set firstVisit to true localStorage account
            Object.assign(acc, account);
            acc.firstVisit = false;
            localStorage.setItem("shtemAccount", JSON.stringify(acc));
        }
        if (!products[0]) {
            setProducts(constants.products);
        }
    }, [account]);

    return (
        <>
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header psaHtml="This is your personal shopping assistant!" />

            <main className="flex gap-4 mt-12 mb-8 mx-4 justify-center">
                <BannerAd imgSrc="https://i.pinimg.com/474x/75/31/da/7531da5dc18db7a921318bd986b55fa3--gucci-banner.jpg" href="/products/0" className="w-72" />
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

                <BannerAd imgSrc="https://c8.alamy.com/comp/2F60AP1/poster-advertising-dior-secret-garden-fashion-house-with-rihanna-in-paper-magazine-from-2015-advertisement-creative-christian-dior-2010s-advert-2F60AP1.jpg" href="/products/1" className="w-72" />

                <HelpModal isOpen={helpOpen} setIsOpen={setHelpOpen} account={account} />
            </main>
        </>
    )
}
