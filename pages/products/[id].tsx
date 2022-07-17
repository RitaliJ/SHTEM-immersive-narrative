import Header from '../../components/Header';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountType, ProductType } from '../../util/types';
import Head from 'next/head';

const mod = require('../../util/products')

function buyProduct(){
    console.log("Purchasing Product")
}


export default function Product(){
    const [product, setProduct] = useState({} as ProductType)
    const [account, setAccount] = useState({} as AccountType);
    const router = useRouter();
    const id = router.query.id

    useEffect(() => {
        setProduct(mod.products[Number(id)])
    })


    //get account info from localStorage; if it doesn't exist, send user to login page
    useEffect(() => {
        if (!account) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        }
    });

    return(
        <> 
            <div className="bg-white container mx-auto">
                <Head>
                    <title>SHTEM: {product.name}</title>
                </Head>
                
                <Header account={account} />
                

            <div className="flex-none w-4/12 inline-block float-left mt-8">
                    <img src={product.imgSrc} alt={product.name} className="inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="inline-block w-6/12 float-right mt-8">
                <div className="flex font-sans">
                    <form className="flex-auto p-6">
                        <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {product.name}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            ${product.price}
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            In stock
                        </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-base">
                            <p>
                                {product.desc}
                            </p>
                        </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit" onClick={buyProduct} formAction="../home"> 
                            Buy now
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button" onClick={buyProduct}>
                            Add to bag
                            </button>
                        </div>
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like" onClick={buyProduct}>
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                        </div>
                        <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                        </p>
                    </form>
                    </div>
                    </div>
                </div>
            
        </>
    );
}
