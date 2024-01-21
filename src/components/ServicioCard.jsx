const ServicioCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="shadow-xl hover:shadow-2xl transition-shadow rounded-xl px-8 py-12 space-y-3 flex-1 sm:min-w-[350px] w-full">
            <div className="bg-coral-red h-10 w-10 rounded-full flex justify-center items-center">
                <img src={imgURL} alt={`icono-${label}`} width={24} />
            </div>
            <h3 className="text-2xl font-bold font-palanquin">{label}</h3>
            <p className="info-text break-words">{subtext}</p>
        </div>
    );
};

export default ServicioCard;
