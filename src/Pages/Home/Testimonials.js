import React from 'react';
import TestimonialReviews from './TestimonialReviews';
const Testimonials = () => {
    return (
        <div>
            <div className='mb-32 mt-24 ml-16'>
                <h1 className='text-secondary font-bold'>Testimonial</h1>
                <h1 className='text-3xl'>What Our Patients Says</h1>
            </div>
            <TestimonialReviews />
        </div>
    );
};

export default Testimonials;