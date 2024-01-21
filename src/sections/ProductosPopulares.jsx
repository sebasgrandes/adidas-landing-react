import ProductoPopularCard from "../components/ProductoPopularCard";
import { products } from "../constants";

const ProductosPopulares = () => {
    return (
        <section id="productos" className="max-sm:mt-14 max-container">
            <div>
                <h2 className="font-palanquin font-bold text-4xl">
                    Nuestros
                    <span className="text-coral-red"> Productos</span> Populares
                </h2>
                <p className="mt-5 font-montserrat text-slate-gray sm:max-w-lg">
                    Cada artículo ha sido cuidadosamente elegido para satisfacer
                    tus necesidades y superar tus expectativas.
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-16 mt-14">
                {products.map((product) => (
                    <ProductoPopularCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    );
};

export default ProductosPopulares;
