import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Boton from "../components/Boton";
import ShoeCard from "../components/ZapatillaCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="inicio"
            className="w-full flex xl:flex-row flex-col gap-10 max-container justify-center min-h-screen"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-coral-red text-xl font-montserrat">
                    Colección de Verano
                </p>
                <h1 className="font-palanquin text-8xl font-bold mt-10 max-sm:text-[72px] max-sm:leading-[82px]">
                    <span className="xl:whitespace-nowrap xl:bg-white relative z-10 pr-10">
                        Nueva Colección
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">
                        Adidas
                    </span>{" "}
                    X
                </h1>
                <p className="text-lg font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
                    Descubre las elegantes novedades de Nike, la comodidad de
                    calidad y la innovación para tu vida activa.
                </p>
                <Boton label="Compra ahora" iconURL={arrowRight} />
                <div className="flex justify-start items-start w-full flex-wrap gap-16 mt-20">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold font-palanquin">
                                {stat.value}
                            </p>
                            <p className="font-montserrat leading-7 text-slate-gray">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="zapatilla-de-coleccion"
                    width={610}
                    height={502}
                    className="object-contain relative z-10"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => (
                        <div key={shoe.bigShoe}>
                            <ShoeCard
                                imgURL={shoe.thumbnail}
                                changeBigShoeImage={(shoe) => {
                                    setBigShoeImg(shoe);
                                }}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
