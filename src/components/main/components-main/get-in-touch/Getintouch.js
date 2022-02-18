import React from 'react';

const Getintouch = () => {
    return (
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
    );
};

export default Getintouch;