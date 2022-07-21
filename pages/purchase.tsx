import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CenteredModal from "../components/CenteredModal";
import Header from "../components/Header";
import NiceLink from "../components/NiceLink";

//confirmation page after purchasing products
export default function Purchase() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Head>
                <title>SHTEM Website | Checkout</title>
                <meta name="description" content="Cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <Header/>
                <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
                    <div className="bg-gray-900 w-full h-full flex flex-col items-center justify-center font-mono">
                        <h1 className="text-4xl text-red-600">ERROR: DATA COMPROMISED</h1>
                        <p className="text-3xl text-red-600 w-6/12 mt-8">There has been a data leak in the system. Please call XXX-XXX-XXXX for more information</p>
                    </div>
                </CenteredModal>
                <main className="container pt-12 pb-24 flex flex-col gap-4 items-center">
                 <h1 className="text-3xl">
                     Thank you for your purchase.
                 </h1>
                 <p className="text-xl">
                    You should receive a confirmation email shortly.
                 </p>

                 <div>
                    <button onClick={() => setIsOpen(true)} className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-green-500 hover:bg-green-700 text-white mt-8 float-left">I have received my confirmation email.</button>
                    <button onClick={() => setIsOpen(true)} className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-red-500 hover:bg-red-700 text-white mt-8 float-right">I have not received my confirmation email.</button>
                 </div>
                <NiceLink href="/home" text="← Back to homepage" className="mb-6" />
                
             </main>
        </>
    );
}
