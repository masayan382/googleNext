const Avatar = ({ url }) => {
    return (
        <img
            loading="lazy"
            src={url}
            alt="profile pic"
            className="rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110"
        />
    )
}

export default Avatar
