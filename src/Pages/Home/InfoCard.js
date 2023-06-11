import React from 'react';

const InfoCard = ({ img, title, desc, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-accent shadow-xl cursor-pointer ${bgClass}`}>
            <figure className='lg:pl-5 pt-4'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-white'>{desc}</p>
            </div>
        </div>
    );
};

export default InfoCard;