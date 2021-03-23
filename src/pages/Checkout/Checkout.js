import React, {Component} from 'react';
import {Title} from "../../components";
import {API, ShoppingCart} from "../../helpers";
import {Urls} from "../../data";
import {Link} from "react-router-dom";
import DeliveryForm from "./components/DeliveryForm";
import PaymentForm from "./components/PaymentForm";

class Checkout extends Component {

    state = {
        cart: ShoppingCart.getCart(),
        totalCart: ShoppingCart.totalCart(),
        paymentMethod: 'mtn'

    }

    componentDidMount() {

    }

    onInputChange = (key, value) => {
        this.setState({[key]: value});
    };

    submitPayment = (event) => {
        event.preventDefault();
        this.setState({error: null}, () => {
            const {area, direction, paymentMethod, phone, cart} = this.state;
            if (!area || !direction || !paymentMethod || !phone) {
                this.setState({error: "Tout les champs sont requit", loading: false});
                return;
            }

            const items = {};
            cart.map((cartItem) => items[cartItem.id] = cartItem.count);

            const order = {
                cart: items,
                delivery_address_district: area,
                delivery_address_indication: direction,
                payment_method: paymentMethod,
            }

            API.post('order/', order, true).then((order) => {
                ShoppingCart.clearCart();
                order.productCount = Object.values(order.cart).reduce((a, b) => a + b);
                this.props.history.push({
                    pathname: `${Urls.checkout.base}/${order.id}`,
                    state: order
                });
            }).catch(console.error)
        });


    }


    render() {
        const {totalCart, paymentMethod, area, direction, error} = this.state;

        return (
            <div className="flex flex-col w-full items-center h-screen bg-black text-white overflow-auto">
                <Link to={Urls.home.base} className="flex flex-row items-center my-8 w-11/12 mx-auto">
                    <div className="mr-2">{"<--"}</div>
                    <div className="leading-none">Revenir au panier</div>
                </Link>
                <div className="w-11/12 mx-auto mb-8 flex flex-col justify-start">
                    <Title title="La caisse" classnames=""/>
                    <div className="flex flex-col items-start justify-center border-2 rounded-md p-4 mt-8">
                        <div className="flex flex-row items-center">
                            <div className="flex items-center mr-3">
                                <svg className="fill-current" width="15" height="17" viewBox="0 0 15 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.5487 10.9266C14.5469 10.4434 14.4002 9.97195 14.1276 9.57307C13.855 9.17419 13.469 8.86627 13.0195 8.68912L14.5245 3.05522C14.556 2.93524 14.5593 2.80961 14.5341 2.68814C14.509 2.56668 14.4561 2.45267 14.3797 2.35501C14.3015 2.2635 14.2038 2.1907 14.0937 2.14194C13.9837 2.09319 13.8641 2.06974 13.7438 2.07331H2.7175L2.4519 1.05921C2.40573 0.887711 2.30412 0.736299 2.16291 0.628571C2.0217 0.520844 1.84882 0.462851 1.67121 0.463631H0.0615234V2.07331H1.05148L3.04749 9.52615C3.09465 9.70174 3.19988 9.85618 3.34602 9.96433C3.49217 10.0725 3.67063 10.128 3.85233 10.1217H12.1342C12.3476 10.1217 12.5523 10.2065 12.7033 10.3575C12.8542 10.5084 12.939 10.7131 12.939 10.9266C12.939 11.14 12.8542 11.3447 12.7033 11.4957C12.5523 11.6466 12.3476 11.7314 12.1342 11.7314H1.67121C1.45775 11.7314 1.25304 11.8162 1.1021 11.9672C0.951161 12.1181 0.866365 12.3228 0.866365 12.5363C0.866365 12.7497 0.951161 12.9544 1.1021 13.1054C1.25304 13.2563 1.45775 13.3411 1.67121 13.3411H2.62092C2.48855 13.7058 2.44602 14.097 2.49692 14.4817C2.54782 14.8663 2.69066 15.233 2.91333 15.5507C3.13601 15.8684 3.43197 16.1278 3.77615 16.3068C4.12033 16.4859 4.5026 16.5794 4.89058 16.5794C5.27855 16.5794 5.66082 16.4859 6.005 16.3068C6.34918 16.1278 6.64514 15.8684 6.86782 15.5507C7.09049 15.233 7.23333 14.8663 7.28423 14.4817C7.33513 14.097 7.2926 13.7058 7.16023 13.3411H9.05966C8.93916 13.6732 8.893 14.0277 8.92444 14.3795C8.95587 14.7314 9.06413 15.0721 9.24159 15.3775C9.41904 15.683 9.66136 15.9458 9.95145 16.1474C10.2415 16.349 10.5723 16.4845 10.9205 16.5443C11.2687 16.6042 11.6257 16.5868 11.9665 16.4936C12.3072 16.4004 12.6234 16.2336 12.8926 16.0049C13.1618 15.7762 13.3776 15.4911 13.5247 15.17C13.6718 14.8488 13.7466 14.4992 13.7438 14.1459C13.7423 13.7301 13.6313 13.3221 13.4219 12.9628C13.7661 12.7458 14.0498 12.4454 14.2468 12.0894C14.4438 11.7334 14.5476 11.3334 14.5487 10.9266ZM11.4017 8.51205H4.48815L3.15212 3.683H12.6975L11.4017 8.51205ZM4.89058 14.9508C4.73139 14.9508 4.57578 14.9036 4.44343 14.8151C4.31107 14.7267 4.20791 14.601 4.147 14.4539C4.08608 14.3069 4.07014 14.1451 4.1012 13.9889C4.13225 13.8328 4.20891 13.6894 4.32147 13.5768C4.43403 13.4643 4.57743 13.3876 4.73356 13.3566C4.88968 13.3255 5.05151 13.3415 5.19858 13.4024C5.34564 13.4633 5.47134 13.5664 5.55978 13.6988C5.64821 13.8312 5.69542 13.9868 5.69542 14.1459C5.69542 14.3594 5.61062 14.5641 5.45968 14.7151C5.30875 14.866 5.10403 14.9508 4.89058 14.9508ZM11.3293 14.9508C11.1701 14.9508 11.0145 14.9036 10.8822 14.8151C10.7498 14.7267 10.6467 14.601 10.5857 14.4539C10.5248 14.3069 10.5089 14.1451 10.5399 13.9889C10.571 13.8328 10.6476 13.6894 10.7602 13.5768C10.8728 13.4643 11.0162 13.3876 11.1723 13.3566C11.3284 13.3255 11.4902 13.3415 11.6373 13.4024C11.7844 13.4633 11.9101 13.5664 11.9985 13.6988C12.087 13.8312 12.1342 13.9868 12.1342 14.1459C12.1342 14.3594 12.0494 14.5641 11.8984 14.7151C11.7475 14.866 11.5428 14.9508 11.3293 14.9508Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className="text-base font-medium">Votre commande</div>
                        </div>
                        <div className="font-bold text-medium mt-3 text-3xl leading-none">{`${totalCart} FCFA`}</div>
                    </div>
                    {error && <div className="text-red text-center my-3">{error}</div>}
                </div>
                <form className="w-11/12 mx-auto" onSubmit={this.submitPayment}>
                    <DeliveryForm onInputChange={this.onInputChange}/>
                    <PaymentForm
                        deliveryFormFilled={area && direction}
                        onInputChange={this.onInputChange}
                        paymentMethod={paymentMethod}
                    />
                </form>
            </div>
        );
    }
}

export default Checkout;