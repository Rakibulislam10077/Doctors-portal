import React from 'react';
import chair from '../../assets/images/chair.png';
import GetStartBtn from '../Shared/GetStartBtn';
const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg mb-8 shadow-2xl" alt='this is banner' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <GetStartBtn>Get started</GetStartBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;