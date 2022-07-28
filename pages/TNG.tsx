import Head from "next/head";

//page explaining TNG and such
export default function OurResearch() {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <Head>
                <title>SHTEM Website | TNG</title>
                <meta name="description" content="TNG" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className="flex flex-col w-full h-full overflow-y-auto bg-red-200">
                <div className="sticky top-0 flex gap-4 items-end px-6 py-2 bg-red-400 text-white">
                    <p className="text-center text-2xl font-bold">
                        The TNGers Purpose
                    </p>
                    <p>•</p>
                    <p className="text-lg">
                        Our intentions are not to harm you. Rather, it is to open your eyes to the truth about your cell-phone
                    </p>
                </div>
                <div className="container grow text-black flex flex-col gap-12 py-12">
                    <section className="flex flex-col gap-4">
                        <h1 className="text-2xl">
                            Surveillance Capitalism
                        </h1>
                        <p>
                            You are always being watched. No, not by the person in the white van from across
                            the street. Your phone, your computer, you TV, and even your fridge is watching you.
                            They are observing you, analyzing you, understanding you. And they are doing a good
                            job at it as well. The computers we surround ourselves with now know us better than
                            we know ourselves! The amount of data collected, it all tells a story: the story of
                            you. A prime example is Sahara Prime. In just twenty minutes, it knows your address,
                            your name, what type of person you are, your interests, and so much more. Everything
                            you do on the computer is being monitored and stored through data. There is so much
                            data about you that if it were to go in to the wrong hands, the consequences would
                            be insufferable. Your privacy is being taken away by these computers.
                        </p>
                        <p>
                            What makes matters worse is that your personal computers aren't the only things
                            that know who you are. The data being collected about you is being sold. Sold to
                            companies who will do anything to promote their brand and find the perfect audience.
                            Ever search for a product on Amazon and then find an ad for that exact product on
                            your instagram feed? That is surveillance capitalism at its finest. Surveillance
                            Capitalism is the economy which is centered around the transfer of data collected of
                            you to corporations and businesses. It is how facebook and other companies make
                            revenue. They sell you.
                        </p>
                        <p>
                            And aren't you wondering why such companies would want information about who you
                            would bring to disneyland from your family? These corporations have algorithms that
                            can create inferences about you based on this data collected. These inferences
                            indicate your moods and lead to the company having something called a behavioral
                            surplus. Behavioral surplus, coined by Harvard Professor Shoshana Zuboff, is the
                            surplus of data collected far exceeding the amount required to improve products and
                            services. This additional data is used to train models that predict users’ behavior
                            and represent their wants, values, interests, and more. With this behavioral surplus,
                            you are the perfect victim for these corporations to release their advertisements,
                            waiting for you to bite. And whether or not you bite is also stored as data and is
                            sold to get a better idea of what type of advertisement and product works on you.
                        </p>
                        <p>
                            These ads have the ability to impact you for the worse. You may think that ads are
                            simply trying to help you find the perfect purchase, but there is so much more than
                            that. Take politics for example. Recent trends indicate a more polarizing America,
                            and one cause of that has to be social media. With the data about your political
                            preference, your feed will only have stories and articles with your political
                            preference since you have a higher tendency to open those. The more articles you
                            open, the indications point to the more radical your views get. The rabbit hole
                            just continues going down.
                        </p>
                    </section>
                    <section className="flex flex-col gap-4">
                        <h1 className="text-2xl">
                            Attention Economy
                        </h1>
                        <p>
                            Nowadays, our world revolves around our phone. Our interests, Our friends, Who
                            we see ourselves, is all attatched to that small device in your hands. That is
                            the way social media creators want it. Their entire purpose is to see how much
                            of your life you can give to them. They create these algorithms and these
                            features to get you hooked, addicted onto your phone. Features like push
                            notifications, beautfiul animations and designs, like buttons, infinite scrolls,
                            and much more are all just pieces in a chess game to capture its king: you.
                            Studies show that the brain of someone addicted to their phone is very much
                            similar to the brain of someone who has a drug or gambling problem. This constant
                            barrage of shallow rewards rewires your brain to want more likes, retweets, and
                            emoji reactions, which leads to social media addiction. It is a never ending
                            cycle, pulling you in for more and more screen time. Why would they do this?
                            The more time you spend on your phone, the more data they collect from you. The
                            more data that they collect about you, the more companies are willing to spend
                            for that data. Also, the more time you spend on your phone, the more ads you
                            will be exposed to.
                        </p>
                        <p>
                            The attention economy has negative effects for the user. Once addicted, the
                            less focus and attention they will pay on particular things. They will be less
                            productive and lazy. Studies show that those addicted to social media perform
                            worse on cogitive tests which test the ability to multitask and be attentive.
                            This particularly impacts students. By spending time on social media, they are
                            spending less time on homework or having a social life. Thus, either their
                            grades drop, or they rush to finish their homework at the last possible second,
                            evoking feelings of stress. On top of that, lack of focus and attentiveness can
                            have a terrible impact on a student's learning ability.
                        </p>
                    </section>
                    <section className="flex flex-col gap-4">
                        <h1 className="text-2xl">
                            What You Can Do
                        </h1>
                        <p>
                            You are now aware of the social media endemic. We have opened your eyes. Now
                            the question is: will you free yourself? There are so many things you can
                            choose to do but the first thing is to have a consciencious effort against it.
                            The first task: set a timer on your phone for sixty minutes and try to not use
                            your phone for that time period. Once you did that, you have a choice. You can
                            either choose to join the resistance and help stop the growing attention economy
                            or you can continue on shopping. This is your choice.
                        </p>
                    </section>
                    <div className="flex gap-2 justify-center">
                        <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-xl">
                            Join The Resistance
                        </button>
                        <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-xl">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
