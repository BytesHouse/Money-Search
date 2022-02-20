import React from 'react';

const BitCurrency = () => {
    return (
        <div className="widget">
            <coingecko-coin-list-widget  coin-ids="bitcoin,ethereum,tether,binancecoin,usd-coin,ripple" currency="usd" locale="ru"></coingecko-coin-list-widget>
        </div>
    );
};

export default BitCurrency;