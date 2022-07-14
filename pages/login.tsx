import Head from 'next/head'
import { useState } from 'react';
import InputGroup from '../components/InputGroup'

export default function Login() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const createAccount = (email: string, firstName: string, lastName: string) => {
        localStorage.setItem("shtemAccount", JSON.stringify({
            email,
            firstName,
            lastName,
        }));
    }

    return (
        <div className="w-screen h-screen bg-gray-300">
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
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
                    <div className="flex gap-2 mt-2 justify-center">
                        <button
                            onClick={() => createAccount(email, firstName, lastName)}
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
