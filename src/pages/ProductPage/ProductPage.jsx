import { useState } from "react";
import './ProductPage.css';
import { assets } from "../../assets/data/assets.js";
import { review_images } from "../../assets/data/reviews_images.js";
import { productBigZoomImage } from "../../assets/data/product-page_mini-images.js";
import { product_page_mini_images } from "../../assets/data/product-page_mini-images.js";
import {
    products_mini_hoodies_p1,
    products_mini_hoodies_p2,
    products_mini_hoodies_p3,
    products_mini_t_shirts_p1,
    products_mini_t_shirts_p2,
    products_mini_t_shirts_p3,
    products_mini_sweatshirts_p1,
    products_mini_sweatshirts_p2
} from "../../assets/data/products-mini.js";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import ProductList from "./ProductList/ProductList.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const breadcrumbs = [
    { id: 1, link: "Главная" },
    { id: 2, link: "Женщинам" },
    { id: 3, link: "Одежда для женщин" },
    { id: 4, link: "Женские штаны" },
    { id: 5, link: "Джинсы" }
];

const productListOptions = [
    products_mini_hoodies_p1,
    products_mini_hoodies_p2,
    products_mini_hoodies_p3,
    products_mini_t_shirts_p1,
    products_mini_t_shirts_p2,
    products_mini_t_shirts_p3,
    products_mini_sweatshirts_p1,
    products_mini_sweatshirts_p2
];

