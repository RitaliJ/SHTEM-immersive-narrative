import Link from "next/link"
export default function Cookies() {
    
return (
    <main className="container pt-12 pb-24 flex flex-col gap-4 items-center">
    <h1 className="text-4xl">
       In order to continue, please accept cookies!
    </h1>

    <div className="flex gap-4 justify-center mt-8">
        <Link href = '/home'>
        <button className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-blue-500 hover:bg-blue-700 text-white">
            Yes, I want to Accept Cookies!
        </button>
        </Link>
        <button className="w-5/12 duration-150 px-4 py-2 rounded-lg border border-gray-400 shadow-lg bg-red-500 hover:bg-red-700 text-white">
           No, I do not want to accept cookies.
        </button>
    </div>
 </main>

)
}