import Head from "next/head"
import Avatar from "../components/Avatar"
import { MicrophoneIcon } from "@heroicons/react/24/solid"

export default function Home() {
    return (
        <div>
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
            {/* footer */}
        </div>
    )
}
