import React, { useContext } from 'react';
import userIcon from "../assets/user.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    
    return (
        <section className='flex justify-between py-5  items-center'>
            <div>{user && user.email}</div>
            <div className='nav space-x-5 text-lg font-medium text-[#706F6F] hover:text-[#000]'>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/career" >Career</Link>
            </div>
            <div className='login flex gap-5 items-center'>

                <div>
                    {
                        user && user?.email ? 
                        (<div className='flex gap-1 items-center' >
                            <img className='w-[50px] h-auto' src={user?.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div>) : 
                        (<img className='w-[50px] h-auto' src={userIcon} alt="" />)
                    }
                </div>
                
                <div>
                {
                    user && user?.email ? (
                        <button onClick={logOut} className='btn w-[140px] text-lg font-semibold rounded-none'>Log-Out</button>
                        ) : (<Link to="/auth/login" className='btn w-[140px] text-lg font-semibold rounded-none'>Login</Link>)
                }
                </div>
            </div>
            
        </section>
    );
};

export default Navbar;