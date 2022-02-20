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
                        <a href="#" className="main-block__button main-block__button_orange"><Link to="sec3" smooth={true}>Начни поиск сейчас</Link></a>
                        <a href="#" className="main-block__button main-block__button_border"><Link to="sec1" smooth={true}>Читать дальше</Link></a>
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