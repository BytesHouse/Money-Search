import React from 'react';
import Bitcoin from './img/01.png';
import Etherium from './img/02.png';
import Tcoin from './img/03.png';
import OtherCoin from './img/04.png';
import UsdCoin from './img/05.png';
import LastCoin from './img/06.png';

const Clients = () => {
    return (
        <div className="page__clients clients">
            <div className="clients__container _container">
                <div className="clients__items">
                    <div className="clients__item">
                        <img src={Bitcoin} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={Etherium} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={Tcoin} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={OtherCoin} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={UsdCoin} alt="clients"/>
                    </div>
                    <div className="clients__item">
                        <img src={LastCoin} alt="clients"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;