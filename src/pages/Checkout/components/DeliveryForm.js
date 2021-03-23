import React from 'react';

const DeliveryForm = ({onInputChange}) => {
    return (
        <div className="flex flex-col items-start">
            <details className="w-full" open>
                <summary
                    className="outline-none font-medium text-lg text-gray-900 my-4 flex flex-row w-full items-center">
                    <hr className=" border-gray-200 w-1 flex-grow"/>
                    <div className="flex-shrink mx-2">Livarison</div>
                    <hr className=" border-gray-200 w-1 flex-grow"/>
                </summary>

                <div className="w-full">
                    <label htmlFor="area" className="text-gray-500 mb-2 inline-block">Quartier</label>
                    <input
                        id="area"
                        required
                        onChange={({target}) => onInputChange('area', target.value)}
                        className="rounded p-3 w-full bg-black-lightest border border-gray focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div className="w-full mt-3">
                    <label htmlFor="direction" className="text-gray-500 mb-2 inline-block">Indication</label>
                    <input id="direction"
                           required
                           onChange={({target}) => onInputChange('direction', target.value)}
                           className="rounded p-3 w-full bg-black-lightest border border-gray focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
            </details>
        </div>
    );
};

export default DeliveryForm;