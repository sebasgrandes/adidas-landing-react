const ZapatillaCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL) {
            changeBigShoeImage(imgURL);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                bigShoeImg === imgURL
                    ? "border-coral-red"
                    : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL}
                    alt="zapatos-de-coleccion"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ZapatillaCard;
