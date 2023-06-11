import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';


const Services = () => {
    return (
        <div className='mt-32'>
            <div className='items-center justify-center flex flex-col'>
                <h2 className='font-bold text-secondary'>OUR SERVICES</h2>
                <h2 className='text-2xl'>Services We Provide</h2>
            </div>
            <div className='mt-12 grid lg:grid-cols-3 gap-5 mx-5 lg:mx-24'>
                <Service img={fluoride} title={'Fluoride Treatment'} desc={'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'} />
                <Service img={cavity} title={'Cavity Filling'} desc={'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'} />
                <Service img={whitening} title={'Teeth Whitening'} desc={'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'} />
            </div>
        </div>
    );
};

export default Services;