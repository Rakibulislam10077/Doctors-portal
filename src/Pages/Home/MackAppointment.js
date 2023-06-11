import React from 'react';
import Doctor from '../../assets/images/doctor.png'

import Appointment from '../../assets/images/appointment.png';
import GetStartBtn from '../Shared/GetStartBtn';
const MackAppointment = () => {
    return (
        <section style={{ background: `url(${Appointment})` }}
            className=' flex justify-center items-center'
        >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px] ml-10 h-[800px]' src={Doctor} alt="" />
            </div>
            <div className='flex-1'>
                <div className='lg:w-1/2 w-full p-8 lg:p-0'>
                    <h3 className='text-secondary mb-2 font-bold'>Appointment</h3>
                    <h1 className='text-2xl text-white mb-2 font-bold'>Make an appointment Today</h1>
                    <p className='text-white mb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <GetStartBtn>Get Started</GetStartBtn>
                </div>
            </div>
        </section >
    );
};

export default MackAppointment;