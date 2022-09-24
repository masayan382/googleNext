import Image from "next/image"
const Avatar = ({ url, className }) => {
    return (
        <Image
            loading="lazy"
            src={url}
            width={32}
            height={32}
            alt="profile pic"
            className={`rounded - full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        />
    )
}

export default Avatar
