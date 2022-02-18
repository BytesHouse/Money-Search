import React from 'react';
import Base from './img/01.jpg';
import Lawyer from './img/02.jpg';
import Crypto from  './img/03.jpg';
import Work from './img/04.jpg';

const Practice = () => {
    return (
        <section className="page__practice practice">
            <div className="practice__container _container">
                <div className="practice__header header-block">
                    <h2 className="header-block__title">Как мы сможем Вам помочь?</h2>
                    <div className="header-block__sub-title">Вы можете даже не подозревать о том,что на вас открыт счет криптовалют.<br/>
                        Мы анализируем предоставленные вами личные данные и проверяем,<br/>
                        существуют ли спящие счета на ваше имя<br/><br/><br/>
                    </div>
                    <div className="practice__body">
                        <div className="practice__column">
                            <article className="practice__item item-practice">
                                <div className="item-practice__content">
                                    <a href="#" className="item-practice__link">
                                        <h4 className="item-practice__title">Огромная база данных</h4>
                                    </a>
                                    <div className="item-practice__text">
                                        Наши юристы будут искать информацию о Ваших существующих “Спящих счетах”
                                    </div>
                                </div>
                                <a href="#" className="item-practice__image _ibg">
                                    <img src={Base} alt="A single source of truth"/>
                                </a>
                            </article>
                        </div>
                        <div className="practice__column">
                            <article className="practice__item item-practice">
                                <div className="item-practice__content">
                                    <a href="#" className="item-practice__link">
                                        <h4 className="item-practice__title">Квалифицированные Юристы</h4>
                                    </a>
                                    <div className="item-practice__text">
                                        В нашей компании работают юристы со всех стран Мира
                                    </div>
                                </div>
                                <a href="#" className="item-practice__image _ibg">
                                    <img src={Lawyer} alt="Fastest way to organize"/>
                                </a>
                            </article>
                        </div>
                        <div className="practice__column">
                            <article className="practice__item item-practice">
                                <div className="item-practice__content">
                                    <a href="#" className="item-practice__link">
                                        <h4 className="item-practice__title">Анализ рынка Криптовалют</h4>
                                    </a>
                                    <div className="item-practice__text">
                                        Наша компания  работает по всему миру - Америка, Израиль, Австрия, Россия и в ряде других стран
                                    </div>
                                </div>
                                <a href="#" className="item-practice__image _ibg">
                                    <img src={Crypto} alt="Fastest way to take action"/>
                                </a>
                            </article>
                        </div>
                        <div className="practice__column">
                            <article className="practice__item item-practice">
                                <div className="item-practice__content">
                                    <a href="#" className="item-practice__link">
                                        <h4 className="item-practice__title">Работаем с Вами всегда</h4>
                                    </a>
                                    <div className="item-practice__text">
                                        Ваш юрист будет сопровождать вас до конца и ответит на все вопросы
                                    </div>
                                </div>
                                <a href="#" className="item-practice__image _ibg">
                                    <img src={Work} alt="Work better together"/>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Practice;