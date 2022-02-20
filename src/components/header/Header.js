import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
            <header className="header">
                <div className="header__container _container">
                    <a href="#" className="header__logo">
                        GMB
                    </a>
                    <nav className="header__menu menu">
                        <ul className="menu__list">

                            {/*<li className="menu__item">*/}
                            {/*    <a href="#" className="menu__link"><Link to="sec1">Домой</Link></a>*/}
                            {/*</li>*/}

                            <li className="menu__item">
                                <a href="#" className="menu__link"><Link to="sec1" smooth={true}>Услуги</Link></a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link"><Link to="sec2" smooth={true}>Цены</Link></a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link"><Link to="sec3" smooth={true}>Контакты</Link></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};

export default Header;