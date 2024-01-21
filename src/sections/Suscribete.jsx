import Boton from "../components/Boton";

const Suscribete = () => {
    return (
        <section
            id="contactanos"
            className="flex items-center max-container justify-between max-xl:flex-col gap-10"
        >
            <div className="xl:max-w-xl">
                <h3 className="font-palanquin font-bold text-4xl max-w-xl max-xl:text-center">
                    Suscríbete para recibir{" "}
                    <span className="text-coral-red">Actualizaciones</span> y
                    Noticias{" "}
                </h3>
            </div>
            <div className="w-full xl:max-w-[40%] lg:max-w-[70%]  max-sm:flex-col gap-5 sm:border sm:border-slate-gray rounded-full p-3 flex items-center justify-between">
                <input
                    type="text"
                    placeholder="suscribete@adidas.com"
                    className="input"
                />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Boton label="Suscríbete" fullWidth={true} />
                </div>
            </div>
        </section>
    );
};

export default Suscribete;
