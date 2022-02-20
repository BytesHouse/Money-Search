import React from 'react';
import SubscribeBtn from "./components/Subscribe-btn";

const currency_url = 'https://free.currconv.com/api/v7/convert';
const currency_api_key = 'a4fb3b806d76ff82386c';
const public_key = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPssBBdsFJk5bFyYtpgS7D3gdbknZwYe8PhYsiTmVUFm1zBpzJyXo3o3YpYmdVQCpEERELNXezCjsGcv4cvyiVXmZh8ZsUbptqn4n283gy2';

const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            city: '',
            email:'',
            phohe: '',
            id: ''
        }
    }

    handleNameChange = event => {
        this.setState({name: event.target.value})
    }
    handleLastNameChange = event => {
        this.setState({lastName: event.target.value})
    }
    handleCityChange = event => {
        this.setState({city: event.target.value})
    }
    handleEmailChange = event => {
        this.setState({email: event.target.value})
    }
    handlePhoneChange = event => {
        this.setState({phone: event.target.value})
    }


    stop = event => {
        event.preventDefault();
        fetch(`${currency_url}?q=USD_RUB&compact=ultra&apiKey=${currency_api_key}`)
            .then(response => response.json())
            .then(data => {
                let value = Math.round(data['USD_RUB'] * 90);
                window.QiwiCheckout.createInvoice({
                    publicKey: public_key,
                    amount: value
                })
                    .then(data => {
                        const id = Math.random().toString(36).slice(2);
                        sendFeedback('service_money-search', 'template_pqhnwnl', {
                            name: this.state.name,
                            lastName: this.state.lastName,
                            city: this.state.city,
                            email: this.state.email,
                            phone: this.state.phone,
                            id: id
                        })
                        sendFeedback('service_money-search', 'template_0vjezkm', {
                            name: this.state.name,
                            lastName: this.state.lastName,
                            email: this.state.email,
                            id: id
                        })
                        alert('Оплата прошла успешно')
                    })
                    .catch(error => {
                        //  error === {
                        //      reason: "PAYMENT_FAILED"
                        //  }
                        alert('Оплата не завершена')
                    })
            })
    }

    render(){
    return (
        <section className="page__subscribe subscribe" id="sec3">
            <div className="subscribe__container _container">
                <div className="subscribe__body">
                    <h4 className="subscribe__title">Оставить заявку</h4>
                    <form onSubmit={this.stop} className="subscribe__form">
                        <input onChange={this.handleNameChange}
                            autoComplete="off" type="text" required name="name"
                               placeholder="Ваше Имя"
                               data-error="Ошибка" data-value="" className="subscribe__input"/>
                        <input onChange={this.handleLastNameChange}
                            autoComplete="off" type="text" required name="lastName"
                               placeholder="Ваша Фамилия" data-error="Ошибка" data-value=""
                               className="subscribe__input"/>
                        <input onChange={this.handleCityChange}
                            autoComplete="off" type="text" required name="city"
                               placeholder="Гражданство"
                               data-error="Ошибка" data-value="" className="subscribe__input"/>
                        <input onChange={this.handleEmailChange}
                            autoComplete="off" type="email" required name="email"
                               placeholder="Ваш Email"
                               data-error="Ошибка" data-value="" className="subscribe__input"/>
                        <input onChange={this.handlePhoneChange}
                            autoComplete="off" type="tel" required name="phohe"
                               placeholder="Ваш Телефон"
                               data-error="Ошибка" data-value=""
                               className="subscribe__input"/>
                        <SubscribeBtn/>
                    </form>
                </div>
            </div>
        </section>
    );
    }
};

export default Subscribe;
