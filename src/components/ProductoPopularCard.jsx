import { star } from "../assets/icons";

const ProductoPopularCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            {" "}
            <img src={imgURL} alt={imgURL} className="w-[282px]" />
            <div className="mt-6 space-y-2.5">
                <div className="flex items-center justify-start gap-2">
                    <img
                        src={star}
                        alt="icono-de-estrella"
                        width={24}
                        height={24}
                    />
                    <p className="font-montserrat text-slate-gray text-xl leading-normal">
                        (4.5)
                    </p>
                </div>
                <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">
                    {name}
                </h3>
                <p className="mt-2 text-coral-red font-semibold font-montserrat leading-normal text-2xl">
                    {price}
                </p>
            </div>
        </div>
    );
};

export default ProductoPopularCard;
