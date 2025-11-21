import "./Breadcrumbs.css";


const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <nav aria-label="Хлебные крошки">
            <ul className="breadcrumb">
                {breadcrumbs.map((item, index) => (
                    <li
                        key={item.id}
                        className="breadcrumb__item"
                    >
                        <a
                            className="breadcrumb__item-link"
                            href="#"
                            aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
                        >
                            {item.link}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;