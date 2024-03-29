import Head from 'next/head'
import { useEffect, useState } from 'react'
import BannerAd from '../components/BannerAd';
import CookiesModal from '../components/CookiesModal';
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
    const [updateTarget, setUpdateTarget] = useState(false); //update target item when this becomes true
    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add
    const [cookies, setCookies] = useState(false); //whether to show cookies modal or not

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("home");
        if (x === null || x === "{}" || x === "undefined") { //if localstorage key doesn't exist, create it
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
                if (x !== null && x !== "undefined") {
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
        if (x !== null && x !== "undefined") {
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
                if (JSON.parse(acc).showCookies) {
                    setCookies(true);
                }
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

    useEffect(() => {
        if (!helpOpen) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc) {
                setAccount(JSON.parse(acc));
            }
        }
    }, [helpOpen]);

    return (
        <>
            <Head>
                <title>Sahara Prime</title>
                <meta name="description" content="Home" />
                <link rel="icon" href="/logo.png" />
            </Head>
            
            <Header
                psaHtml={account && `This is your personal shopping assistant.
                Find the "${account.target}" item and purchase it!`}
                updateTarget={updateTarget}
                resetTargetBool={() => setUpdateTarget(false)}
            />

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
                <HelpModal isOpen={helpOpen} setIsOpen={setHelpOpen} account={account} callback={() => setUpdateTarget(true)} />
                <CookiesModal isOpen={cookies} setIsOpen={setCookies} />
            </main>
        </>
    )
}
