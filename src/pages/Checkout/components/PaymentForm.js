import React from 'react';

const PaymentForm = ({onInputChange, paymentMethod, deliveryFormFilled}) => {
    return (
        <div className="flex flex-col items-start w-full">
            <details className="w-full" open={deliveryFormFilled}>
                <summary className="outline-none font-medium text-lg text-gray-900 my-4 flex flex-row w-full items-center">
                    <hr className=" border-gray-200 w-1 flex-grow"/>
                    <div className="flex-shrink mx-2 font-medium text-lg text-gray-900">Moyen de paiement</div>
                    <hr className=" border-gray-200 w-1 flex-grow"/>
                </summary>
                <div className="w-full">
                    <select className="relative w-full p-3 bg-black-lightest border border-gray focus:outline-none" value={paymentMethod} onChange={({target}) => onInputChange('paymentMethod', target.value)}>
                        <option value="mtn">MTN MoMo</option>
                        <option value="moov">MOOV Flooz</option>
                    </select>
                </div>

                <div className="w-full mt-3">
                    <label htmlFor="phone" className="text-gray-500 mb-2 inline-block">Numero de tel:</label>
                    <input
                        id="phone"
                        type="tel"
                        required
                        onChange={({target}) => onInputChange('phone', target.value)}
                        className="rounded p-3 w-full bg-black-lightest border border-gray focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
            </details>
            <button className="w-full text-white text-black-dark bg-blue py-3 text-center rounded-md text-bold my-5 outline-none" type="submit">
                Valider le paiement
            </button>
        </div>
    );
};

export default PaymentForm;