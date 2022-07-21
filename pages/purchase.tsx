import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

//confirmation page after purchasing products
export default function Purchase() {

    return (
        <>
            <Head>
                <title>SHTEM Website | Checkout</title>
                <meta name="description" content="Cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <Header/>
                <main className="container pt-12 pb-24 flex flex-col gap-4 items-center">
                 <h1 className="text-3xl">
                     Thank you for your purchase.
                 </h1>
                 <p className="text-xl">
                    You should receive a confirmation email shortly.
                 </p>
                 <div>
                    <button className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-green-500 hover:bg-green-700 text-white mt-8 float-left">I have received my confirmation email.</button>
                    <button className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-red-500 hover:bg-red-700 text-white mt-8 float-right">I have not received my confirmation email.</button>
                 </div>
                 <Link href="/home">
                     <a className="text-lg text-blue-500">
                         ← Back to homepage
                     </a>
                 </Link>
             </main>
        </>
    )
}
