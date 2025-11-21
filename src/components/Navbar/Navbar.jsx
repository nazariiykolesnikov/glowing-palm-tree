import "../Navbar/Navbar.css";
import { assets } from "../../assets/data/assets.js";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar__left">
                <img className="navbar__logo" src={assets.i_loom_logo} alt="i loom logo"/>
                <button className="navbar__burger">
                    <img className="navbar__burger--logo" src={assets.burger_menu} alt="burger menu logo"/>
                </button>
            </div>
            <div className="navbar__center">
                <button className="navbar__location">
                    <img className="navbar__location__logo" src={assets.location} alt="Location"/>
                    <div className="navbar__location__text">
                        <span>Доставить в</span>
                        <span>Алматы, Казахстан</span>
                    </div>
                    <img className="navbar__location__arrow" src={assets.arrow_down} alt="Arrow Down"/>
                </button>
                <div className="navbar__search">
                    <img className="navbar__search--logo" src={assets.search} alt="Search"/>
                    <input className="navbar__search--input" type="text" placeholder="Введите запрос"/>
                </div>
            </div>
            <div className="navbar__right">
                <div className="navbar__icon">
                    <img src={assets.user} alt="User"/>
                    <span className="navbar__badge">1</span>
                </div>
                <div className="navbar__icon">
                    <img src={assets.favorites} alt="Favorites"/>
                    <span className="navbar__badge">2</span>
                </div>
                <div className="navbar__icon">
                    <img src={assets.shopping_bag} alt="Cart"/>
                    <span className="navbar__badge">2</span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;