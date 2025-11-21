import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/data/assets.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column margin-left">
                    <div className="footer-contact">
                        <div className="footer-icon">
                            <button className="footer-buttons">
                                <img src={assets.delivery} className="delivery" alt="" />
                            </button>
                        </div>
                        <span className="montserrat font-400 text-16">
                            <NavLink className="footer-contact__link" to="#">Доставка</NavLink>
                        </span>
                    </div>
                    <h4 className="footer-lists__heading montserrat font-600 pb-10">Покупателям</h4>
                    <ul className="footer-lists montserrat font-400 text-14 text-white">
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/privacy">Политика персональных данных</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/promotions">Акции</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/certificates">Подарочные сертификаты</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/promo-rules">Правила использования промокодов</NavLink></li>
                    </ul>
                    <h5 className="footer-bottom montserrat font-500 text-12 text-gray mt-55">
                        © 2020 – 2022 ООО «Омикс Стор».<br /> Все права защищены.
                    </h5>
                </div>
                <div className="footer-column">
                    <div className="footer-contact">
                        <div className="footer-icon">
                            <button className="footer-buttons">
                                <img src={assets.turn_back} className="turn-back" alt="" />
                            </button>
                        </div>
                        <span className="montserrat font-400 text-16">
                            <NavLink className="footer-contact__link" to="/about">Возврат и обмен</NavLink>
                        </span>
                    </div>
                    <h4 className="footer-lists__heading montserrat font-600 pb-10">Партнерам</h4>
                    <ul className="footer-lists montserrat font-400 text-14 text-white">
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/about">Партнерская программа</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/contacts">Правила использования промокодов</NavLink></li>
                    </ul>
                    <h5 className="footer-bottom montserrat font-500 text-12 text-gray mt-118">
                        Общество с ограниченной<br /> ответственностью «Омикс Стор»,<br />
                        юр.адрес: 220020, Минск, пр.<br /> Победителей, 100, оф. 203
                    </h5>
                </div>
                <div className="footer-column">
                    <div className="footer-contact">
                        <div className="footer-icon">
                            <button className="footer-buttons">
                                <img src={assets.e_mail} className="email" alt="" />
                            </button>
                        </div>
                        <span className="montserrat font-400 text-16">
                            <NavLink className="footer-contact__link" to="mailto:iloom.style@email.com">iloom.style@email.com</NavLink>
                        </span>
                    </div>
                    <h4 className="footer-lists__heading montserrat font-600 pb-10">О компании</h4>
                    <ul className="footer-lists montserrat font-400 text-14 text-white">
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/about">О нас</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link"  to="/contacts">Контакты</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/news">Новости</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/vacancies">Вакансии</NavLink></li>
                        <li className="footer-lists__item"><NavLink className="footer-lists__link" to="/partners">Партнёрская программа</NavLink></li>
                    </ul>
                    <h5 className="footer-bottom montserrat font-500 text-12 text-gray mt-20">
                        В торговом реестре с 23 июня 2010 г.,<br /> № регистрации 256476, УНП 14886482
                    </h5>
                </div>
                <div className="footer-column footer-socials-networks width-400">
                    <h4>Мы в соцсетях</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook} className="facebook" alt="Facebook" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.youtube} className="youtube" alt="YouTube" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.instagram} className="instagram" alt="Instagram" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter} className="twitter" alt="Twitter" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.tiktok} className="tiktok" alt="TikTok" />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <img src={assets.telegram} className="telegram" alt="Telegram" />
                        </a>
                    </div>
                    <div className="payment-systems">
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.belcard} className="belcard" alt="Belcard" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.visa} className="visa" alt="Visa" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img src={assets.mastercard} className="mastercard" alt="MasterCard" />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <img src={assets.mir} className="mir" alt="Mir" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;