import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
    return (
        <div className="w-full">
            <Head>
                <title>SHTEM Website</title>
                <meta name="description" content="Shtem website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container pt-12">
                <Header />

                <h1 className="text-7xl font-bold text-center">
                    Buy our things
                </h1>
            </main>
        </div>
    )
}
