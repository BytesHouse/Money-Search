import React from 'react';
import Facebook from './img/01.svg';
import Instagram from './img/02.svg';

const Bottom = () => {
    return (
        <div className="footer__bottom">
            <div className="footer__container _container">
                <div className="footer_copy">© 2020 GMB - Money Search. All Rights Reserved. - По деловым вопросам обращайтесь на <a href="mailto:moneysearchgmb@gmail.com">moneysearchgmb@gmail.com</a></div>
                <div className="footer__social social">
                    <a href="#" className="social__item"><img src={Facebook} alt="facebook"/></a>
                    <a href="https://www.instagram.com/poiskdeneggmb/" className="social__item"><img src={Instagram} alt="instagram"/></a>
                    {/*<a href="#" className="social__item"><img src="img/footer/social/03.svg" alt="twitter"/></a>*/}
                    {/*<a href="#" className="social__item"><img src="img/footer/social/04.svg" alt="youtube"/></a>*/}
                </div>
            </div>
        </div>
    );
};

export default Bottom;