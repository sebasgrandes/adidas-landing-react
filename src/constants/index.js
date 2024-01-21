import {
    facebook,
    instagram,
    shieldTick,
    support,
    truckFast,
    twitter,
} from "../assets/icons";

import {
    bigShoe1,
    bigShoe2,
    bigShoe3,
    customer1,
    customer2,
    shoe4,
    shoe5,
    shoe6,
    shoe7,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
    { href: "./#inicio", label: "Inicio" },
    { href: "./#productos", label: "Productos" },
    { href: "./#nosotros", label: "Nosotros" },
    { href: "./#contactanos", label: "Contáctanos" },
    { href: "./producto", label: "Producto" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: "1k+", label: "Marcas" },
    { value: "500+", label: "Tiendas" },
    { value: "250k+", label: "Clientes" },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Adidas Stylus X",
        price: "S/ 500.90",
    },
    {
        imgURL: shoe5,
        name: "Adidas Modern Y",
        price: "S/ 550.90",
    },
    {
        imgURL: shoe6,
        name: "Adidas Vibre Z",
        price: "S/ 570.90",
    },
    {
        imgURL: shoe7,
        name: "Adidas All T",
        price: "S/ 590.90",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Envíos Gratis",
        subtext:
            "En nuestra tienda, ofrecemos envíos gratuitos para que disfrutes de tus zapatillas favoritas sin preocuparte por costos adicionales.",
    },
    {
        imgURL: shieldTick,
        label: "Pagos Seguros",
        subtext:
            "Tu seguridad es nuestra prioridad. Garantizamos opciones de pago seguras para que realices tus compras con total confianza.",
    },
    {
        imgURL: support,
        label: "Nos encanta ayudarte",
        subtext:
            "Nuestro equipo se dedica a ayudarte a encontrar las zapatillas perfectas que se adapten a tu estilo y necesidades.",
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Sebastian Grandes",
        rating: 4.5,
        feedback:
            "La atención al detalle y la calidad del producto excedieron mis expectativas. ¡Altamente recomendado!!",
    },
    {
        imgURL: customer2,
        customerName: "Andrea Onil",
        rating: 4.5,
        feedback:
            "El producto no solo cumplió, sino que superó mis expectativas. ¡Definitivamente seré un cliente recurrente!",
    },
];

export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Adidas Stylus X", link: "/producto" },
            { name: "Adidas Modern Y", link: "/producto" },
            { name: "Adidas Vibre Z", link: "/producto" },
            { name: "Adidas All T", link: "/producto" },
            { name: "Adidas Stylus Y", link: "/producto" },
            { name: "Adidas Stylus Z", link: "/producto" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Nosotros", link: "/producto" },
            { name: "FAQs", link: "/producto" },
            { name: "Cómo funciona", link: "/producto" },
            { name: "Política de privacidad", link: "/producto" },
            { name: "Política de pago", link: "/producto" },
        ],
    },
    {
        title: "Contacto",
        links: [
            { name: "cliente@adidas.com", link: "mailto:cliente@adidas.com" },
            { name: "+51 922 382 421", link: "tel:+51922382421" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook-logo" },
    { src: twitter, alt: "twitter-logo" },
    { src: instagram, alt: "instagram-logo" },
];
