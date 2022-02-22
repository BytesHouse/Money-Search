import React from 'react';
import Peoples from './img/icons/01.svg';
import Percent from './img/icons/02.svg';
import BitCurrency from "./BitCurrency";

const Whoweare = () => {
    return (
        <section className="page__whoweare whoweare" id="sec2">
            <div className="whoweare__container _container">
                <div className="whoweare__header header-block">
                    <h2 className="header-block__title">Почему мы тут?</h2>
                    <div className="header-block__sub-title">Наша компания нашла большое количество спящих счетов людям,<br/>
                        которые даже не подозревали о их существовании , на общую сумму 60 млн$.</div>
                </div>
                <div className="whoweare__body">
                    <div className="whoweare__video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Owt-TQuvivo"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="whoweare__content">
                        <div className="whoweare__top">
                            <h2 className="whoweare__title">О наших услугах</h2>
                            <div className="whoweare__text">Если вы заинтересованы в наших услугах
                                оставте вашу электронную почту мы
                                вышлем вам условия предоплаты
                                согласно вашему региону.
                            </div>
                        </div>
                        <div className="whoweare__items">
                            <div className="whoweare__item item-whoweare">
                                <div className="item-whoweare__icon">
                                    <img src={Peoples} alt=""/>
                                </div>
                                <div className="item-whoweare__body">
                                    <div className="item-whoweare__title">Предоплата  90$ + НДС
                                    </div>
                                    <div className="item-whoweare__text">Согласно вашему региону
                                    </div>
                                </div>
                            </div>
                            <div className="whoweare__item item-whoweare">
                                <div className="item-whoweare__icon">
                                    <img src={Percent} alt=""/>
                                </div>
                                <div className="item-whoweare__body">
                                    <div className="item-whoweare__title">В дальнейшем услуги
                                        оплачиваются по факту
                                        получения денег
                                    </div>
                                    <div className="item-whoweare__text">до 10 000 $ 6 %<br/>
                                        свыше 10 000 $ до 100 000 $ 4 %<br/>
                                        свыше 100 000 $ 2 %<br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BitCurrency/>
            </div>
        </section>
    );
};

export default Whoweare;