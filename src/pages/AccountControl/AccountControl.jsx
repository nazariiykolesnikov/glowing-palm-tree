import { useEffect }  from 'react';
import './AccountControl.css';
import { assets } from "../../assets/data/assets.js";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const AccountControl = () => {
    useEffect(() => {
        const sidebarList = document.querySelector('.sidebar__list');

        const handleLinkClick = (e) => {
            const clickedLink = e.target.closest('a.sidebar__link');
            if (!clickedLink) return;

            document.querySelectorAll('.sidebar__link').forEach((link) => {
                link.classList.remove('active-link');
            });

            clickedLink.classList.add('active-link');
        };

        if (sidebarList) {
            sidebarList.addEventListener('click', handleLinkClick);
        }

        return () => {
            if (sidebarList) {
                sidebarList.removeEventListener('click', handleLinkClick);
            }
        };
    }, []);


    useEffect(() => {
        const toggle = document.getElementById('header-toggle');
        const sidebar = document.getElementById('sidebar');
        const header = document.getElementById('header');
        const main = document.getElementById('main');

        const toggleSidebar = () => {
            sidebar.classList.toggle('show-sidebar');
            header.classList.toggle('left-pd');
            main.classList.toggle('left-pd');
        };

        if (toggle && sidebar && header && main) {
            toggle.addEventListener('click', toggleSidebar);
        }

        return () => {
            if (toggle) toggle.removeEventListener('click', toggleSidebar);
        };
    }, []);

    const toggleSidebarCollapse = () => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('collapsed-sidebar');
        }
    };

    return (
        <>
            <Navbar />
            <div className="sidebar__page">
                <section className="sidebar" id="sidebar">
                    <div className="sidebar__container">
                        <div className="sidebar__user">
                            <div className="sidebar__img sidebar__info--img" onClick={toggleSidebarCollapse}>
                                <img className="sidebar__img" id="sidebar__img--profile_image" src={assets.profile_image} alt="image"/>
                            </div>
                            <div className="sidebar__info">
                                <h3>Katerina Yakovleva</h3>
                                <span className="sidebar__info--email">shop@omix.com</span>
                                <div className="sidebar__img sidebar__info--img" onClick={toggleSidebarCollapse}>
                                    <img className="sidebar__img" id="sidebar__img--burger_menu" src={assets.burger_menu_white} alt="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__content">
                            <div>
                                <h3 className="sidebar__title">Управление</h3>
                                <div className="sidebar__list">
                                    <a href="#" className="sidebar__link">
                                        <button className="sidebar__button sidebar__link--button">
                                            <img
                                                className="sidebar__link--image"
                                                src={assets.woman_shopping_bags}
                                                alt="Favorite items logo"
                                            />
                                        </button>
                                        <span>История заказов</span>
                                    </a>
                                    <a href="#" className="sidebar__link">
                                        <button className="sidebar__button sidebar__link--button">
                                            <img
                                                className="sidebar__link--image"
                                                src={assets.favorite_heart_sidebar}
                                                alt="Favorite items logo"
                                            />
                                        </button>
                                        <span>Избранные товары</span>
                                    </a>
                                    <a href="#" className="sidebar__link">
                                        <button className="sidebar__button sidebar__link--button">
                                            <img
                                                className="sidebar__link--image"
                                                src={assets.profile_user_logo}
                                                alt="User data logo"
                                            />
                                        </button>
                                        <span>Личные данные</span>
                                    </a>
                                    <a href="#" className="sidebar__link">
                                        <button className="sidebar__button sidebar__link--button">
                                            <img
                                                className="sidebar__link--image"
                                                src={assets.vkontakte_logo}
                                                alt="Social profiles logo"
                                            />
                                        </button>
                                        <span>Профили в соц сетях</span>
                                    </a>
                                    <a href="#" className="sidebar__link">
                                        <button className="sidebar__button sidebar__link--button">
                                            <img
                                                className="sidebar__link--image"
                                                src={assets.question_circle}
                                                alt="Support logo"
                                            />
                                        </button>
                                        <span>Поддержка</span>
                                    </a>
                                </div>
                            </div>
                            <div className="sidebar__profile-settings-list">
                                <h3 className="sidebar__title">Настроки профиля</h3>
                                <div className="sidebar__list">
                                    <a href="#" className="sidebar__link">
                                        <button
                                            className="sidebar__button sidebar__link--button"
                                            id="sidebar__button--settings-logo"
                                        >
                                            <img
                                                className="sidebar__link--image"
                                                id="sidebar__link--settings-logo"
                                                src={assets.settings_logo}
                                                alt="Settings logo"
                                            />
                                        </button>
                                        <span>Настройки</span>
                                    </a>
                                    <a href="#" className="sidebar__link">
                                        <button
                                            className="sidebar__button sidebar__link--button"
                                            id="sidebar__button--messages-logo"
                                        >
                                            <img
                                                className="sidebar__link--image"
                                                id="sidebar__link--messages_logo"
                                                src={assets.messages_logo_sidebar}
                                                alt="Messages logo"
                                            />
                                        </button>
                                        <span>Сообщения</span>
                                    </a>
                                    <a href="#" className="sidebar__link">
                                        <button
                                            className="sidebar__button sidebar__link--button"
                                            id="sidebar__button--notifications_logo"
                                        >
                                            <img
                                                className="sidebar__link--image"
                                                id="sidebar__link--notifications_logo"
                                                src={assets.notifications_logo}
                                                alt="Notifications logo"
                                            />
                                        </button>
                                        <span>Уведомления</span>
                                    </a>
                                    <a href="#" className="sidebar__link">
                                        <button className="sidebar__button sidebar__link--button">
                                            <img
                                                className="sidebar__link--image"
                                                id="sidebar__link--notifications_logo"
                                                src={assets.log_out_logo}
                                                alt="Notifications logo"
                                            />
                                        </button>
                                        <span>Вийти</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <main className="main" id="main">
                    <div className="main__container">
                        <h1>У вас на данный момент нет заказов</h1>
                        <h4>Исправляйтесь и бегом трать денежки ʕ ᵔᴥᵔ ʔ</h4>
                        <button>
                            <a href="#">Начать покупки</a>
                            <img src={assets.woman_shopping_bags_white} alt="" />
                        </button>
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    );
};

export default AccountControl;