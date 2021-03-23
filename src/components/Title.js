import React from 'react';

const Title = ({title, classnames}) => {
    return (
        <div className={`font-bold text-4xl text-left text-white ${classnames}`}>
            {title}
        </div>
    );
};

export default Title;