import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import ColumnaFooter from "../components/ColumnaFooter";
import SocialCard from "../components/SocialCard";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                {/* ! sin el items-start... tus a o div (hijos) serian por defecto "block", abarcando todo el espacio */}
                <div className="flex flex-col items-start gap-5">
                    <a href="/">
                        <img src={footerLogo} alt="logo-empresa" width={200} />
                    </a>
                    <p className="font-montserrat text-white-400 text-base max-w-sm">
                        Obten zapatillas listas para la nueva temporada en tu
                        tienda Nike más cercana. Encuentra tu talla perfecta en
                        la tienda. Obten Descuentos.
                    </p>
                    <div className="flex gap-5">
                        {socialMedia.map((social) => (
                            <SocialCard key={social.alt} {...social} />
                        ))}
                    </div>
                </div>
                <div className="flex lg:gap-10 gap-20 flex-wrap flex-1 justify-between">
                    {footerLinks.map((footerLink) => (
                        <ColumnaFooter key={footerLink.title} {...footerLink} />
                    ))}
                </div>
            </div>
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 gap-2 justify-start items-center font-montserrat">
                    <img
                        src={copyrightSign}
                        alt="firma-copyright"
                        width={20}
                        height={20}
                        className="rounded-full m-0"
                    />
                    <p>Copyright. Todos los derechos reservados.</p>
                </div>
                <p className="font-montserrat cursor-pointer">
                    Términos y Condiciones
                </p>
            </div>
        </footer>
    );
};

export default Footer;
