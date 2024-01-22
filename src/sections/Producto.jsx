import { bigShoe1 } from "../assets/images";
import Boton from "../components/Boton";

const Producto = () => {
    return (
        <section
            id="producto"
            className="w-full flex xl:flex-row flex-col-reverse gap-10 max-container justify-center min-h-screen"
        >
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-0">
                <img
                    src={bigShoe1}
                    alt="zapatilla-de-coleccion"
                    width={500}
                    height={500}
                    className="object-contain relative z-10"
                />
            </div>
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-xl:pt-36">
                <p className="text-coral-red text-md font-montserrat">
                    Moda y accesorios {">"} Hombre {">"} Zapatillas
                </p>
                <h1 className="font-palanquin text-4xl font-bold mt-8 max-sm:text-[72px] max-sm:leading-[82px]">
                    Model{" "}
                    <span className="text-coral-red inline-block mt-3">
                        Stylus X
                    </span>{" "}
                </h1>
                <p className="text-lg font-montserrat text-slate-gray leading-normal mt-6 mb-10 sm:max-w-lg">
                    Las zapatillas Nike Stylus X combinan estilo y comodidad en
                    un diseño moderno y versátil, perfectas para un estilo de
                    vida activo y urbano.
                </p>
                <div>
                    <p className="text-lg font-montserrat text-coral-red leading-normal sm:max-w-lg">
                        Talla: <span className="text-slate-gray">42</span>{" "}
                    </p>
                    <p className="text-lg font-montserrat text-coral-red leading-normal sm:max-w-lg">
                        Medio de entrega:{" "}
                        <span className="text-slate-gray">
                            Despacho a domicilio
                        </span>
                    </p>
                    <p className="text-lg font-montserrat text-coral-red leading-normal mb-10 sm:max-w-lg">
                        Stock:{" "}
                        <span className="text-slate-gray">100 unidades</span>
                    </p>
                </div>
                <Boton label="Agregar al Carrito" />
            </div>
        </section>
    );
};

export default Producto;
