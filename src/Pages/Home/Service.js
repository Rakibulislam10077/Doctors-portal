import React from 'react';

const Service = ({ img, title, desc }) => {
    return (
        <div className="card glass shadow-lg">
            <figure className='mt-4'><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center flex items-center">{title}</h2>
                <p className=' text-center'>{desc}</p>
            </div>
        </div>
    );
};

export default Service;