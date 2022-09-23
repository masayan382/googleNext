import HeaderOption from "./HeaderOption"

const HeaderOptions = () => {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            {/* left */}
            <div className="flex space-x-6">
                <HeaderOption title="All" selected />
                <HeaderOption title="Images" />
                <HeaderOption title="Videos" />
                <HeaderOption title="News" />
                <HeaderOption title="Maps" />
                <HeaderOption title="More" />
            </div>
            {/* right */}
            <div className="flex space-x-4">
                <p className="link">Setting</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
