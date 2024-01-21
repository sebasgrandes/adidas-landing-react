import {
    Footer,
    Hero,
    OfertaEspecial,
    ProductosPopulares,
    ResenasClientes,
    Servicios,
    SuperCalidad,
    Suscribete,
} from "../sections";

const Inicio = () => {
    return (
        <main className="relative">
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <ProductosPopulares />
            </section>
            <section className="padding">
                <SuperCalidad />
            </section>
            <section className="padding-x py-10">
                <Servicios />
            </section>
            <section className="padding">
                <OfertaEspecial />
            </section>
            <section className="padding bg-pale-blue">
                <ResenasClientes />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Suscribete />
            </section>
            <section className="bg-coral-red padding-x padding-t pb-8">
                <Footer />
            </section>
        </main>
    );
};

export default Inicio;
