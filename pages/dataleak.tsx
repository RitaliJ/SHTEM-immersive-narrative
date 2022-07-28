import Head from "next/head";
import { useEffect, useState } from "react";
import { AccountType, ProductType } from "../util/types";
const constants = require('../util/constants');

//page where all collected data is displayed
export default function Dataleak() {
    const [account, setAccount] = useState(undefined as unknown as AccountType);
    const [interests, setInterests] = useState([""]);
    const [extro1, setextro1] = useState("");
    const [extro2, setextro2] = useState("");
    const [race, setrace] = useState([""]);
    const [gender, setgender] = useState("");
    const [vacationCaptcha, setVacationCaptcha] = useState([false]);
    
    const updateUserVacationCaptchaLabels = (selections: boolean[], referenceList: string[]) => {
        let labels = [];
        for (var i = 0; i < selections.length; i++) {
            if (selections[i]) {
                labels[i] = referenceList[i];
            }
        }
        return labels;
    };

    type Keys = {
        login: {millis: number, clicks: number},
        terms: {millis: number, clicks: number},
        survey: {millis: number, clicks: number},
        home: {millis: number, clicks: number},
        checkout: {millis: number, clicks: number},
        purchase: {millis: number, clicks: number},
        products: {millis: number, clicks: number}[],
    };
    const [data, setData] = useState<Keys>();

    //load time and click data from localStorage
    useEffect(() => {
        if (!account) {
            const acc = localStorage.getItem('shtemAccount');
            if (acc) setAccount(JSON.parse(acc));

            const int = localStorage.getItem('shtemInterests');
            if (int) setInterests(JSON.parse(int));
            const inf = localStorage.getItem('shtemInfo1');
            if (inf) setextro1(JSON.parse(inf));
            const ex = localStorage.getItem('shtemInfo2');
            if (ex) setextro2(JSON.parse(ex));
            const eth = localStorage.getItem('shtemInfo3');
            if (eth) setrace(JSON.parse(eth));
            const gen = localStorage.getItem('shtemInfo4');
            if (gen)  setgender(JSON.parse(gen));
            
            const vacation = localStorage.getItem('Select the scenes that you would want as a part of your next vacation.');
            if (vacation && vacation !== "undefined") setVacationCaptcha(JSON.parse(vacation));

            let tempData = {} as Keys;

            const login = localStorage.getItem('login');
            if (login) tempData.login = JSON.parse(login);

            const terms = localStorage.getItem('terms');
            if (terms) tempData.terms = JSON.parse(terms);

            const survey = localStorage.getItem('survey');
            if (survey) tempData.survey = JSON.parse(survey);

            const home = localStorage.getItem('home');
            if (home) tempData.home = JSON.parse(home);

            const checkout = localStorage.getItem('checkout');
            if (checkout) tempData.checkout = JSON.parse(checkout);

            const purchase = localStorage.getItem('purchase');
            if (purchase) tempData.purchase = JSON.parse(purchase);

            let products: {millis: number, clicks: number}[] = [];
            constants.products.forEach((p: ProductType) => {
                const prod = localStorage.getItem("products/" + p.id);
                if (prod) products.push(JSON.parse(prod));
            });
            tempData.products = products;

            setData(tempData);
        }
    }, []);

    const indicator = () => {
        if ((extro1 === "What's free time? I'm always working." || extro1 === "Chill at home") && (extro2 === "I like to work independently")) {
            return "It seems that you are an introvert"
        } else if ((extro2 === " I like to work in a large group fosho") && (extro1 === "Spend time outside with friends")) {
            return "It seems as if you are an extrovert"
        } else {
            return "It seems as if you are in ambivert"
        } 
    }
    
    const formatPhone = (str: string) => {
        return `(${str.substring(0, 3)})${str.substring(3, 6)}-${str.substring(6)}`;
    }

    return (
        <div className="w-screen h-screen overflow-hidden">
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col gap-1 p-12 items-center font-mono bg-gray-900 text-red-600 w-full h-full overflow-y-auto">
                <div className="w-min whitespace-nowrap">
                    <h1 className="text-2xl font-bold">
                        {account && account.firstName + "'"}s data
                    </h1>
                    {account && <>
                        <p className="font-bold underline mt-4">
                            Account information
                        </p>
                        <div className="flex gap-2">
                            <p>Email:</p>
                            <p>{account.email}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>Name:</p>
                            <p>{account.firstName} {account.lastName}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>Phone number:</p>
                            <p>{formatPhone(account.phone)}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>Date of birth:</p>
                            <p>{account.DOB.month}/{account.DOB.day}/{account.DOB.year}</p>
                        </div>

                        <p className="font-bold underline mt-4">
                            Purchase information
                        </p>
                        <div className="flex gap-2">
                            <p>Account balance:</p>
                            <p>{account.balance.toFixed(2)} Heartbeats</p>
                        </div>
                        <p>Items purchased:</p>
                        <div className="flex flex-col gap-1 pl-6">
                            {account.purchases && account.purchases[0] ? account.purchases.map((x, i) =>
                                <div key={i} className="flex gap-2">
                                    <p>•</p>
                                    <p>{x.quantity}×</p>
                                    <p>{x.product.name}</p>
                                    <p>(Size {x.size})</p>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>None</p>
                                </div>
                            )}
                        </div>
                        <p>Gift codes used:</p>
                        <div className="flex flex-col gap-1 pl-6">
                            {account.usedCodes[0] ? account.usedCodes.map((x, i) =>
                                <div key={i} className="flex gap-2">
                                    <p>•</p>
                                    <p>{x}</p>
                                    
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>None</p>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <p>Filled out newsletter:</p>
                            <p>{account.doneNewsletter ? "Yes" : "No"}</p>
                        </div>

                        <p className="font-bold underline mt-4">
                            Time spent and number of clicks on each page
                        </p>
                        {data && <div className="flex flex-col gap-1 pl-6">
                            {data.login &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Login page:
                                    </p>
                                    <p>{data.login.millis}ms, {data.login.clicks === 1 ? "1 click" : data.login.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.terms &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Terms and conditions page:
                                    </p>
                                    <p>{data.terms.millis}ms, {data.terms.clicks === 1 ? "1 click" : data.terms.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.survey &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Survey page:
                                    </p>
                                    <p>{data.survey.millis}ms, {data.survey.clicks === 1 ? "1 click" : data.survey.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.home &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Home page:
                                    </p>
                                    <p>{data.home.millis}ms, {data.home.clicks === 1 ? "1 click" : data.home.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.checkout &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Checkout page:
                                    </p>
                                    <p>{data.checkout.millis}ms, {data.checkout.clicks === 1 ? "1 click" : data.checkout.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.purchase &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Purchase confirmation page:
                                    </p>
                                    <p>{data.purchase.millis}ms, {data.purchase.clicks === 1 ? "1 click" : data.purchase.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.products.map((p, i) =>
                                <div key={i} className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        {'"' + constants.products[i].name + '"'} product page:
                                    </p>
                                    <p>{p.millis}ms, {p.clicks === 1 ? "1 click" : p.clicks + " clicks"}</p>
                                </div>
                            )}
                        </div>}

                        <p className="font-bold underline mt-4">
                            Some of your characteristics
                        </p>
                        <p>Interests:</p>
                        <div className="flex flex-col gap-1 pl-6">
                            {interests[0] ? (
                                interests.map((x, i) =>
                                    <div key={i} className="flex gap-2">
                                        <p>•</p>
                                        <p>{x}</p>
                                    </div>
                                )
                            ) : (
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>None</p>
                                </div>
                            )}
                        </div>
                        <p>Are you an extrovert or introvert?</p>
                        <div className="flex flex-col gap-1 pl-6">
                            <div className="flex gap-2">
                                <p>•</p>
                                <p>{indicator()}</p>
                            </div>
                        </div>
                        <p>Your ethnicity:</p>
                        <div className="flex flex-col gap-1 pl-6">
                            {race && race[0] &&
                                race.map((x, i) =>
                                    <div key={i} className="flex gap-2">
                                        <p>•</p>
                                        <p>{x}</p>
                                    </div>
                                )
                            }
                        </div>
                        <p>Your pronouns: {gender}</p>
                        <div className="flex flex-col gap-1 pl-6">
                            {vacationCaptcha &&
                                updateUserVacationCaptchaLabels(vacationCaptcha, constants.vacationCaptchaLabels).map((x, i) =>
                                    <div key={i} className="flex gap-2">
                                        <p>•</p>
                                        <p>{x}</p>
                                    </div>
                                )
                            }
                        </div>
                    </>}
                </div>
            </main>
        </div>
    )
}

