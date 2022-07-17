import Head from 'next/head';
import { useState } from 'react';
import InputGroup from '../components/InputGroup'
import { AccountType, ProductType } from '../util/types';

//page for creating an account; information is saved in localStorage
export default function Login() {
    //useStates for account fields
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    

    //set localStorage and go to interest survey page
    const handleSubmit = (account: AccountType) => {
        localStorage.setItem("shtemAccount", JSON.stringify(account));
        location.href = "/survey";
    }

    return (
        <div className="w-screen h-screen bg-gray-300">
            <Head>
                <title>SHTEM Website | Login</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className="container h-4/5 flex justify-center items-center">
                <div className="bg-white p-6 pb-4 rounded-lg flex flex-col gap-3 text-lg">
                    <h1 className="text-3xl font-bold text-center">
                        Create a new account
                    </h1>
                    <InputGroup label="Email" placeholder="type here..." callback={setEmail} />
                    <InputGroup label="First Name" placeholder="type here..." callback={setFirstName} />
                    <InputGroup label="Last Name" placeholder="type here..." callback={setLastName} />
                    <InputGroup label="Phone Number" placeholder='typehere...' callback={setPhone} /> 
                    
                    
                    <div className="flex mt-2 justify-center">
                        <button


                            onClick={() => handleSubmit({
                                email,
                                firstName,
                                lastName,
                                phone,
                                balance: 1000,
                                items: [undefined as unknown as {product: ProductType, quantity: number}],
                            })}

                            className="bg-blue-500 rounded-lg px-3 pt-1 pb-1.5 text-white"
                        >
                            Create account
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
