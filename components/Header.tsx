import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { AccountType, CaptchaType, SurveyType } from "../util/types";
import CartModal from "./CartModal";
import { useRouter } from 'next/router'
import HelpPopover from "./HelpPopover";
import RedeemModal from "./RedeemModal";
import SurveyModal from "./SurveyModal";
import Captcha from "./Captcha";
const constants = require('../util/constants')

//header component
export default function Header(props: {
    addedToCart?: boolean,
    callback?: (value: boolean) => void,
    psaHtml?: ReactNode,
}) {
    const {addedToCart, callback, psaHtml} = props;
    const [account, setAccount] = useState({} as AccountType);
    const [isOpen, setIsOpen] = useState(false); //useState for cart modal opening/closing
    const [redeemOpen, setRedeemOpen] = useState(false); //useState for gift code redeem modal

    const [survey, setSurvey] = useState({} as SurveyType); //the survey shown in help popover
    const [surveyOpen, setSurveyOpen] = useState(false); //useState for opening/closing survey modal
    const [outOfSurveys, setOutOfSurveys] = useState(false); //true when all surveys are done
    const [surveyShowCode, setSurveyShowCode] = useState(false); //show survey gift code if true

    const [captcha, setCaptcha] = useState({} as CaptchaType); //the captcha shown in help popover
    const [captchaOpen, setCaptchaOpen] = useState(false); //useState for opening/closing captcha modal
    const [outOfCaptchas, setOutOfCaptchas] = useState(false); //true when all captchas are done
    const [captchaShowCode, setCaptchaShowCode] = useState(false); //show survey gift code if true
    
    const router = useRouter();

    //get account from localStorage on page load
    useEffect(() => {
        if (!account.email) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
                updateSurveyAndCaptcha();
            }
        }
    });

    //open modal when addedToCart becomes true
    useEffect(() => {
        if (addedToCart) {
            setIsOpen(true);
            refreshAccount();
        }
    }, [addedToCart]);

    //close modal
    useEffect(() => {
        if (!isOpen && callback) {
            callback(false);
        }
    }, [isOpen]);

    //helper to refresh account
    const refreshAccount = () => {
        const acc = localStorage.getItem("shtemAccount");
        if (acc !== "undefined" && acc !== null) {
            setAccount(JSON.parse(acc));
        }
    }

    //helper to update to first incomplete survey and captcha
    const updateSurveyAndCaptcha = () => {
        const acc = localStorage.getItem("shtemAccount");
        if (acc !== "undefined" && acc !== null) {
            const acc2 = JSON.parse(acc);
            let foundSurvey = false;
            let foundCaptcha = false;
            constants.surveys.forEach((s: SurveyType) => {
                if (!acc2.usedCodes.includes(s.code) && !foundSurvey) {
                    setSurvey(s);
                    foundSurvey = true;
                    if (localStorage.getItem(s.title) !== "undefined"
                        && localStorage.getItem(s.title) !== null) {
                        setSurveyShowCode(true);
                    } else {
                        setSurveyShowCode(false);
                    }
                }
            });
            constants.captchas.forEach((c: CaptchaType) => {
                if (!acc2.usedCodes.includes(c.code) && !foundCaptcha) {
                    setCaptcha(c);
                    foundCaptcha = true;
                    if (localStorage.getItem(c.title) !== "undefined"
                        && localStorage.getItem(c.title) !== null) {
                        setCaptchaShowCode(true);
                    } else {
                        setCaptchaShowCode(false);
                    }
                }
            });
            if (!foundSurvey) setOutOfSurveys(true);
            if (!foundCaptcha) setOutOfCaptchas(true);
        }
    }

    return (
        <div className="flex items-center gap-4 sticky top-0 px-6 duration-150
            bg-slate-200 shadow-md hover:shadow-lg bg-opacity-50 backdrop-blur-lg">
            <Link href="/home">
                <button className="text-xl font-bold">
                    Legendary Site
                </button>
            </Link>
            <span className="grow"></span>
            <button
                onClick={() => setRedeemOpen(true)}
                className="flex items-center hover:bg-gray-200 duration-150 p-2 rounded-lg"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <span className="text-lg text-green-600 font-bold">
                {account.balance && account.balance.toFixed(2)} Tokens
            </span>
            <button
                onClick={() => {router.pathname !== "/checkout" && setIsOpen(true)}}
                className="flex items-center hover:bg-gray-200 duration-150 p-2 rounded-lg"
            >
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                </svg>
                {router.pathname !== "/checkout" && account.items && account.items[0] &&
                    <p className="bg-red-500 font-bold text-white rounded-full px-2">
                        {account.items.length}
                    </p>
                }
            </button>
            <span className="text-lg">
                Logged in as {account.firstName}
            </span>
            <HelpPopover
                html={
                    <>
                        {psaHtml}
                        <p className="mb-2">
                            Need more tokens? Here are some options to get free tokens:
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
                    </>
                }
                outerHtml={
                    <>
                        <SurveyModal
                            isOpen={surveyOpen}
                            setIsOpen={setSurveyOpen}
                            survey={survey}
                            showCode={surveyShowCode}
                            setShowCode={setSurveyShowCode}
                        />
                        <Captcha
                            isOpen={captchaOpen}
                            setIsOpen={setCaptchaOpen}
                            captcha={captcha}
                            showCode={captchaShowCode}
                            setShowCode={setCaptchaShowCode}
                        />
                    </>
                }
            />
            <CartModal isOpen={isOpen} setIsOpen={setIsOpen} callback={refreshAccount} />
            <RedeemModal isOpen={redeemOpen} setIsOpen={setRedeemOpen} callback={() => {
                refreshAccount();
                updateSurveyAndCaptcha();
            }} />
        </div>
    )
}
