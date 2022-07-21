import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountType, ProductType, SurveyType } from '../../util/types';
import Head from 'next/head';
import AddToCart from '../../components/AddToCart';
import BannerAd from '../../components/BannerAd';
import PopupAd from '../../components/PopupAd';
import SurveyModal from '../../components/SurveyModal';
import NiceLink from '../../components/NiceLink';
const mod = require('../../util/constants')

export default function Product(){
    const [product, setProduct] = useState(undefined as unknown as ProductType);
    const [account, setAccount] = useState(undefined as unknown as AccountType);
    const [addedToCart, setAddedToCart] = useState(false); //useState for opening/closing cart modal
    const [adIsOpen, setAdIsOpen] = useState(false); //useState for showing/hiding popup ad
    const [surveyOpen, setSurveyOpen] = useState(false); //useState for opening/closing survey modal
    const [survey, setSurvey] = useState({} as SurveyType); //the survey shown in help popover
    const [surveyDone, setSurveyDone] = useState(false); //for updating account balance on survey submit
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
        if (!product) {
            setProduct(mod.products[Number(id)]);
            // setInterval(() => { //show pop up ad after 5 seconds of inital page load
            //     if (!adIsOpen) {
            //         setAdIsOpen(true);
            //     }
            // }, 8000);
        }
        if (!survey.title) { //choose a random survey from list of surveys
            setSurvey(mod.surveys[Math.floor(Math.random()*mod.surveys.length)]);
        }
    });

    //handle survey submit
    const surveySubmit = () => {
        setSurveyDone(true); //update usestate so account balance refreshes in header
        const acc = localStorage.getItem("shtemAccount");
        if (acc !== "undefined" && acc !== null) {
            setAccount(JSON.parse(acc));
        }
        setTimeout(() => { //get a new random survey after exit transition finishes
            setSurvey(mod.surveys[Math.floor(Math.random()*mod.surveys.length)]);
        }, 200);
    }

    return (
        <div className="h-screen flex flex-col">
            <Head>
                <title>{"SHTEM | " + (product && product.name)}</title>
            </Head>
            
            <Header
                addedToCart={addedToCart}
                callback={setAddedToCart}
                psaHtml={product && account && product.price > account.balance
                    ? <div className="flex flex-col items-center gap-3 leading-5">
                        It looks like you can't afford this purchase! You can fill out a quick survey
                        to get more tokens:
                        <button
                            onClick={() => setSurveyOpen(true)}
                            className="bg-blue-500 text-white text-lg rounded-lg px-3 py-1 w-min">
                            Survey
                        </button>
                    </div>
                    : "You can purchase this product!"
                }
                psaOuterHtml={
                    <SurveyModal
                        isOpen={surveyOpen}
                        setIsOpen={setSurveyOpen}
                        survey={survey}
                        account={account}
                        callback={surveySubmit}
                    />
                }
                surveySubmit={surveyDone}
                callback2={setSurveyDone}
            />

            <div className="grow flex gap-8 my-8 mx-4 justify-center">
                <BannerAd imgSrc="" href="/products/0" className="w-72" />
                <div className="max-w-[30rem] flex-col gap-2">
                    <NiceLink href="/home" text="← Continue shopping" className="mb-6" />
                    <img
                        src={product && product.imgSrc}
                        alt={product && product.name}
                        loading="lazy"
                    />
                </div>
                <div className="grow flex flex-col gap-4">
                    <div className="flex gap-4 text-lg font-semibold">
                        <h1 className="grow text-slate-900">
                            {product && product.name}
                        </h1>
                        <p className="text-slate-500 whitespace-nowrap">
                            {product && product.price} Tokens
                        </p>
                    </div>
                    <p className="w-full text-sm font-medium text-slate-700">
                        In stock
                    </p>
                    <p className="pb-6 border-b border-slate-200 space-x-2">
                        {product && product.desc}
                    </p>
                    <AddToCart product={product} callback={setAddedToCart} />
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </div>
                <BannerAd imgSrc="" href="/products/0" className="w-72" />
            </div>
            <PopupAd isOpen={adIsOpen} setIsOpen={setAdIsOpen} />
        </div>
    );
}