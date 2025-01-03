import React from 'react';
import userIcon from "../assets/user.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className='flex justify-between my-5  items-center'>
            <div></div>
            <div className='nav space-x-5 text-lg font-medium text-[#706F6F] hover:text-[#000]'>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/career" >Career</Link>
            </div>
            <div className='login flex gap-5'>
                <img className='w-[50px] h-auto' src={userIcon} alt="" />
                <Link to="/auth/login" className='btn w-[140px] text-lg font-semibold rounded-none'>Login</Link>
            </div>
            
        </section>
    );
};

export default Navbar;