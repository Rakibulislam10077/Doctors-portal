import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-5 mx-5 lg:mx-24'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} title={'Opening Hours'} desc={'Lorem Ipsum is simply dummy text of the pri'} />
            <InfoCard bgClass="bg-accent" img={marker} title={'Visit our location'} desc={' Brooklyn, NY 10036, United States'} />
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} title={'Contact'} desc={'+000 123 456789'} />
        </div>
    );
};

export default Info;