const ProductPage = () => {
    const [mainImage, setMainImage] = useState(productBigZoomImage);
    const [activeImageId, setActiveImageId] = useState(1);

    const handleImageClick = (id, src) => {
        setMainImage(src);
        setActiveImageId(id);
    };

    return (
        <>
            <Navbar/>
            <div className="product-page__section">
                <div className="product-page__wrapper">
                    <Breadcrumbs breadcrumbs={breadcrumbs}/>
                    <div className="product-wrapper">
                        <div className="product-container">
                            <div className="product-case">
                                <div className="product-image">
                                    <div className="product-image__container">
                                        <img
                                            className="product-preview-image"
                                            src={mainImage}
                                            alt="Футболка с вышивкой “А голову ты дома не забыл?”"
                                        />
                                       <div className="product-image__case">
                                           {product_page_mini_images.map(({id, src, alt, idName}) => (
                                               <img
                                                   key={id}
                                                   id={idName}
                                                   className={`${activeImageId === id ? "active-mini-image" : ""}`}
                                                   src={src}
                                                   alt={alt}
                                                   onClick={() => handleImageClick(id, src)}
                                               />
                                           ))}
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="product-card__container">
                                    <div className="product-card__wrapper">
                                        <div className="product-rating__container">
                                            <div className="product-rating__wrapper">
                                                <div className="product-rating">
                                                    {[...Array(5)].map((_, starId) => (
                                                        <img
                                                            key={starId}
                                                            src={assets.star_filled_gold}
                                                            alt="Оценка: звезда"
                                                            className="product-rating__star"
                                                        />
                                                    ))}
                                                </div>
                                                <h2 className="product-title">
                                                    Футболка с вышивкой “А голову ты дома не забыл?”
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="product-title-and-price__container">
                                            <div className="product-title-and-price__wrapper">
                                                <span className="product-reviews">
                                                    2 отзыва
                                                </span>
                                                <img
                                                    className="product-add-to-favorites__heart-icon"
                                                    src={assets.fi_heart}
                                                    alt="Добавить в избранное"
                                                />
                                                <img
                                                    className="product-add-to-favorites__share-icon"
                                                    src={assets.share_alt_outlined}
                                                    alt="Поделиться"
                                                />
                                            </div>
                                        </div>
                                        <span className="product-price">
                                            25.000 ₸
                                        </span>
                                        <div className="product-color">
                                            <span className="product-color__text" id="product-color__text-1">
                                                Цвет:
                                            </span>
                                            <div className="product-color__color-palette">
                                                <button className="product-color__color-palette--button">
                                                    <a className="product-color__color-palette--button-link" href="#">
                                                        &nbsp;
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-color">
                                            <span className="product-color__text" id="product-color__text-2">Размер:</span>
                                            <button className="product-size___btn">
                                                <a className="product-size__btn-link" href="#">One Size</a>
                                            </button>
                                        </div>
                                        <a className="size-guide" href="#">Параметры размера</a>
                                        <div className="delivery-services__container">
                                            <div className="delivery-services__wrapper">
                                                <div className="delivery-services__case">
                                                    <img
                                                        className="delivery-services__courier-case--image"
                                                        src={assets.delivery_car_icon}
                                                        alt="delivery services case image"
                                                    />
                                                    <p className="delivery-services__courier-case--text">
                                                        Курьером до двери - от
                                                        <span className="delivery-services__case--text-color">
                                                            &nbsp;50 000 ₸&nbsp;
                                                        </span>
                                                        бесплатно
                                                    </p>
                                                </div>
                                                <div className="delivery-services__sdek-case">
                                                    <img
                                                        className="delivery-services__sdek-case--image"
                                                        src={assets.delivery_station_icon}
                                                        alt="delivery services sdek case image"
                                                    />
                                                    <p className="delivery-services__sdek-case--text">
                                                        Доставка до пункта выдачи Сдэк - от<br/>
                                                        <span
                                                            className="delivery-services__sdek-case--text-color"
                                                        >
                                                            30 000 ₸&nbsp;
                                                        </span>
                                                        бесплатно
                                                    </p>
                                                </div>
                                                <div className="delivery-services__counter-button--container">
                                                    <div className="delivery-services__counter-button--wrapper">
                                                        <div className="delivery-services__counter-button--case">
                                                            <button className="delivery-services__counter-button">
                                                                <a className="delivery-services__counter-button-link">
                                                                    <img className="delivery-services__counter-button-image" src={assets.minus_logo} alt="delivery services minus logo" />
                                                                </a>
                                                            </button>
                                                            <p className="delivery-services__counter-value">
                                                                 <span className="delivery-services__counter-value--text">1</span>
                                                            </p>
                                                            <button className="delivery-services__counter-button">
                                                                 <a className="delivery-services__counter-button-link">
                                                                     <img className="delivery-services__counter-button-image" src={assets.plus_logo} alt="delivery services plus logo" />
                                                                 </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="delivery-services__add-to-card--container">
                                                        <div className="delivery-services__add-to-card--wrapper">
                                                            <button className="delivery-services__add-to-card--button">
                                                                <div className="delivery-services__add-to-card--button--wrapper">
                                                                    <a className="delivery-services__add-to-card--button-link">
                                                                        В корзину
                                                                    </a>
                                                                    <img className="delivery-services__add-to-card--button-image" src={assets.add_to_card_icon} alt="add to card button" />
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card__right-side">
                                <div className="product-card__right-side--container">
                                    <p className="product-card__right-side--text__header">
                                        Характеристики и описание
                                    </p>
                                    <p className="product-card__right-side--text__description">
                                        Черная оверсайз-футболка с машинной вышивкой «а голову ты
                                        дома не забыл?» Эта футболка создана для тех, кто ценит
                                        комфорт, стиль и лёгкий юмор в повсед
                                    </p>
                                </div>
                                <div className="product-addition-information__case">
                                    <p className="product-addition-information__case--header-addition">
                                        Дополнительная информация
                                    </p>
                                    <p className="product-addition-information__case--header-characteristics">
                                        Характеристики
                                    </p>
                                    <p className="product-addition-information__case--header-producer-country">
                                        Страна производства: Казахстан
                                    </p>
                                    <p className="product-addition-information__case--header-description">
                                        Описание
                                    </p>
                                    <p className="product-addition-information__case--descriptions">
                                        Черная оверсайз-футболка с машинной вышивкой «а голову ты
                                        дома не забыл?» Эта футболка создана для тех, кто ценит
                                        комфорт, стиль и лёгкий юмор в повседн
                                    </p>
                                    <p className="product-addition-information__case--header-composition">
                                        Состав
                                    </p>
                                    <p className="product-addition-information__case--composition">
                                        100% хлопок
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consumers-reviews">
                    <div className="review-section">
                        <div className="review-left">
                            <h2 className="review-left__header">Отзывы</h2>
                            {review_images.map((review, index) => (
                                <div className="review-card" key={index}>
                                    <div className="review-header">
                                        <span className="review-author">Людмила</span>
                                        <span className="review-date">Сегодня, 13:54</span>
                                    </div>
                                    <div className="review-details__container">
                                        <div className="review-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <img
                                                    key={i}
                                                    src={assets.star_filled_black}
                                                    alt="Оценка: звезда"
                                                    className="product-rating__star"
                                                />
                                            ))}
                                        </div>
                                        <div className="review-details">
                                            <span>Цвет: {review.color}</span>
                                            <span>Размер: {review.size}</span>
                                        </div>
                                    </div>
                                    <p className="review-text">{review.description}</p>
                                    <img
                                        className="review-image"
                                        src={review.src}
                                        alt={review.alt}
                                    />
                                    <div className="review-report-and-aswer__wrapper">
                                        <a href="#" className="report-link">Пожаловаться на отзыв</a>
                                        <a href="#" className="answer-link">Ответить</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="review-right">
                            <div className="rating-summary__container">
                                <div className="rating-summary__wrapper">
                                    <div className="rating-summary">
                                        <div className="rating-score">5</div>
                                        <div className="rating-count">на основании 2 отзывов</div>
                                        <div className="product-rating product-rating-2">
                                            {[...Array(5)].map((_, i) => (
                                                <img
                                                    key={i}
                                                    src={assets.star_filled_gold}
                                                    alt="Оценка: звезда"
                                                    className="product-rating__star"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="rating-summary__container">
                                        <div className="rating-breakdown">
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    5
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    100%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    4
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    3
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    2
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                            <li className="rating-breakdown__position">
                                                <p className="rating-breakdown__mark">
                                                    1
                                                </p>
                                                <div className="rating-breakdown__rectangle">
                                                    &nbsp;
                                                </div>
                                                <div className="rating-breakdown__rectangle__front">
                                                    &nbsp;
                                                </div>
                                                <p className="rating-breakdown__percentage">
                                                    0%
                                                </p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-review__wrapper">
                                <button className="leave-review__button">
                                    <a className="leave-review__button-link" href="#">
                                        Оставить отзыв
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="review-left review-left__similar-goods">
                        <h2>Похожие товары</h2>
                    </div>
                </div>
                <div className="product-page__simular-goods">
                    <div className="product-page__simular-goods--container">
                        {productListOptions.map((product) => (
                            <ProductList products={product}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductPage;
