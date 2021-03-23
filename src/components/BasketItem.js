import React from 'react';
import BasketButtons from "./BasketButtons";

const BasketItem = (props) => {
    const {cartItem: {id, price, count, name}, addToCart, removeFromCart} = props;

    return (
        <div className="flex flex-row w-11/12 mx-auto border-b-2 py-3 ">
            <div className="w-1/2">
                <div className="font-bold text-lg">
                    {name}
                </div>
                <div className="flex flex-row items-end">
                    <div className="text-md font-medium">{price}</div>
                    <div className="text-xs">/kg</div>
                </div>
            </div>
            <div className="w-1/6 flex justify-start items-center">{count}</div>
            <div className="w-1/3 flex flex-row items-center justify-end">

                <BasketButtons
                    type="remove"
                    classnames="bg-black-dark text-blue-light mr-3"
                    handleClick={() => removeFromCart(id)}
                />

                <BasketButtons
                    type="add"
                    classnames="bg-blue text-black-dark"
                    handleClick={() => addToCart(id, name, price)}
                />
            </div>
        </div>
    );
};

export default BasketItem;