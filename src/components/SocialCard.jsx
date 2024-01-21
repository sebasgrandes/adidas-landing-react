const SocialCard = ({ src, alt }) => {
    return (
        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <img src={src} alt={alt} width={24} height={24} />
        </div>
    );
};

export default SocialCard;
