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

    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("home");
        if (x === null || x === "{}") { //if localstorage key doesn't exist, create it
            localStorage.setItem("home", JSON.stringify({millis: 0, clicks: 0}));
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
                const x = localStorage.getItem("home");
                if (x !== null) {
                    let x2 = JSON.parse(x);
                    x2.millis = millis + newMillis;
                    localStorage.setItem("home", JSON.stringify(x2));
                }
            }, 1000);
        }
    }, [newMillis]);

    //handle click event
    const handleClick = () => {
        const x = localStorage.getItem("home");
        if (x !== null) {
            let x2 = JSON.parse(x);
            x2.clicks += 1;
            localStorage.setItem("home", JSON.stringify(x2));
        }
    }

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
            setProducts(constants.products);
        }
    });

    useEffect(() => {
        if (account.firstVisit) { //if this is the first visit to /home, open help modal
            setHelpOpen(true);
            let acc = {} as AccountType; //set firstVisit to true localStorage account
            Object.assign(acc, account);
            acc.firstVisit = false;
            localStorage.setItem("shtemAccount", JSON.stringify(acc));
        }
    }, [account]);

    return (
        <>
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="https://media.discordapp.net/attachments/999069731732594699/1001568457806053486/unknown.png" />
            </Head>
            
            <Header psaHtml="This is your personal shopping assistant!" />

            <main className="flex gap-4 mt-12 mb-8 mx-4 justify-center">
                <BannerAd imgSrc="https://cdn.discordapp.com/attachments/996489060275208295/1001271760743829504/balenciaga_ad.png" href="/products/0" className="w-72" />
                <div>
                    <h1 className="text-5xl font-bold text-center mb-12 text-blue-400">
                        Buy our things
                    </h1>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {products[0] && products.map((p, i) =>
                            <ProductPreview key={i} product={p} />
                        )}
                    </div>
                </div>

                <BannerAd imgSrc="https://cdn.discordapp.com/attachments/996489060275208295/1001271725171945582/water_advertisement.png" href="/products/1" className="w-72" />
                <HelpModal isOpen={helpOpen} setIsOpen={setHelpOpen} account={account} />
            </main>
        </>
    )
}
