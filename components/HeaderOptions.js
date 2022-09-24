import SearchIcon from "./icons/SearchIcon"
import ImageIcon from "./icons/ImageIcon"
import VideoIcon from "./icons/VideoIcon"
import NewsIcon from "./icons/NewsIcon"
import MapIcon from "./icons/MapIcon"
import MoreIcon from "./icons/MoreIcon"

const HeaderOptions = () => {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            {/* left */}
            <div className="flex space-x-6">
                {/* <HeaderOption title="All" selected /> */}
                <SearchIcon title="All" selected />
                <ImageIcon title="Images" />
                <VideoIcon title="Video" />
                <NewsIcon title="News" />
                <MapIcon title="Maps" />
                <MoreIcon title="More" />
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
