import React from 'react';
import TestimonialReview from './TestimonialReview';
import profileOne from '../../assets/images/people1.png'
import profileTwo from '../../assets/images/people2.png'
import profileThree from '../../assets/images/people3.png'
const TestimonialReviews = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-12 mx-24 mb-[149px]'>
            <TestimonialReview country={'california'} name={'Rakibul islam'} img={profileOne} comment={'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'} />
            <TestimonialReview country={'california'} name={'Shariful islam'} img={profileTwo} comment={'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'} />
            <TestimonialReview country={'california'} name={'Jaker hossain'} img={profileThree} comment={'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'} />
        </div>
    );
};

export default TestimonialReviews;