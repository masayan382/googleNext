import Head from "next/head"
import Avatar from "../components/Avatar"
import { MicrophoneIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Footer from "../components/Footer"
import { useRef } from "react"
import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) return
        router.push(`/search?term=${term}`)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* header */}
            <header className="flex w-full p-5 justify-between text-sm text-gray-700">
                {/* left */}
                <div className="flex space-x-4 items-center">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>
                {/* right */}
                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>
                    {/* icon */}

                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <Avatar url="/sika100.png" />
                </div>
            </header>
            {/* body */}
            <form
                className="flex flex-col items-center mt-44 flex-grow w-4/5"
                action=""
            >
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={100}
                    width={300}
                />
                <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 mr-3 text-gray-500"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="focus:outline-none flex-grow"
                    />
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button onClick={search} className="btn">
                        Google Search
                    </button>
                    <button onClick={search} className="btn">
                        I'm Feeling Lucky
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    )
}
