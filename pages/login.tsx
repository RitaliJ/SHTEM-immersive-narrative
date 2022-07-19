import Head from 'next/head';
import { useState } from 'react';
import InputGroup from '../components/InputGroup'
import { AccountType, ItemType, ProductType } from '../util/types';

//page for creating an account; information is saved in localStorage
export default function Login() {
    //useStates for account fields
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    //set localStorage and go to terms page
    const handleSubmit = (account: AccountType) => {
        if (email && firstName && lastName && phone) {
            localStorage.setItem("shtemAccount", JSON.stringify(account));
            location.href = "/terms";
        }
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
                    <InputGroup label="Email" callback={setEmail} />
                    <InputGroup label="First Name" callback={setFirstName} />
                    <InputGroup label="Last Name" callback={setLastName} />
                    <InputGroup label="Phone Number" callback={setPhone} />
                    
                    <div className="flex flex-col gap-1 mt-2 justify-center items-center">
                        <button
                            onClick={() => handleSubmit({
                                email,
                                firstName,
                                lastName,
                                phone,
                                balance: 1000,
                                items: [undefined as unknown as ItemType],
                            })}
                            className={"duration-150 rounded-lg px-3 pt-1 pb-1.5 " + (email && firstName
                                && lastName && phone ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}
                        >
                            Create account
                        </button>
                        <p className="italic text-red-500">
                            {!(email && firstName && lastName && phone) &&
                                "* Please fill all required fields"
                            }
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
