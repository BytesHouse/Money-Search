import React from 'react';

const Header = () => {
    return (
            <header className="header">
                <div className="header__container _container">
                    <a href="#" className="header__logo">
                        GMB
                    </a>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#" className="menu__link">Домой</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Услуги</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Цены</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};

export default Header;