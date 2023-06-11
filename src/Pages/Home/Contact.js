import React from 'react';
import Appointment from '../../assets/images/appointment.png'
import GetStartBtn from '../Shared/GetStartBtn';

const Contact = () => {
    return (
        <section style={{ background: `url(${Appointment})` }}
            className='pb-10 flex justify-center items-center flex-col'
        >
            <div className='text-center mt-14'>
                <h1 className='text-1xl font-bold text-secondary'>Contact Us</h1>
                <h1 className='text-2xl text-white'>Stay Connected with us</h1>
            </div>
            <div>
                <form action="" className='flex flex-col mt-5'>
                    <input className='w-[450px] h-[40px] mb-3 rounded-md pl-2' type="email" placeholder='Email Address' />
                    <input className='w-[450px] h-[40px] mb-3 rounded-md pl-2' type="text" placeholder='subject' />
                    <textarea className='pt-2 pl-2 mb-10' placeholder='your message' id="" cols="10" rows="5"></textarea>
                </form>
            </div>
            <GetStartBtn>Submit</GetStartBtn>
        </section>
    );
};

export default Contact;