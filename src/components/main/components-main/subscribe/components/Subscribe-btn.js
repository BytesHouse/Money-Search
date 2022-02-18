import React from 'react';
const public_key = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPssBBdsFJk5bFyYtpgS7D3gdbknZwYe8PhYsiTmVUFm1zBpzJyXo3o3YpYmdVQCpEERELNXezCjsGcv4cvyiVXmZh8ZsUbptqn4n283gy2';

const SubscribeBtn = () => {
    function pay(e){
        e.preventDefault();
        window.QiwiCheckout.createInvoice({
            publicKey: public_key,
            amount: 1000
        })
            .then(data => {
                //  data === {
                //    publicKey: '5nAq6abtyCz4tcDj89e5w7Y5i524LAFmzrsN6bQTQ3c******',
                //    amount: 1.23,
                //    phone: '79123456789',
                //  }
            })
            .catch(error => {
                //  error === {
                //      reason: "PAYMENT_FAILED"
                //  }
            })
    }
    return (
        <div>
            <button onClick={pay} id="invoice" type="submit"
                    className="subscribe__button">Оплатить
            </button>
        </div>
    );
};

export default SubscribeBtn;

