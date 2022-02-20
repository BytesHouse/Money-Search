import React from 'react';
import cover from "../../../../img/main-block.jpg";
import { Link, animateScroll as scroll } from "react-scroll";


const MainBlock = () => {
    return (
        <div className="page__main-block main-block">
            <div className="main-block__container _container">
                <div className="main-block__body">
                    <h1 className="main-block__title">Поиск денег и спящих счетов</h1>
                    <div className="main-block__text">
                        Мы поможем найти ваши деньги в интернете.
                    </div>
                    <div className="main-block__buttons">
                        <Link to="sec3" smooth={true}><a href="#" className="main-block__button main-block__button_orange">Начни поиск сейчас</a></Link>
                        <Link to="sec1" smooth={true}><a href="#" className="main-block__button main-block__button_border">Читать дальше</a></Link>
                    </div>
                </div>
            </div>
            <div className="main-block__image _ibg">
                <img src={cover} alt="cover"/>
            </div>
        </div>
    );
};

export default MainBlock;