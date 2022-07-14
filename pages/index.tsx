import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
    return (
        <div className="w-screen">
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <main className="container pt-12">

                <h1 className="text-7xl font-bold text-center">
                    Buy our things
                </h1>
            </main>
        </div>
    )
}
