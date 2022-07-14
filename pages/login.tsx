import Head from 'next/head'
import InputGroup from '../components/InputGroup'

export default function Login() {
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
                    <InputGroup label="Email" placeholder="type here..." />
                    <InputGroup label="First Name" placeholder="type here..." />
                    <InputGroup label="Last Name" placeholder="type here..." />
                    <div className="flex gap-2 mt-2 justify-center">
                        <button className="bg-blue-500 rounded-lg px-3 pt-1 pb-1.5 text-white">
                            Create account
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
