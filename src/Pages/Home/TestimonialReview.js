import React from 'react';

const TestimonialReview = ({ country, img, comment, name }) => {
    return (
        <div className="card glass shadow-2xl pb-8">
            <div className="card-body">
                <p className=' text-center'>{comment}</p>
            </div>
            <div className='flex items-center ml-16'>
                <figure className='mt-4 border-primary'><img src={img} alt='' /></figure>
                <div className='ml-8 mt-1'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialReview;