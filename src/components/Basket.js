import React, {Component} from 'react';
import Title from "./Title";
import BasketItem from "./BasketItem";
import {Urls} from "../data";
import {Link} from "react-router-dom";

class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    onCloseBasket = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        const {open} = this.state;
        const {cart, totalCount, totalCart, addToCart, removeFromCart} = this.props;
        const style = open ? {transform: 'translateY(0) translateX(-50%)'} : {transform: 'translateY(100vh) translateX(-50%)'};
        return (
            <div className="fixed bottom-0 max-w-md w-full">
                <div className="w-full bg-blue z-30 relative rounded-t-xl">
                    <div className="flex flex-row items-center justify-between w-11/12 mx-auto py-5 text-black">
                        <div className="relative">
                            <div
                                className="absolute flex items-center justify-center rounded-full bg-yellow text-black-dark font-bold w-4 h-4 -top-2.5 -right-2.5"
                                style={{fontSize: "8px"}}>
                                {totalCount}
                            </div>
                            <svg className="fill-current" width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.8914 18.2208C24.8884 17.4137 24.6428 16.626 24.1862 15.9596C23.7297 15.2932 23.0832 14.7788 22.3305 14.4829L24.851 5.07078C24.9036 4.87033 24.9091 4.66045 24.867 4.45753C24.825 4.25462 24.7364 4.06414 24.6084 3.90099C24.4774 3.74812 24.3138 3.62649 24.1295 3.54504C23.9453 3.4636 23.745 3.42442 23.5435 3.43039H5.07783L4.63303 1.73622C4.5557 1.4497 4.38554 1.19675 4.14905 1.01678C3.91257 0.836805 3.62305 0.739922 3.32561 0.741224H0.629883V3.43039H2.28775L5.63045 15.8812C5.70944 16.1746 5.88566 16.4326 6.13041 16.6133C6.37516 16.7939 6.67402 16.8866 6.97832 16.8762H20.8478C21.2053 16.8762 21.5481 17.0179 21.8009 17.27C22.0537 17.5222 22.1957 17.8642 22.1957 18.2208C22.1957 18.5774 22.0537 18.9194 21.8009 19.1716C21.5481 19.4237 21.2053 19.5654 20.8478 19.5654H3.32561C2.96813 19.5654 2.6253 19.707 2.37253 19.9592C2.11975 20.2114 1.97775 20.5534 1.97775 20.91C1.97775 21.2666 2.11975 21.6086 2.37253 21.8607C2.6253 22.1129 2.96813 22.2546 3.32561 22.2546H4.91609C4.69441 22.8638 4.62318 23.5174 4.70842 24.16C4.79366 24.8025 5.03287 25.4151 5.40579 25.9459C5.77871 26.4767 6.27435 26.91 6.85074 27.2092C7.42714 27.5083 8.06732 27.6645 8.71706 27.6645C9.3668 27.6645 10.007 27.5083 10.5834 27.2092C11.1598 26.91 11.6554 26.4767 12.0283 25.9459C12.4012 25.4151 12.6405 24.8025 12.7257 24.16C12.8109 23.5174 12.7397 22.8638 12.518 22.2546H15.699C15.4972 22.8093 15.4199 23.4015 15.4725 23.9894C15.5252 24.5772 15.7065 25.1463 16.0037 25.6567C16.3008 26.167 16.7067 26.606 17.1925 26.9428C17.6783 27.2796 18.2323 27.506 18.8153 27.6059C19.3984 27.7059 19.9964 27.677 20.567 27.5212C21.1377 27.3655 21.6671 27.0868 22.118 26.7047C22.5689 26.3226 22.9302 25.8465 23.1765 25.3099C23.4229 24.7733 23.5481 24.1893 23.5435 23.5991C23.541 22.9045 23.3551 22.2227 23.0044 21.6226C23.5808 21.2601 24.056 20.7582 24.3859 20.1635C24.7158 19.5687 24.8897 18.9005 24.8914 18.2208ZM19.6213 14.1871H8.04313L5.80568 6.11956H21.7913L19.6213 14.1871ZM8.71706 24.9437C8.45048 24.9437 8.18988 24.8649 7.96823 24.7171C7.74657 24.5694 7.57381 24.3594 7.4718 24.1137C7.36978 23.868 7.34309 23.5976 7.39509 23.3368C7.4471 23.076 7.57547 22.8364 7.76398 22.6484C7.95248 22.4603 8.19264 22.3323 8.4541 22.2804C8.71556 22.2285 8.98657 22.2551 9.23286 22.3569C9.47915 22.4587 9.68966 22.631 9.83776 22.8521C9.98587 23.0732 10.0649 23.3332 10.0649 23.5991C10.0649 23.9557 9.92291 24.2977 9.67014 24.5499C9.41737 24.8021 9.07453 24.9437 8.71706 24.9437ZM19.5 24.9437C19.2334 24.9437 18.9728 24.8649 18.7511 24.7171C18.5295 24.5694 18.3567 24.3594 18.2547 24.1137C18.1527 23.868 18.126 23.5976 18.178 23.3368C18.23 23.076 18.3584 22.8364 18.5469 22.6484C18.7354 22.4603 18.9755 22.3323 19.237 22.2804C19.4985 22.2285 19.7695 22.2551 20.0158 22.3569C20.2621 22.4587 20.4726 22.631 20.6207 22.8521C20.7688 23.0732 20.8478 23.3332 20.8478 23.5991C20.8478 23.9557 20.7058 24.2977 20.453 24.5499C20.2003 24.8021 19.8574 24.9437 19.5 24.9437Z"/>
                            </svg>
                        </div>
                        <div className="font-bold text-base">
                            Panier {`${totalCart} FCFA`}
                        </div>
                        {!open &&
                        <button className="rounded-lg py-2 px-5 border border-black font-medium" onClick={this.onCloseBasket}>
                            Voir
                        </button>}

                        {open &&
                        <Link to={Urls.checkout.base}>
                            <button className="rounded-lg py-2 px-5 bg-white font-bold">
                                Payer
                            </button>
                        </Link>}
                    </div>
                </div>

                <div className="fixed max-w-md w-full mx-auto top-0 left-0 transition duration-500 ease-in-out"
                     style={{background: "rgba(0, 0, 0, 0.3)", backdropFilter: "blur(3px) saturate(100%) contrast(60%) brightness(130%)", height: "calc(100vh - 80px)", left: "50%", ...style}}>
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="my-8 h-1/5 flex flex-row text-center justify-center items-center text-white"
                             onClick={this.onCloseBasket}>
                            <svg className="fill-current mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 18.8278L18.8272 1" stroke="white" stroke-width="2.27201"/>
                                <path d="M1.00028 1.00049L18.8281 18.8277" stroke="white" stroke-width="2.27201"/>
                            </svg>
                            <span className="text-white font-bold">Fermer le panier</span>
                        </div>

                        <div className="rounded-t-lg w-full h-4/5 bg-black text=white">
                            <div className="w-11/12 mx-auto ">
                                <Title title="Panier" classnames="my-6"/>
                            </div>
                            <div className="flex flex-row w-11/12 mx-auto border-b-2 py-3">
                                <div className="w-1/2">Produits</div>
                                <div className="w-1/6">Qte</div>
                                <div className="w-1/3"/>
                            </div>
                            <div className="w-full overflow-y-auto h-full">
                                {cart.map((cartItem) => {
                                    return (
                                        <BasketItem
                                            cartItem={cartItem}
                                            key={cartItem.id}
                                            addToCart={addToCart}
                                            removeFromCart={removeFromCart}/>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basket;