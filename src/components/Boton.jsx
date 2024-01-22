import { useEffect } from "react";
import { Link } from "react-router-dom";

const Boton = ({ label, iconURL, color, fullWidth }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Link to="/producto">
            <button
                className={`rounded-full px-7 py-4 font-montserrat border text-lg leading-none flex flex-row items-center justify-center ${
                    color
                        ? "bg-transparent text-slate-gray  border-gray-300"
                        : "bg-coral-red text-white"
                }
            ${fullWidth && "w-full"}`}
            >
                {label}
                {/* si iconURL es "falsy" entonces el código de la derecha no se ejecutará */}
                {iconURL && (
                    <img
                        src={iconURL}
                        alt="icono-de-flecha-derecha"
                        className="ml-2 rounded-full"
                        width={20}
                        height={20}
                    />
                )}
            </button>
        </Link>
    );
};

export default Boton;
