import React from 'react';
import {Title} from "../../components";
import {Link} from "react-router-dom";
import {Urls} from "../../data";

const CheckoutDone = (props) => {

    const order = (props.location && props.location.state) || {};

    return (
        <div className="w-11/12 mx-auto h-screen flex flex-col justify-center text-white">
            <Title title="Yayy !" classnames=""/>
            <div className="my-4">
                Ta commande a été validé. Tu seras livré dans quelques heures
            </div>
            <div className="flex flex-col justify-between border-2 border-white rounded p-3">
                <div className="flex flex-col ">
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="text-lg">
                            <span className="pr-2">Commande</span>
                            <span>#{order.id}</span>
                        </div>
                        <div className="bg-gray rounded py-1 px-2 text-md">
                            Livraison
                        </div>
                    </div>
                    <div className="flex flex-col my-2">
                        <div className="font-bold text-3xl">{`${order.amount} FCFA`}</div>
                        <div className="w-full text-md">
                            <span>{order.productCount}</span>
                            <span className="pl-2">produits</span>
                        </div>
                    </div>
                </div>

                <div className="border-b border-blue text-base w-max cursor-pointer">
                    Details de la commande >
                </div>
            </div>
            <Link to={Urls.home.base}>
                <button className="w-full text-black-dark bg-blue py-3 text-center rounded-md font-medium mt-5">
                    Revenir à l’étalage
                </button>
            </Link>
        </div>
    );
};

export default CheckoutDone;