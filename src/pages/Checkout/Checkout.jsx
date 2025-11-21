import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import "./Checkout.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const breadcrumbs = [
    { id: 1, link: "Корзина" },
    { id: 2, link: "Оформление заказа" },
];

const Checkout = () => {
    return (
        <>
            <Navbar/>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <section className="checkout__section">
                <h2 className="checkout__order-booking">Оформление заказа</h2>
                <p className="checkout__contant-info">Контактная информация</p>
                <div className="checkout__wrapper">
                    <div className="checkout__left-card">
                        <div className="checkout__left-card--wrapper">
                            <div className="checkout__left-card--left-side">
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-1" type="text" name="Имя" placeholder="Имя" required/>
                                </label>
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-2" type="text" name="E-mail" placeholder="E-mail" required/>
                                </label>
                            </div>
                            <div className="checkout__left-card--right-side">
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-3" type="text" name="Фамилия" placeholder="Фамилия" required/>
                                </label>
                                <label className="checkout__left-card--label">
                                    <input className="checkout__left-card--input" id="checkout__left-card--input-4" type="text" name="Телефон" placeholder="Телефон" required/>
                                </label>
                            </div>
                            <div className="horizontal-line" id="horizontal-line-2"></div>
                            <div className="checkout__left-card--address-delivery-data">
                                <div className="delivery-data--wrapper">
                                    <h3 className="address-delivery-data__header">Данные адреса доставки</h3>
                                    <p className="address-delivery-data__adress">Беларусь, г. Минск, ул. Брилевская, д.2, кв. 15</p>
                                    <a className="address-delivery-data__change-address" href="#">Изменить адрес</a>
                                </div>
                                <div className="delivery-data--wrapper">
                                    <a className="address-delivery-data__other-delivery-way" href="#">Другой способ доставки</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__right-card">
                        <div className="checkout__right-card--wrapper">
                            <h2>Сумма заказа</h2>
                            <div className="checkout__right-card--order-sum-card--container">
                                <div className="checkout__right-card--order-sum-card-item">
                                    <p>Стоимость товаров</p>
                                    <p>25.000 ₸</p>
                                </div>
                                <div className="checkout__right-card--order-sum-card-item">
                                    <p>Стоимость товаров</p>
                                    <p>5.000 ₸</p>
                                </div>
                                <div className="checkout__right-card--order-sum-card-item">
                                    <p>Доставка</p>
                                    <p>5.000 ₸</p>
                                </div>
                                <div className="checkout__right-card--order-sum-card-item">
                                    <p>Сумма скидки</p>
                                    <p>0 ₸</p>
                                </div>
                                <div className="horizontal-line" id="horizontal-line-1"></div>
                                <div className="checkout__right-card--order-sum-card-item" id="checkout__right-card--order-sum-card-item--last-child">
                                    <strong>Общая сумма</strong>
                                    <p>35.000 ₸</p>
                                </div>
                            </div>
                            <button className="checkout__right-card--button">
                                <a className="checkout__right-card--button-link" href="" alt="">
                                    Перейти к оформлению
                                </a>
                            </button>
                            </div>
                        </div>
                    </div>
            </section>
            <Footer/>
        </>
    );
}

export default Checkout;