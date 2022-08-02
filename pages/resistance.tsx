import Head from "next/head";

//page that you're directed to when you press "join the resistance"
export default function Resistance() {
    return (
        <>
            <Head>
                <title>SHTEM Website | Resistance</title>
                <meta name="description" content="Resistance" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-center items-center">
                <div className="w-screen flex flex-col gap-4 text-xl pt-24 max-w-[30rem]">
                    <p>Welcome to the resistance. We hope you are ready for the monumental battle ahead.</p>
                    <p>Check your email for information about the first steps of your resistance journey.</p>
                    <p>Good luck.</p>
                </div>
            </div>
        </>
    )
}
