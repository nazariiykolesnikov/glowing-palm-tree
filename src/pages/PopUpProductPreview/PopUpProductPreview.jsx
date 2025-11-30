import './PopUpProductPreview.css';
import { assets } from "../../assets/data/assets.js";
import { productPreviewImage } from "../../assets/data/pop-up-product-preview-images.js";
import { popUpProductPreviewImages } from "../../assets/data/pop-up-product-preview-images.js";
import { useState } from "react";

const PopUpProductPreview = () => {
    const [mainImage, setMainImage] = useState(productPreviewImage);
    const [activeImageId, setActiveImageId] = useState(1);
    const [count, setCount] = useState(1);

    const handleImageClick = (id, src) => {
        setMainImage(src);
        setActiveImageId(id);
    };

    const handleCounterIncrement = () => {
        setCount((prev) => prev + 1 );
    };

    const handleCounterDecrement = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    };


    return (
        <>
            <div className="pop-up-product-preview__container">
                <div className="pop-up-product-preview__wrapper">
                    <div className="pop-up-product-preview__main-image--container">
                        <img
                            className="pop-up-product-preview__main-image"
                            src={mainImage}
                            alt="Чорне плаття в горошок"
                        />
                    </div>
                    <div className="pop-up-product-preview__product-card">
                        <div className="pop-up-product-preview__product-rating">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={assets.star_filled_black}
                                    alt="Оценка: звезда"
                                    className="pop-up-product-preview__product-rating-star"
                                />
                            ))}
                        </div>
                        <h2 className="pop-up-product-preview__product-title">
                            Чёрное платье в крупный горошек с вырезом "каре" и широкими рукавами
                        </h2>
                        <div className="pop-up-product-preview__product-price-reviews">
                            <span className="pop-up-product-preview__product-price">79.99 BYN</span>
                        </div>
                        <p className="pop-up-product-preview__product-description">
                            Красивое женское платье А-образного силуэта из ткани поплин. Вырез в форме каре, короткие
                            расширенные рукава собраны на резинку. Пояс на талии акцентирует внимание на женственность
                            фигуры.
                            Нижний ярус платья – широкая рюша с волнообразной сборкой. Рекомендуем для легких летних
                            образов!
                        </p>
                        <p className="pop-up-product-preview__product-color">
                            Цвет:&nbsp;&nbsp;Чёрно-белый горошек
                        </p>
                        <div className="pop-up-product-preview__product-card">
                            { popUpProductPreviewImages.map(({id, src, alt, className}) => (
                                <img
                                    key={id}
                                    className={`${className} ${activeImageId === id ? "product-card__active-mini-image" : ""}`}
                                    src={src}
                                    alt={alt}
                                    onClick={() => handleImageClick(id, src)}
                                />
                            ))}
                        </div>
                        <div className="pop-up-product-preview__product-sizes">
                            <p className="product-sizes__header">Размер:</p>
                            <div className="pop-up-product-preview__product-size-buttons">
                                {["XS", "S", "M", "L", "XL"].map((size) => (
                                    <button className="pop-up-product-preview__product-size-button" key={size}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <a className="pop-up-product-preview__size-guide" href="#">
                                Подобрать размер
                            </a>
                        </div>
                        <div className="pop-up-product-preview__product-quantity--container">
                            <div className="pop-up-product-preview__product-quantity">
                                <div className="product-quantity__wrapper">
                                    <div className="product-quantity">
                                        <button
                                            className="product-quantity__button"
                                            aria-label="Уменьшить количество"
                                            onClick={handleCounterDecrement}
                                        >
                                            <img
                                                className="product-quantity__minus"
                                                src={assets.minus_logo}
                                            />
                                        </button>
                                        <span>
                                            {count}
                                        </span>
                                            <button
                                                className="product-quantity__button"
                                                aria-label="Увеличить количество"
                                                onClick={handleCounterIncrement}
                                        >
                                            <img
                                                className="product-quantity__plus"
                                                src={assets.plus_logo}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="pop-up-product-preview__add-to-basket">
                                <button
                                    aria-label="Добавить товар в корзину"
                                    className="add-to-basket__button"
                                >
                                    <img
                                        className="add-to-basket__button-icon"
                                        src={assets.add_to_card_icon}
                                        alt="Иконка корзины"
                                    />
                                    <span className="add-to-basket__button-text">В корзину</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="pop-up-product-preview__watch-description">
                                <button
                                    aria-label="Смотреть полное описание"
                                    className="pop-up-product-preview__watch-description-button"
                                >
                                    <img
                                        className="watch-description__button-icon"
                                        src={assets.eye_logo}
                                        alt="Иконка глаза"
                                    />
                                    <span className="watch-description__button-text">Смотреть полное описание</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pop-up-product-preview__share-and-favorites">
                        <div className="pop-up-product-preview__share-and-favorites--wrapper">
                            <span className="pop-up-product-preview__product-reviews">2 отзыва</span>
                            <div className="product-preview__share-and-favorites">
                                <img className="product-preview__share-image" src={assets.fi_heart} alt="Добавить в избранное" />
                                <img className="product-preview__favorites-image" src={assets.share_alt_outlined} alt="Поделиться" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopUpProductPreview;