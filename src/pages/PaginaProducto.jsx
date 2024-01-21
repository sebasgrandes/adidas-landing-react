import {
    Footer,
    Producto,
    OfertaEspecial,
    ProductosPopulares,
    ResenasClientes,
    Servicios,
    Suscribete,
} from "../sections";

const PaginaProducto = () => {
    return (
        <main className="relative">
            <section className="xl:padding-l wide:padding-r padding-b">
                <Producto />
            </section>
            <section className="padding bg-pale-blue">
                <ResenasClientes />
            </section>
            <section className="bg-coral-red padding-x padding-t pb-8">
                <Footer />
            </section>
        </main>
    );
};

export default PaginaProducto;
