import React from 'react';
import SubscribeBtn from "./components/Subscribe-btn";

const Subscribe = () => {
    const script = document.createElement("script");

    return (
        <section className="page__subscribe subscribe">
            <div className="subscribe__container _container">
                <div className="subscribe__body">
                    <h4 className="subscribe__title">Оставить заявку</h4>
                    <form action="#" className="subscribe__form">
                        <input autoComplete="off" type="text" required name="form-name"
                               placeholder="Ваше Имя"
                               data-error="Ошибка" data-value="" className="subscribe__input"/>
                        <input autoComplete="off" type="text" required name="form-lastname"
                               placeholder="Ваша Фамилия" data-error="Ошибка" data-value=""
                               className="subscribe__input"/>
                        <input autoComplete="off" type="text" required name="form-citizen"
                               placeholder="Гражданство"
                               data-error="Ошибка" data-value="" className="subscribe__input"/>
                        <input autoComplete="off" type="email" required name="form-email"
                               placeholder="Ваш Email"
                               data-error="Ошибка" data-value="" className="subscribe__input"/>
                        <input autoComplete="off" type="tel" required name="form-tel"
                               placeholder="Ваш Телефон"
                               data-error="Ошибка" data-value=""
                               className="subscribe__input"/>
                        <SubscribeBtn/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
