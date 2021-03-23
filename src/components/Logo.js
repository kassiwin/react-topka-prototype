import React from 'react';

const Logo = ({classnames}) => {
    return (
        <div className={`flex flex-col tracking-tight items-start font-modak text-green ${classnames}`}>
            <span>Topkpa</span>
            <span>Chap</span>
        </div>
    );
};

export default Logo;