import React from "react";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Nav = () => {
    return (
        <header className="absolute z-10 padding-x py-8 w-full">
            <nav className="flex flex-row items-center justify-between max-container">
                <a href="./">
                    <img
                        src={headerLogo}
                        alt="Logo-de-Adidas"
                        width={130}
                        height={50}
                    />
                </a>
                <ul className="flex justify-center space-x-10 max-lg:hidden flex-1 gap-10">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <img
                        src={hamburger}
                        width={25}
                        alt="icono-de-hamburguesa"
                        className="hidden max-lg:block"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
