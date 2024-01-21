import Boton from "../components/Boton";
import { shoe8 } from "../assets/images";

const SuperCalidad = () => {
    return (
        <section
            id="nosotros"
            className="max-container flex justify-between flex-row max-lg:flex-col gap-10 items-center w-full"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
                    Te Proporcionamos Zapatillas de
                    <span className="text-coral-red"> Super Calidad</span>
                </h2>
                <p className="info-text mt-4 lg:max-w-lg">
                    Ya sea para el rendimiento deportivo o el uso diario,
                    nuestras zapatillas de super calidad están listas para
                    acompañarte en cada paso.
                </p>
                <p className="info-text mt-6 lg:max-w-lg">
                    Nuestra dedicación a la excelencia y la calidad brilla
                    especialmente en nuestra línea de zapatillas.
                </p>
                <div className="mt-11">
                    <Boton label={"Ver Detalles"} />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="zapatillas-de-calidad"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default SuperCalidad;
