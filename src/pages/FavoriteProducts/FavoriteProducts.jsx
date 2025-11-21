import { useState } from "react";
import { assets } from "../../assets/data/assets.js";
import {
    products_mini_hoodies_part1,
    products_mini_sweatshirts_part1,
    products_mini_t_shirts_part_1
} from "../../assets/data/products-mini.js";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import "../FavoriteProducts/FavoriteProducts.css";
import "../ProductPage/ProductPage.css";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const breadcrumbs = [
    { id: 1, link: "Главная" },
    { id: 2, link: "Футболки" },
];

const filterOptions = {
    "Цвет": ['Красный', 'Синий', 'Зелёный', 'Чёрный'],
    "Цена": ['До 500₴', '500–1000₴', '1000–2000₴', 'Больше 2000₴'],
    "Размер": ['XS', 'S', 'M', 'L', 'XL'],
    "Коллекция": ['Весна', 'Лето', 'Осень', 'Зима'],
};

const filterOptionsSorting = {
    "Популярности": ['Популярности', 'Цене', 'Новинкам'],
}

const FavoriteProducts = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (label) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <>
            <Navbar/>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <div className="filter-bar__container">
                <div className="filter-bar">
                    <span className="filter-bar__text">Фильтровать:</span>
                    {Object.entries(filterOptions).map(([label, options]) => (
                        <div className="filter-dropdown" key={label}>
                            <button
                                className="filter-button"
                                onClick={() => toggleDropdown(label)}
                            >
                                {label}
                                <img className="arrow" src={assets.arrow_down_black} alt="arrow down black logo"></img>
                            </button>
                            {openDropdown === label && (
                                <ul className="dropdown-list">
                                    {options.map((option) => (
                                        <li key={option} className="dropdown-item">
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className="filter-bar">
                    <span className="filter-bar__text">Сортировать по:</span>
                    {Object.entries(filterOptionsSorting).map(([label, options]) => (
                        <div className="filter-dropdown" key={label}>
                            <button
                                className="filter-button"
                                onClick={() => toggleDropdown(label)}
                            >
                                {label}
                                <span className="arrow">&#9662;</span>
                            </button>
                            {openDropdown === label && (
                                <ul className="dropdown-list">
                                    {options.map((option) => (
                                        <li key={option} className="dropdown-item">
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="product-list">
                {products_mini_hoodies_part1.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className={`product-card__container ${product.highlighted ? "highlighted" : ""}`}
                        >
                            <img
                                src={assets.filled_heart}
                                alt="Favorite"
                                className="product-card__filled_heart-icon"
                            />
                            <img
                                src={assets.white_circle}
                                alt="White circle"
                                className="product-card__white_heart-icon"
                            />
                            <img
                                src={product.image ?? assets.placeholder}
                                alt={product.title}
                                className="product-card__image"
                            />
                            <div className="product-card__content">
                                <span
                                    className={`product-card__new-price ${
                                        product.priceWithWBWalletWithDiscount ? "discounted" : "normal"
                                    }`}
                                >
                                    {product.priceWithWBWalletWithDiscount} ₽
                                </span>
                                {product.priceWithoutWBWalletAndWithoutDiscount && (
                                    <span className="product-card__old-price">
                                        {product.priceWithoutWBWalletAndWithoutDiscount.toLocaleString("ru-RU")} ₽
                                    </span>
                                )}
                            </div>
                            <p className="product-card__product-name">
                                {product.title}
                            </p>
                            <div className="product-card__rating-section">
                                <img
                                    src={assets.star}
                                    alt="Rating"
                                    className="product-card__rating-icon"
                                />
                                <span className="product-card__product-rating">
                                    {product.rating}&nbsp;
                                </span>
                                <span className="product-card__product-mark">
                                    · {product.reviews} оценка
                                </span>
                            </div>
                            <button className="product-card__add-to-card-button">
                                <img
                                    src={assets.shopping_cart}
                                    alt="Shopping Cart"
                                    className="product-card__shopping-card-icon"
                                />
                                Добавить в корзину
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="product-list">
                {products_mini_t_shirts_part_1.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className={`product-card__container ${product.highlighted ? "highlighted" : ""}`}
                        >
                            <img
                                src={assets.filled_heart}
                                alt="Favorite"
                                className="product-card__filled_heart-icon"
                            />
                            <img
                                src={assets.white_circle}
                                alt="White circle"
                                className="product-card__white_heart-icon"
                            />
                            <img
                                src={product.image ?? assets.placeholder}
                                alt={product.title}
                                className="product-card__image"
                            />
                            <div className="product-card__content">
              <span
                  className={`product-card__new-price ${
                      product.priceWithWBWalletWithDiscount ? "discounted" : "normal"
                  }`}
              >
                {product.priceWithWBWalletWithDiscount} ₽
              </span>
                                {product.priceWithoutWBWalletAndWithoutDiscount && (
                                    <span className="product-card__old-price">
                  {product.priceWithoutWBWalletAndWithoutDiscount.toLocaleString("ru-RU")} ₽
                </span>
                                )}
                            </div>
                            <p className="product-card__product-name">{product.title}</p>
                            <div className="product-card__rating-section">
                                <img
                                    src={assets.star}
                                    alt="Rating"
                                    className="product-card__rating-icon"
                                />
                                <span className="product-card__product-rating">{product.rating}&nbsp;</span>
                                <span className="product-card__product-mark">· {product.reviews} оценка</span>
                            </div>
                            <button className="product-card__add-to-card-button">
                                <img
                                    src={assets.shopping_cart}
                                    alt="Shopping Cart"
                                    className="product-card__shopping-card-icon"
                                />
                                Добавить в корзину
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="product-list">
                {products_mini_sweatshirts_part1.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className={`product-card__container ${product.highlighted ? "highlighted" : ""}`}
                        >
                            <img
                                src={assets.filled_heart}
                                alt="Favorite"
                                className="product-card__filled_heart-icon"
                            />
                            <img
                                src={assets.white_circle}
                                alt="White circle"
                                className="product-card__white_heart-icon"
                            />
                            <img
                                src={product.image ?? assets.placeholder}
                                alt={product.title}
                                className="product-card__image"
                            />
                            <div className="product-card__content">
              <span
                  className={`product-card__new-price ${
                      product.priceWithWBWalletWithDiscount ? "discounted" : "normal"
                  }`}
              >
                {product.priceWithWBWalletWithDiscount} ₽
              </span>
                                {product.priceWithoutWBWalletAndWithoutDiscount && (
                                    <span className="product-card__old-price">
                  {product.priceWithoutWBWalletAndWithoutDiscount.toLocaleString("ru-RU")} ₽
                </span>
                                )}
                            </div>
                            <p className="product-card__product-name">{product.title}</p>
                            <div className="product-card__rating-section">
                                <img
                                    src={assets.star}
                                    alt="Rating"
                                    className="product-card__rating-icon"
                                />
                                <span className="product-card__product-rating">{product.rating}&nbsp;</span>
                                <span className="product-card__product-mark">· {product.reviews} оценка</span>
                            </div>
                            <button className="product-card__add-to-card-button">
                                <img
                                    src={assets.shopping_cart}
                                    alt="Shopping Cart"
                                    className="product-card__shopping-card-icon"
                                />
                                Добавить в корзину
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="product-list">
                {products_mini_hoodies_part1.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className={`product-card__container ${product.highlighted ? "highlighted" : ""}`}
                        >
                            <img
                                src={assets.filled_heart}
                                alt="Favorite"
                                className="product-card__filled_heart-icon"
                            />
                            <img
                                src={assets.white_circle}
                                alt="White circle"
                                className="product-card__white_heart-icon"
                            />
                            <img
                                src={product.image ?? assets.placeholder}
                                alt={product.title}
                                className="product-card__image"
                            />
                            <div className="product-card__content">
                                <span
                                    className={`product-card__new-price ${
                                        product.priceWithWBWalletWithDiscount ? "discounted" : "normal"
                                    }`}
                                >
                                    {product.priceWithWBWalletWithDiscount} ₽
                                </span>
                                {product.priceWithoutWBWalletAndWithoutDiscount && (
                                    <span className="product-card__old-price">
                                        {product.priceWithoutWBWalletAndWithoutDiscount.toLocaleString("ru-RU")} ₽
                                    </span>
                                )}
                            </div>
                            <p className="product-card__product-name">
                                {product.title}
                            </p>
                            <div className="product-card__rating-section">
                                <img
                                    src={assets.star}
                                    alt="Rating"
                                    className="product-card__rating-icon"
                                />
                                <span className="product-card__product-rating">
                                    {product.rating}&nbsp;
                                </span>
                                <span className="product-card__product-mark">
                                    · {product.reviews} оценка
                                </span>
                            </div>
                            <button className="product-card__add-to-card-button">
                                <img
                                    src={assets.shopping_cart}
                                    alt="Shopping Cart"
                                    className="product-card__shopping-card-icon"
                                />
                                Добавить в корзину
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="product-list">
                {products_mini_hoodies_part1.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className={`product-card__container ${product.highlighted ? "highlighted" : ""}`}
                        >
                            <img
                                src={assets.filled_heart}
                                alt="Favorite"
                                className="product-card__filled_heart-icon"
                            />
                            <img
                                src={assets.white_circle}
                                alt="White circle"
                                className="product-card__white_heart-icon"
                            />
                            <img
                                src={product.image ?? assets.placeholder}
                                alt={product.title}
                                className="product-card__image"
                            />
                            <div className="product-card__content">
                                <span
                                    className={`product-card__new-price ${
                                        product.priceWithWBWalletWithDiscount ? "discounted" : "normal"
                                    }`}
                                >
                                    {product.priceWithWBWalletWithDiscount} ₽
                                </span>
                                {product.priceWithoutWBWalletAndWithoutDiscount && (
                                    <span className="product-card__old-price">
                                        {product.priceWithoutWBWalletAndWithoutDiscount.toLocaleString("ru-RU")} ₽
                                    </span>
                                )}
                            </div>
                            <p className="product-card__product-name">
                                {product.title}
                            </p>
                            <div className="product-card__rating-section">
                                <img
                                    src={assets.star}
                                    alt="Rating"
                                    className="product-card__rating-icon"
                                />
                                <span className="product-card__product-rating">
                                    {product.rating}&nbsp;
                                </span>
                                <span className="product-card__product-mark">
                                    · {product.reviews} оценка
                                </span>
                            </div>
                            <button className="product-card__add-to-card-button">
                                <img
                                    src={assets.shopping_cart}
                                    alt="Shopping Cart"
                                    className="product-card__shopping-card-icon"
                                />
                                Добавить в корзину
                            </button>
                        </div>
                    );
                })}
            </div>
            <Footer/>
        </>
    );
};

export default FavoriteProducts;
