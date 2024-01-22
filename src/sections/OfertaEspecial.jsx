import Boton from "../components/Boton";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const OfertaEspecial = () => {
    return (
        <section className="max-container flex justify-wrap max-lg:flex-col-reverse gap-10 items-center">
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={offer}
                    alt="zapatillas-de-oferta"
                    width={773}
                    height={687}
                    className="object-contain"
                />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
                    Oferta
                    <span className="text-coral-red"> Especial</span>
                </h2>
                <p className="info-text mt-4 lg:max-w-xl">
                    ¡Explora nuestra selección exclusiva de zapatillas y
                    disfruta de descuentos increíbles en calzado de alta
                    calidad! No dejes pasar esta oportunidad.
                </p>
                <p className="info-text mt-6 lg:max-w-xl">
                    Descubre la oferta especial en zapatillas de edición
                    limitada que te hará destacar. Calzado de estilo y calidad a
                    precios irresistibles. ¡Aprovecha ahora!
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Boton label={"Compra Ahora"} iconURL={arrowRight} />
                    <Boton label={"Más información"} color={"white"} />
                </div>
            </div>
        </section>
    );
};

export default OfertaEspecial;
