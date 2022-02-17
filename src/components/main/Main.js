import React from 'react';
import cover from "../../img/main-block.jpg";

const Main = () => {
    return (
            <main className="page">
                <div className="page__main-block main-block">
                    <div className="main-block__container _container">
                        <div className="main-block__body">
                            <h1 className="main-block__title">Finance and Consultancy Solution</h1>
                            <div className="main-block__text">
                                We know how large objects will act, but things on a small scale.
                            </div>
                            <div className="main-block__buttons">
                                <a href="" className="main-block__button main-block__button_orange">Get Quote
                                    Now</a>
                                <a href="" className="main-block__button main-block__button_border">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="main-block__image _ibg">
                        <img src={cover} alt="cover"/>
                    </div>
                </div>
                <section className="page__services services">
                    <div className="services__container _container">
                        <div className="services__body">
                            <div className="services__column">
                                <div className="services__item item-service">
                                    <div className="item-service__icon">
                                        <img src="img/services/01.svg" alt="Environmental Consulting"/>
                                    </div>
                                    <h3 className="item-service__title">Environmental Consulting</h3>
                                    <div className="item-service__text">We focus on ergonomics and meeting you where
                                        you work.
                                    </div>
                                </div>
                            </div>
                            <div className="services__column">
                                <div className="services__item item-service">
                                    <div className="item-service__icon">
                                        <img src="img/services/02.svg" alt="Finance and consultancy "/>
                                    </div>
                                    <h3 className="item-service__title">Finance and consultancy</h3>
                                    <div className="item-service__text">Just type what's on your mind and we'll get
                                        you there.
                                    </div>
                                </div>
                            </div>
                            <div className="services__column">
                                <div className="services__item item-service item-service-green">
                                    <div className="item-service__icon">
                                        <img src="img/services/03.svg" alt="Environmental Consulting"/>
                                    </div>
                                    <h3 className="item-service__title">Financial Services Consulting</h3>
                                    <div className="item-service__text">the quick fox jumps over the lazy dog</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__advantages advantages">
                    <div className="advantages__container _container">
                        <div className="advantages__header header-block">
                            <h2 className="header-block__title">Designing Better Experience</h2>
                            <div className="header-block__sub-title">Problems trying to resolve the conflict between
                                the two major realms <br/>of Classical physics: Newtonian mechanics.
                            </div>
                            <div className="advantages__body">
                                <div className="advantages__column">
                                    <div className="advantages__item">
                                        <div className="advantages__icon">
                                            <img src="img/advantages/01.svg" alt="Consumer Products"/>
                                        </div>
                                        <div className="advantages__value">972 +</div>
                                        <div className="advantages__text">Consumer Products</div>
                                    </div>
                                </div>
                                <div className="advantages__column">
                                    <div className="advantages__item">
                                        <div className="advantages__icon">
                                            <img src="img/advantages/02.svg" alt="Financial Services"/>
                                        </div>
                                        <div className="advantages__value">181 +</div>
                                        <div className="advantages__text">Financial Services</div>
                                    </div>
                                </div>
                                <div className="advantages__column">
                                    <div className="advantages__item">
                                        <div className="advantages__icon">
                                            <img src="img/advantages/03.svg" alt="Environmental"/>
                                        </div>
                                        <div className="advantages__value">98%</div>
                                        <div className="advantages__text">Environmental</div>
                                    </div>
                                </div>
                                <div className="advantages__column">
                                    <div className="advantages__item">
                                        <div className="advantages__icon">
                                            <img src="img/advantages/04.svg" alt="Business & Finance"/>
                                        </div>
                                        <div className="advantages__value">746 +</div>
                                        <div className="advantages__text">Business & Finance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__practice practice">
                    <div className="practice__container _container">
                        <div className="practice__header header-block">
                            <h2 className="header-block__title">Practice Advice</h2>
                            <div className="header-block__sub-title">Problems trying to resolve the conflict
                                between <br/>
                                the two major realms of Classical physics: Newtonian mechanics
                            </div>
                            <div className="practice__body">
                                <div className="practice__column">
                                    <article className="practice__item item-practice">
                                        <div className="item-practice__content">
                                            <a href="#" className="item-practice__link">
                                                <h4 className="item-practice__title">A single source of truth</h4>
                                            </a>
                                            <div className="item-practice__text">
                                                Newton thought that light was made up of particles, but then it was
                                                discovered
                                            </div>
                                        </div>
                                        <a href="#" className="item-practice__image _ibg">
                                            <img src="img/practice/01.jpg" alt="A single source of truth"/>
                                        </a>
                                    </article>
                                </div>
                                <div className="practice__column">
                                    <article className="practice__item item-practice">
                                        <div className="item-practice__content">
                                            <a href="#" className="item-practice__link">
                                                <h4 className="item-practice__title">Fastest way to organize</h4>
                                            </a>
                                            <div className="item-practice__text">
                                                “Quantum mechanics” the description of the ehaviour of matter
                                            </div>
                                        </div>
                                        <a href="#" className="item-practice__image _ibg">
                                            <img src="img/practice/02.jpg" alt="Fastest way to organize"/>
                                        </a>
                                    </article>
                                </div>
                                <div className="practice__column">
                                    <article className="practice__item item-practice">
                                        <div className="item-practice__content">
                                            <a href="#" className="item-practice__link">
                                                <h4 className="item-practice__title">Fastest way to take action</h4>
                                            </a>
                                            <div className="item-practice__text">
                                                They describe a universe consisting of bodies moving
                                            </div>
                                        </div>
                                        <a href="#" className="item-practice__image _ibg">
                                            <img src="img/practice/03.jpg" alt="Fastest way to take action"/>
                                        </a>
                                    </article>
                                </div>
                                <div className="practice__column">
                                    <article className="practice__item item-practice">
                                        <div className="item-practice__content">
                                            <a href="#" className="item-practice__link">
                                                <h4 className="item-practice__title">Work better together</h4>
                                            </a>
                                            <div className="item-practice__text">
                                                They finally obtained a consistent description of the behaviour
                                            </div>
                                        </div>
                                        <a href="#" className="item-practice__image _ibg">
                                            <img src="img/practice/04.jpg" alt="Work better together"/>
                                        </a>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__whoweare whoweare">
                    <div className="whoweare__container _container">
                        <div className="whoweare__header header-block">
                            <h2 className="header-block__title">Who We Are</h2>
                            <div className="header-block__sub-title">Problems trying to resolve the conflict between
                                the two
                                major realms <br/>
                                of Classical physics: Newtonian mechanics</div>
                        </div>
                        <div className="whoweare__body">
                            <div className="whoweare__video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/EadeOYFAzJ4"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className="whoweare__content">
                                <div className="whoweare__top">
                                    <h2 className="whoweare__title">Most trusted in our field</h2>
                                    <div className="whoweare__text">Most calendars are designed for teams. Slate
                                        is designed for freelancers who want a
                                        simple way to plan their schedule.
                                    </div>
                                </div>
                                <div className="whoweare__items">
                                    <div className="whoweare__item item-whoweare">
                                        <div className="item-whoweare__icon">
                                            <img src="img/whoweare/icons/01.svg" alt=""/>
                                        </div>
                                        <div className="item-whoweare__body">
                                            <div className="item-whoweare__title">the quick fox jumps over the lazy
                                                dog
                                            </div>
                                            <div className="item-whoweare__text">Things on a very small scale Things
                                                on a very
                                                small scale Things on a very small scale Things on a very small
                                                scale
                                            </div>
                                        </div>
                                    </div>
                                    <div className="whoweare__item item-whoweare">
                                        <div className="item-whoweare__icon">
                                            <img src="img/whoweare/icons/02.svg" alt=""/>
                                        </div>
                                        <div className="item-whoweare__body">
                                            <div className="item-whoweare__title">the quick fox jumps over the lazy
                                                dog
                                            </div>
                                            <div className="item-whoweare__text">Things on a very small scale Things
                                                on a very
                                                small scale Things on a very small scale Things on a very small
                                                scale
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="page__clients clients">
                    <div className="clients__container _container">
                        <div className="clients__items">
                            <div className="clients__item">
                                <img src="img/clients/01.png" alt="clients"/>
                            </div>
                            <div className="clients__item">
                                <img src="img/clients/02.png" alt="clients"/>
                            </div>
                            <div className="clients__item">
                                <img src="img/clients/03.png" alt="clients"/>
                            </div>
                            <div className="clients__item">
                                <img src="img/clients/04.png" alt="clients"/>
                            </div>
                            <div className="clients__item">
                                <img src="img/clients/05.png" alt="clients"/>
                            </div>
                            <div className="clients__item">
                                <img src="img/clients/06.png" alt="clients"/>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <button id="invoice" type="submit"
                                        className="subscribe__button">Оплатить
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="page__getintouch getintouch">
                    <div className="getintouch__container _container">
                        <div className="getintouch__header header-block">
                            <h2 className="header-block__title">Get In Touch</h2>
                            <div className="header-block__sub-title">Problems trying to resolve the conflict
                                between <br/> the
                                two major realms of Classical physics: Newtonian mechanics</div>
                        </div>
                        <div className="getintouch__items">
                            <div className="getintouch__item item-getintouch ">
                                <div className="item-getintouch__icon">
                                    <img src="img/contacts/icon/01.svg" alt="getintouch"/>
                                </div>
                                <div className="item-getintouch__emails">
                                    <a href="mailto:georgia.young@example.com"
                                       className="item-getintouch__email">georgia.young@example.com</a>
                                    <a href="mailto:georgia.young@ple.com"
                                       className="item-getintouch__email">georgia.young@ple.com</a>
                                </div>
                                <div className="item-getintouch__label">Get support</div>
                                <a href="#" className="item-getintouch__button">Submit Request</a>
                            </div>
                            <div className="getintouch__item item-getintouch  item-getintouch__active">
                                <div className="item-getintouch__icon">
                                    <img src="img/contacts/icon/02.svg" alt="getintouch"/>
                                </div>
                                <div className="item-getintouch__emails">
                                    <a href="mailto:georgia.young@example.com"
                                       className="item-getintouch__email">georgia.young@example.com</a>
                                    <a href="mailto:georgia.young@ple.com"
                                       className="item-getintouch__email">georgia.young@ple.com</a>
                                </div>
                                <div className="item-getintouch__label">Get support</div>
                                <a href="" className="item-getintouch__button">Submit Request</a>
                            </div>
                            <div className="getintouch__item item-getintouch ">
                                <div className="item-getintouch__icon">
                                    <img src="img/contacts/icon/03.svg" alt="getintouch"/>
                                </div>
                                <div className="item-getintouch__emails">
                                    <a href="mailto:georgia.young@example.com"
                                       className="item-getintouch__email">georgia.young@example.com</a>
                                    <a href="mailto:georgia.young@ple.com"
                                       className="item-getintouch__email">georgia.young@ple.com</a>
                                </div>
                                <div className="item-getintouch__label">Get support</div>
                                <a href="#" className="item-getintouch__button">Submit Request</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__contact contact">
                    <div className="contact__container _container">
                        <div className="contact__body">
                            <div className="contact__content">
                                <h4 className="contact__title">Consulting Agency For Your Business</h4>
                                <div className="contact__text">the quick fox jumps over the lazy dog</div>
                            </div>
                            <a href="#" className="contact__button">Contact Us</a>
                        </div>
                    </div>
                </section>
            </main>
    );
};

export default Main;