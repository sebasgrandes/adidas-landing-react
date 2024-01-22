import { Link } from "react-router-dom";

const ColumnaFooter = ({ title, links }) => {
    return (
        <div className="flex flex-col">
            <h4 className="font-medium text-2xl font-montserrat mb-4 text-white leading-normal">
                {title}
            </h4>
            <ul>
                {links.map((linke) => (
                    <li
                        className="mt-2 font-montserrat text-base leading-normal text-white-400 block hover:text-white"
                        key={linke.name}
                    >
                        <Link to={linke.link}>{linke.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColumnaFooter;
