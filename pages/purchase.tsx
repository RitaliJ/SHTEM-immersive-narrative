import Head from "next/head";
 import Link from "next/link";
 import Header from "../components/Header";



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
                 <Link href="/home">
                     <a className="text-lg text-blue-500">
                         ← Back to homepage
                     </a>
                 </Link>
             </main>
  

                     
        </>
    )
}           