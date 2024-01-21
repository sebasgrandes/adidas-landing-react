import ServicioCard from "../components/ServicioCard";
import { services } from "../constants";

const Servicios = () => {
    return (
        <section className="flex gap-10 max-container max-lg:flex-col max-lg:gap-4 justify-center flex-wrap">
            {services.map((service) => (
                <ServicioCard key={service.label} {...service} />
            ))}
        </section>
    );
};

export default Servicios;
