import { useState } from "react";
import star_filled_black from "../../assets/logo/StarFilledBlack/star.svg";
const product_preview_image = "https://i.ibb.co/JwCr4bbQ/blue-hoodie-with-honk-embroidery-01.webp";
import fi_heart from "../../assets/logo/FiHeart/heart-svgrepo-com.svg";
import share_alt_outlined from "../../assets/logo/ShareAltOutlined/share-svgrepo-com.svg";
import add_to_card_icon from "../../assets/logo/AddToCard/shape.svg";
import eye_icon from "../../assets/logo/Eye/eye.svg";
const oversize_blue_hoodie_with_non_brushed_piping_01 = "https://i.ibb.co/GvGYCB41/oversize-blue-hoodie-with-non-brushed-piping-01.webp"
const oversize_blue_hoodie_with_non_brushed_piping_02 = "https://i.ibb.co/dJV9s0Mr/oversize-blue-hoodie-with-non-brushed-piping-02.webp"
const oversize_blue_hoodie_with_non_brushed_piping_03 = "https://i.ibb.co/35LgFtbL/oversize-blue-hoodie-with-non-brushed-piping-03.webp"
const oversize_blue_hoodie_with_non_brushed_piping_04 = "https://i.ibb.co/Gfjtr6q1/oversize-blue-hoodie-with-non-brushed-piping-04.webp"
const oversize_blue_hoodie_with_non_brushed_piping_05 = "https://i.ibb.co/4gpnqHN4/oversize-blue-hoodie-with-non-brushed-piping-05.webp"
import './PopUpProductPreview.css';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const product_mini_images = [
    {
        id: 1,
        src: oversize_blue_hoodie_with_non_brushed_piping_01,
        alt: "product_mini_image_1",
        className: "product-mini-image",
    },
    {
        id: 2,
        src: oversize_blue_hoodie_with_non_brushed_piping_02,
        alt: "product_mini_image_2",
        className: "product-mini-image",
    },
    {
        id: 3,
        src: oversize_blue_hoodie_with_non_brushed_piping_03,
        alt: "product_mini_image_3",
        className: "product-mini-image",
    },
    {
        id: 4,
        src: oversize_blue_hoodie_with_non_brushed_piping_04,
        alt: "product_mini_image_4",
        className: "product-mini-image",
    },
    {
        id: 5,
        src: oversize_blue_hoodie_with_non_brushed_piping_05,
        alt: "product_mini_image_5",
        className: "product-mini-image",
    }
];

const PopUpProductPreview = () => {
    const [mainImage, setMainImage] = useState(product_preview_image);
    const [activeImageId, setActiveImageId] = useState(1);

    const handleImageClick = (id, src) => {
        setMainImage(src);
        setActiveImageId(id);
    };

    return (
        <>
            <Navbar/>
            <section className="product-container">
                <figure className="product-image">
                    <img
                        className="product-preview-image"
                        src={mainImage}
                        alt="Чорне плаття в горошок"
                    />
                </figure>
                <article className="product-card">
                    <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={star_filled_black}
                                alt="Оценка: звезда"
                                className="product-rating__star"
                            />
                        ))}
                    </div>
                    <h2 className="product-title">
                        Чёрное платье в крупный горошек с вырезом "каре" и широкими рукавами
                    </h2>
                    <div className="product-price-reviews">
                        <span className="product-price">79.99 BYN</span>
                    </div>
                    <p className="product-description">
                        Красивое женское платье А-образного силуэта из ткани поплин. Вырез в форме каре, короткие
                        расширенные рукава собраны на резинку. Пояс на талии акцентирует внимание на женственность
                        фигуры.
                        Нижний ярус платья – широкая рюша с волнообразной сборкой. Рекомендуем для легких летних
                        образов!
                    </p>
                    <p className="product-color">
                        <strong>Цвет:</strong>&nbsp;&nbsp;Чёрно-белый горошек
                    </p>
                    <div className="product-mini-images">
                        {product_mini_images.map(({id, src, alt, className}) => (
                            <img
                                key={id}
                                className={`${className} ${activeImageId === id ? "active-mini-image" : ""}`}
                                src={src}
                                alt={alt}
                                onClick={() => handleImageClick(id, src)}
                                style={{cursor: "pointer"}}
                            />
                        ))}
                    </div>
                    <div className="product-sizes">
                        <p>Размер:</p>
                        <div className="product-size-buttons">
                            {["XS", "S", "M", "L", "XL"].map((size) => (
                                <button className="product-size-button" key={size}>
                                    {size}
                                </button>
                            ))}
                        </div>
                        <a href="#" className="size-guide">
                            Подобрать размер
                        </a>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", gap: "1.4rem"}}>
                        <div className="product-quantity">
                            <button style={{borderRadius: "50%"}} aria-label="Уменьшить количество">−</button>
                            <span>1</span>
                            <button style={{borderRadius: "50%"}} aria-label="Увеличить количество">+</button>
                        </div>
                        <div className="product-card-addition">
                            <button
                                aria-label="Добавить товар в корзину"
                                className="product-card-addition__button"
                            >
                                <img
                                    className="product-card-addition__button-image"
                                    src={add_to_card_icon}
                                    alt="Иконка корзины"
                                />
                                <span className="product-card-addition__text">В корзину</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="product-watch-description">
                            <button
                                aria-label="Смотреть полное описание"
                                className="product-watch-description__button"
                            >
                                <img
                                    className="product-watch-description__button-image"
                                    src={eye_icon}
                                    alt="Иконка глаза"
                                />
                                <span className="product-watch-description__text">Смотреть полное описание</span>
                            </button>
                        </div>
                    </div>
                </article>
                <aside className="product-card__right-side">
                    <div className="product-meta">
                        <span className="product-reviews">2 отзыва</span>
                        <div className="product-icons">
                            <img className="product-add-to-favorites" src={fi_heart} alt="Добавить в избранное"/>
                            <img className="product-add-to-favorites" src={share_alt_outlined} alt="Поделиться"/>
                        </div>
                    </div>
                </aside>
            </section>
            <Footer/>
        </>
    );
};

export default PopUpProductPreview;