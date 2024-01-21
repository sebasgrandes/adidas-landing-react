import { star } from "../assets/icons";

const ResenaCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={imgURL}
                alt={customerName}
                className="object-cover rounded-full w-24"
            />
            <div className="flex flex-col items-center gap-2 mt-3">
                <p className="text-center font-montserrat info-text max-w-sm">
                    {feedback}
                </p>
                <div className="flex items-center gap-2">
                    <img
                        src={star}
                        alt="icono-estrella"
                        width={20}
                        className="object-contain m-0"
                    />
                    <p className="font-montserrat text-slate-gray">{`(${rating})`}</p>
                </div>
                <h3 className="font-palanquin font-bold text-2xl">
                    {customerName}
                </h3>
            </div>
        </div>
    );
};

export default ResenaCard;
