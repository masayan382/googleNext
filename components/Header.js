import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

const Header = () => {
    const router = useRouter()
    const searchInputRef = useRef(null)
    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) return
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                    alt=""
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none"
                        type="text"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => {
                            searchInputRef.current.value = ""
                        }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300"
                    >
                        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-500 hidden sm:inline-flex"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar className="ml-auto" url="/sika100.png" alt="" />
            </div>
            <HeaderOptions />
        </header>
    )
}

export default Header
