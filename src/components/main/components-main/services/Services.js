import React from 'react';
import Poisk from "./img/01.svg";
import Analys from "./img/02.svg";
import Consalting from "./img/03.svg";

const Services = () => {
    return (
        <section className="page__services services">
            <div className="services__container _container">
                <div className="services__body">
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src={Poisk} alt="Environmental Consulting"/>
                            </div>
                            <h3 className="item-service__title">Поиск денег на спящих счетах</h3>
                            <div className="item-service__text">Мы уделяем особое внимание
                                в работе с клиентами
                            </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src={Analys} alt="Finance and consultancy "/>
                            </div>
                            <h3 className="item-service__title">Анализ рынка
                                криптовалют</h3>
                            <div className="item-service__text">Консультации о влажениях
                                в криптовалюту
                            </div>
                        </div>
                    </div>
                    <div className="services__column">
                        <div className="services__item item-service item-service-green">
                            <div className="item-service__icon">
                                <img src={Consalting} alt="Environmental Consulting"/>
                            </div>
                            <h3 className="item-service__title">Финансовые услуги
                                и Консалтинг</h3>
                            <div className="item-service__text">В нашей компании работают
                                юристы со всех стран Мира</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;