import React from 'react';

const GetStartBtn = ({ children }) => {
    return (
        <button className="text-white font-bold btn bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default GetStartBtn;