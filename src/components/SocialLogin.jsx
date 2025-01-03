import React from 'react';
import { FaGooglePlus, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-xl">Login With</h2>
            <div className='space-y-2'>
                <button className='btn btn-outline w-full text-lg font-semibold rounded-none'><FaGooglePlus/>Login With Google</button>
                <button className='btn btn-outline w-full text-lg font-semibold rounded-none'><FaGithub/>Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;