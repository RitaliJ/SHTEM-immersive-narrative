import Head from "next/head";
import { useEffect, useState } from "react";
import { AccountType, ProductType } from "../util/types";
import { formatMs } from "../util/heplers";
import InputGroup from "../components/InputGroup";
const constants = require('../util/constants');

//page where all collected data is displayed
export default function Dataleak() {
    const [account, setAccount] = useState(undefined as unknown as AccountType);
    const [interests, setInterests] = useState([""]);
    const [extro1, setextro1] = useState("");
    const [extro2, setextro2] = useState("");
    const [race, setrace] = useState([""]);
    const [gender, setgender] = useState("");
    // const [vacationCaptcha, setVacationCaptcha] = useState([false]);
    const [poliCaptcha, setPoliCaptcha] = useState([false]);
    const [famfeud, setfamfeud] = useState({} as {[key: string]: string});
    // const [shoeCaptcha, setShoeCaptcha] = useState([false]);
    // const [starbucks, setstarbucks] = useState({} as {[key: string]: string});
    const [code, setCode] = useState("");
    const updateCaptchaLabels = (selections: boolean[], referenceList: string[]) => {
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

    function checkCode() {
        if (code == "2896") {
            location.href = "/TNG";
        } else {
            return "Incorrect Code. Please Try Again";
        }
    }

    //load time and click data from localStorage
    useEffect(() => {
        if (!account) {
            const acc = localStorage.getItem('shtemAccount');
            if (acc && acc !== "undefined") setAccount(JSON.parse(acc));

            const int = localStorage.getItem('shtemInterests');
            if (int && int !== "undefined") setInterests(JSON.parse(int));
            const inf = localStorage.getItem('shtemInfo1');
            if (inf && inf !== "undefined") setextro1(JSON.parse(inf));
            const ex = localStorage.getItem('shtemInfo2');
            if (ex && ex !== "undefined") setextro2(JSON.parse(ex));
            const eth = localStorage.getItem('shtemInfo3');
            if (eth && eth !== "undefined") setrace(JSON.parse(eth));
            const gen = localStorage.getItem('shtemInfo4');
            if (gen && gen !== "undefined") setgender(JSON.parse(gen));
            const familyfeud = localStorage.getItem("Family Feud");
            if (familyfeud && familyfeud !== "undefined") setfamfeud(JSON.parse(familyfeud));
            // const bucks = localStorage.getItem("What Starbucks drink are you?");
            // if (bucks && bucks !== "undefined") setstarbucks(JSON.parse(bucks));

            // const vacation = localStorage.getItem('Select the scenes that you would want as a part of your next vacation.');
            // if (vacation && vacation !== "undefined") setVacationCaptcha(JSON.parse(vacation));
            const issues = localStorage.getItem("Select the political issues that matter the most to you.");
            if (issues && issues !== "undefined") setPoliCaptcha(JSON.parse(issues));
            // const shoe = localStorage.getItem("Select the type of shoe that you would find most appealing");
            // if (shoe && shoe != "undefined") setShoeCaptcha(JSON.parse(shoe));

            let tempData = {} as Keys;

            const login = localStorage.getItem('login');
            if (login && login !== "undefined") tempData.login = JSON.parse(login);
            const terms = localStorage.getItem('terms');
            if (terms && terms !== "undefined") tempData.terms = JSON.parse(terms)
            const survey = localStorage.getItem('survey');
            if (survey && survey !== "undefined") tempData.survey = JSON.parse(survey);
            const home = localStorage.getItem('home');
            if (home && home !== "undefined") tempData.home = JSON.parse(home);
            const checkout = localStorage.getItem('checkout');
            if (checkout && checkout !== "undefined") tempData.checkout = JSON.parse(checkout);
            const purchase = localStorage.getItem('purchase');
            if (purchase && purchase !== "undefined") tempData.purchase = JSON.parse(purchase);

            let products: {millis: number, clicks: number}[] = [];
            constants.products.forEach((p: ProductType) => {
                const prod = localStorage.getItem("products/" + p.id);
                if (prod && prod !== "undefined") products.push(JSON.parse(prod));
            });
            tempData.products = products;

            setData(tempData);
        }
    }, []);

    const indicator = () => {
        if ((extro1 === "What's free time? I'm always working." || extro1 === "Chill at home") && (extro2 === "I like to work independently")) {
            return "It seems that you are an introvert";
        } else if ((extro2 === "I like to work in a large group fosho") && (extro1 === "Spend time outside with friends")) {
            return "It seems as if you are an extrovert";
        } else {
            return "It seems as if you are in ambivert";
        } 
    }

    const flying = () => {
        if (famfeud["Which superpower would you not want to have?"] == "Flying") {
            return "Scared of Heights";
        } else if (famfeud["Which superpower would you not want to have?"] == "Invisibility") {
            return "Likely to have a desire for validation or fear of being overlooked";
        } else if (famfeud["Which superpower would you not want to have?"] == "Mind reading") {
            return "Likely to be anxious or people pleaser";
        }
    }
    const disneyland = () => {
        if (famfeud["Name the family member that you would bring with you on a trip to disneyland."] == "None") {
            return "A probable lone wolf or perhaps is embarrassed by their family.";
        } else if (famfeud["Name the family member that you would bring with you on a trip to disneyland."] == "Sibling") {
            return "Has close bond with sibling";
        } else if (famfeud["Name the family member that you would bring with you on a trip to disneyland."] == "Family dog") {
            return "Thinks of their dog as part of their family";
        } else if (famfeud["Name the family member that you would bring with you on a trip to disneyland."] == "Favorite Grandparent") {
            return "Likely has or had a close bond with at least one grandparent";
        }
    } 
    const plane = () => {
        if (famfeud["Name the first thing you order on a plane."] == "Chips") {
            return "Has a tendency for salty food.";
        } else if (famfeud["Name the first thing you order on a plane."] == "Chocolate") {
            return "Likely has a sweet tooth";
        } else if (famfeud["Name the first thing you order on a plane."] == "Alcohol") {
            return "Likely an alcoholic of some sort, or likes such beverages";
        } else if (famfeud["Name the first thing you order on a plane."] == "Ham sandwiches") {
            return "Likely not vegan";
        }
    }
    const wakeUp = () => {
        if (famfeud["Name the first thing you do when you wake up."] == "Eat a bowl of cereal") {
            return "Would be a good target for cereal ads";
        } else if (famfeud["Name the first thing you do when you wake up."] == "Go back to sleep") {
            return "Perhaps a little more relaxed or could be sleep-deprived";
        } else if (famfeud["Name the first thing you do when you wake up."] == "Check notifications") {
            return "Social Media Addicted";
        } else if (famfeud["Name the first thing you do when you wake up"] == "Turn on your coffee machine") {
            return "Associated with Caffeine Addiction"; 
        }
    }
    const saturday = () => {
        if (famfeud["What would be your ideal Saturday afternoon?"] == "Standing overnight in a huge line for concert tickets but when you get to the front, they are sold out") {
            return "Dedicated and has a love for music";
        } else if (famfeud["What would be your ideal Saturday afternoon?"] == "Renewing your license at the DMV") {
            return "Sees Saturdays as days that could be of much use";
        } else if (famfeud["What would be your ideal Saturday afternoon?"] == "Getting a cavity filled") {
            return "Health-conscious";
        } else if (famfeud["What would be your ideal Saturday afternoon?"] == "Missing your flight") {
            return "Either huge on traveling, or needs to travel a lot";
        }
    }
    const destination = () => {
        const x = (famfeud["Name your favorite travel destination."]);
        if (x) return ("Is a target for vacation ads to " + x);
        else return "";
    }
    const presGame = () => {
        const x = (famfeud["Name a US president that would be the worst at video games."]);
        if (x == "Abraham Lincoln") {
            return ("Likely to have minimal knowledge on US presidents");
        } else if (x == "Barack Obama") {
            return ("Likely to be critical of Obama Administration");
        } else if (x == "Donald Trump") {
            return ("Likely to be critical of Trump Administration");
        } else if (x == "Millard Fillmore") {
            return ("Likely to know too much of US history");
        } else if (x == "Ulysses S. Grant") {
            return ("Likely to have an interest in US history");
        }
    }
    const screenTime = () => {
        const x = (famfeud["What was your average daily amount of screen time last week?"]);
        if (x == "1-3 hours") {
            return ("Spends 15 - 46 full days on their phone in a year")
        } else if (x == "4-6 hours" )  {
            return ("Spends 61 - 91 full days on their phone in a year")
        }else if (x == "7-9 hours") {
            return("Spends 106 - 137 full days on their phone in a year")
        } else if (x == "9-11 hours" ) {
            return ("Spends 137 - 167 full days on their phone a year")
        } else if (x == "11+ hours") {
            return("spends almost 50% of their year on their phone")
        }
    }
    const anthem = () => {
        const x = (famfeud["Name your favorite song other than the national anthem that represents the USA."]);
        if (x == "Take Me Home, Country Roads") {
            return ("A country music fan")
        } else if (x == "Party in the U.S.A.") {
            return ("Likely enjoys pop music and Miley Cyrus")
        } else if (x == "National anthem (Fergie version)") {
            return ("Likely keeps up with trends and memes online")
        } else if (x == "This Land is Your Land") {
            return ("A more refined, traditional person")
        }
    }

    const formatPhone = (str: string) => {
        return `(${str.substring(0, 3)})${str.substring(3, 6)}-${str.substring(6)}`;
    }

    return (
        <div className="w-screen h-screen overflow-hidden">
            <Head>
                <title>{account && account.firstName + "'s data"}</title>
                <meta name="description" content="Dataleak" />
                <link rel="icon" href="/tng.png" />
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
                                    <p>{formatMs(data.login.millis)}; {data.login.clicks === 1 ? "1 click" : data.login.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.terms &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Terms and conditions page:
                                    </p>
                                    <p>{formatMs(data.terms.millis)}; {data.terms.clicks === 1 ? "1 click" : data.terms.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.survey &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Survey page:
                                    </p>
                                    <p>{formatMs(data.survey.millis)}; {data.survey.clicks === 1 ? "1 click" : data.survey.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.home &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Home page:
                                    </p>
                                    <p>{formatMs(data.home.millis)}; {data.home.clicks === 1 ? "1 click" : data.home.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.checkout &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Checkout page:
                                    </p>
                                    <p>{formatMs(data.checkout.millis)}; {data.checkout.clicks === 1 ? "1 click" : data.checkout.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.purchase &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        Purchase confirmation page:
                                    </p>
                                    <p>{formatMs(data.purchase.millis)}; {data.purchase.clicks === 1 ? "1 click" : data.purchase.clicks + " clicks"}</p>
                                </div>
                            }
                            {data.products.map((p, i) =>
                                <div key={i} className="flex gap-2">
                                    <p>•</p>
                                    <p className="grow pr-4">
                                        {'"' + constants.products[i].name + '"'} product page:
                                    </p>
                                    <p>{formatMs(p.millis)}; {p.clicks === 1 ? "1 click" : p.clicks + " clicks"}</p>
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
                        <p>Inferences We Made About You:</p>
                        <div className="flex flex-col gap-1 pl-6">
                            {flying() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{flying()}</p>
                                </div>
                            }
                            {disneyland() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{disneyland()}</p>
                                </div>
                            }
                            {plane() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{plane()}</p>
                                </div>
                            }
                            {wakeUp() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{wakeUp()}</p>
                                </div>
                            }
                            {saturday() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{saturday()}</p>
                                </div>
                            }
                            {destination() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{destination()}</p>
                                </div>
                            }
                            {presGame() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{presGame()}</p>
                                </div>
                            }
                            {screenTime() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{screenTime()}</p>
                                </div>
                            }
                            {anthem() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>{anthem()}</p>
                                </div>
                            }
                            {!flying() && !disneyland() && !plane() && !wakeUp() && !saturday() &&
                                !destination() && !presGame() && !screenTime() && !anthem() &&
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>None</p>
                                </div>
                            }
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
                        <p>The political issues you care for the most:</p>

                        <div className="flex flex-col gap-1 pl-6">
                            {
                            poliCaptcha ? updateCaptchaLabels(poliCaptcha, constants.politicalIssueCaptchaLabels).map((x, i) =>
                                <div key={i} className="flex gap-2">
                                    <p>•</p>
                                    <p>{x}</p>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <p>•</p>
                                    <p>None</p>
                                </div>
                            )
                            }
                        </div>

                        <div className="flex justify-center">
                            <div className="text-xl text-red-600 flex flex-col gap-4 mt-12 mb-12 w-min whitespace-nowrap">
                                <p>Enter code given by Kibble for next phase.</p>
                                <InputGroup label="Code" callback={setCode} />
                                <button
                                    className="bg-red-600 text-gray-900 px-3 py-1 rounded-lg"
                                    onClick={() => checkCode()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>}
                </div>
            </main>
        </div>
    )
}







