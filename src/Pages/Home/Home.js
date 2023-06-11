import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import KidsBanner from './KidsBanner';
import Appointment from './MackAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <KidsBanner />
            <Appointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;