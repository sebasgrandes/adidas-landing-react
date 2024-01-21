import ResenaCard from "../components/ResenaCard";
import { reviews } from "../constants";

const ResenasClientes = () => {
    return (
        <section className="max-container">
            <div>
                <div className="flex flex-col items-center gap-3">
                    <h3 className="font-bold font-palanquin text-4xl text-center">
                        ¿Qué dicen nuestros{" "}
                        <span className="text-coral-red">clientes</span>?
                    </h3>
                    <p className="info-text text-center max-w-xl m-auto">
                        Escucha las historias auténticas de nuestros clientes
                        satisfechos acerca de sus experiencias excepcionales con
                        nosotros.
                    </p>
                </div>
            </div>
            <div className="mt-20 flex items-center justify-evenly gap-14 max-lg:flex-col max-lg:gap-10">
                {reviews.map((review) => (
                    <ResenaCard key={review.customerName} {...review} />
                ))}
            </div>
        </section>
    );
};

export default ResenasClientes;
