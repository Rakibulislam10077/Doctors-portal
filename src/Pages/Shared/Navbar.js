import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 lg:px-20">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-sm dropdown-content z-50 mt-3 p-2 shadow bg-primary rounded-box w-52">
                        <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link to={'/home'}>Home</Link></li>
                        <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link to={'/about'}>About</Link></li>
                        <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Appointment</Link></li>
                        <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Reviews</Link></li>
                        <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Contact Us</Link></li>
                        <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Login</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link to={'/home'}>Home</Link></li>
                    <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link to={'/about'}>About</Link></li>
                    <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Appointment</Link></li>
                    <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Reviews</Link></li>
                    <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Contact Us</Link></li>
                    <li className='hover:bg-accent hover:text-white rounded-lg font-semibold'><Link>Login</Link></li>
                </ul>
            </div>
        </div>
    )
}
