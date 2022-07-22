import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountType, CaptchaType, ProductType, SurveyType } from '../../util/types';
import Head from 'next/head';
import AddToCart from '../../components/AddToCart';
import BannerAd from '../../components/BannerAd';
import PopupAd from '../../components/PopupAd';
import SurveyModal from '../../components/SurveyModal';
import NiceLink from '../../components/NiceLink';
import ToggleButton from "../../components/ToggleButton";
import Captcha from '../../components/Captcha';
const constants = require('../../util/constants')

export default function Product(){
    const [product, setProduct] = useState(undefined as unknown as ProductType);
    const [account, setAccount] = useState(undefined as unknown as AccountType);
    const [addedToCart, setAddedToCart] = useState(false); //useState for opening/closing cart modal
    const [adIsOpen, setAdIsOpen] = useState(false); //useState for showing/hiding popup ad
    const [survey, setSurvey] = useState({} as SurveyType); //the survey shown in help popover
    const [surveyOpen, setSurveyOpen] = useState(false); //useState for opening/closing survey modal
    const [surveyDone, setSurveyDone] = useState(false); //for updating account balance on survey submit
    const [outOfSurveys, setOutOfSurveys] = useState(false); //true when all surveys are done
    const [captcha, setCaptcha] = useState({} as CaptchaType); //the captcha shown in help popover
    const [captchaOpen, setCaptchaOpen] = useState(false); //useState for opening/closing captcha modal
    const [outOfCaptchas, setOutOfCaptchas] = useState(false); //true when all captchas are done
    const [size, setSize] = useState([""]);
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
                chooseNextSurvey();
                chooseNextCaptcha();
            }
        }
        if (!product) {
            setProduct(constants.products[Number(id)]);
            // setInterval(() => { //show pop up ad after 5 seconds of inital page load
            //     if (!adIsOpen) {
            //         setAdIsOpen(true);
            //     }
            // }, 8000);
        }
    });

    //handle survey submit
    const surveySubmit = () => {
        setTimeout(() => { //get a new random survey after exit transition finishes
            chooseNextSurvey();
        }, 200);
    }

    //helper top choose the first survey not completed yet
    const chooseNextSurvey = () => {
        for (let i = 0; i < constants.surveys.length; i++) {
            if (localStorage.getItem(constants.surveys[i].title) === "undefined"
                || localStorage.getItem(constants.surveys[i].title) === null) {
                setSurvey(constants.surveys[i]);
                break;
            } else if (i === constants.surveys.length - 1) { //if out of surveys, set usestate
                setOutOfSurveys(true);
            }
        }
    }

    //handle captcha submit
    const captchaSubmit = () => {
        setTimeout(() => { //get a new random survey after exit transition finishes
            chooseNextCaptcha();
        }, 200);
    }

    //helper top choose the first captcha not completed yet
    const chooseNextCaptcha = () => {
        for (let i = 0; i < constants.captchas.length; i++) {
            if (localStorage.getItem(constants.captchas[i].title) === "undefined"
                || localStorage.getItem(constants.captchas[i].title) === null) {
                setCaptcha(constants.captchas[i]);
                break;
            } else if (i === constants.captchas.length - 1) { //if out of surveys, set usestate
                setOutOfCaptchas(true);
            }
        }
    }

    //helper for setting size
    const updateSize = (name: string, on: boolean) => {
        if (on) {
            setSize([...size, name].filter(e => e !== ""));
        } else {
            setSize(size.filter(e => e !== name));
        }
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
                    ? <div className="flex flex-col items-center gap-1 leading-6 text-lg">
                        <p className="mb-2">
                            It looks like you can't afford this purchase! Here are some options for earning
                            more tokens:
                        </p>
                        <button
                            onClick={() => {if (!outOfSurveys) setSurveyOpen(true)}}
                            className={"text-lg rounded-lg px-3 py-1 w-min whitespace-nowrap "
                                + (outOfSurveys ? "bg-gray-200 text-gray-400" : "bg-blue-500 text-white")}>
                            <div className="flex gap-2">
                                <span>Survey</span>
                                <span>•</span>
                                <span>100 Tokens</span>
                            </div>
                        </button>
                        <button
                            onClick={() => {if (!outOfCaptchas) setCaptchaOpen(true)}}
                            className={"text-lg rounded-lg px-3 py-1 w-min whitespace-nowrap "
                                + (outOfCaptchas ? "bg-gray-200 text-gray-400" : "bg-blue-500 text-white")}>
                            <div className="flex gap-2">
                                <span>Captcha</span>
                                <span>•</span>
                                <span>80 Tokens</span>
                            </div>
                        </button>
                        <button
                            onClick={() => {}}
                            className="bg-blue-500 text-white text-lg rounded-lg px-3 py-1 w-min whitespace-nowrap">
                            <div className="flex gap-2">
                                <span>Other thing</span>
                                <span>•</span>
                                <span>∞ Tokens</span>
                            </div>
                        </button>
                    </div>
                    : "You can purchase this product!"
                }
                psaOuterHtml={
                    <>
                        <SurveyModal
                            isOpen={surveyOpen}
                            setIsOpen={setSurveyOpen}
                            survey={survey}
                            callback={surveySubmit}
                        />
                        <Captcha
                            isOpen={captchaOpen}
                            setIsOpen={setCaptchaOpen}
                            captcha={captcha}
                            callback={captchaSubmit}
                        />
                    </>
                }
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
                    <p>Choose Size</p>
                    <a href = 'https://www.theshopforward.com/pages/poly-cotton-unisex-t-shirt-size-chart'>Size Chart</a>
                    <div className="flex flex-wrap gap-1 justify-center">
                        <ToggleButton label="XXS" callback={updateSize} />
                        <ToggleButton label="XS" callback={updateSize} />
                        <ToggleButton label="S" callback={updateSize} />
                        <ToggleButton label="M" callback={updateSize} />
                        <ToggleButton label="L" callback={updateSize} />
                        <ToggleButton label="XL" callback={updateSize} />
                        <ToggleButton label="2XL" callback={updateSize} />
                        <ToggleButton label="3XL" callback={updateSize} />
                    </div>
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