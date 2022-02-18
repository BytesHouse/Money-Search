import React from 'react';
import Request from './img/01.svg';
import Consalting from  './img/02.svg';
import Search from  './img/03.svg';
import Services from './img/04.svg';

const Advantages = () => {
    return (
        <section className="page__advantages advantages">
            <div className="advantages__container _container">
                <div className="advantages__header header-block">
                    <h2 className="header-block__title">Наши достижения</h2>
                    <div className="header-block__sub-title">Наша цель помочь Вам найти, Ваши спящие счета криптовалют <br/><br/><br/>
                    </div>
                    <div className="advantages__body">
                        <div className="advantages__column">
                            <div className="advantages__item">
                                <div className="advantages__icon">
                                    <img src={Request} alt="Consumer Products"/>
                                </div>
                                <div className="advantages__value">972 +</div>
                                <div className="advantages__text">Обработаных заявок</div>
                            </div>
                        </div>
                        <div className="advantages__column">
                            <div className="advantages__item">
                                <div className="advantages__icon">
                                    <img src={Consalting} alt="Financial Services"/>
                                </div>
                                <div className="advantages__value">181 +</div>
                                <div className="advantages__text">Консультаций</div>
                            </div>
                        </div>
                        <div className="advantages__column">
                            <div className="advantages__item">
                                <div className="advantages__icon">
                                    <img src={Search} alt="Environmental"/>
                                </div>
                                <div className="advantages__value">98%</div>
                                <div className="advantages__text">Успешных поисков</div>
                            </div>
                        </div>
                        <div className="advantages__column">
                            <div className="advantages__item">
                                <div className="advantages__icon">
                                    <img src={Services} alt="Business & Finance"/>
                                </div>
                                <div className="advantages__value">746 +</div>
                                <div className="advantages__text">Выполенных услуг</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;