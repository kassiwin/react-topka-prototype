import React from 'react';

const BasketButtons = ({type, classnames, handleClick}) => {
const icons = {
    add: <svg className='fill-current' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.09087 9.89198H6.52827V6.29035H10.1299V3.85295H6.52827V0.251321H4.09087V3.85295H0.489243V6.29035H4.09087V9.89198Z"/></svg>,
    remove: <svg className='fill-current' width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.51729 0.253621H0.318406V2.4969H6.51729V0.253621Z" /></svg>
}

    return (
        <div className={`rounded-full flex items-center justify-center w-8 h-8 p-3 ${classnames}`} onClick={handleClick}>
            {icons[type]}
        </div>
    );
};

export default BasketButtons;