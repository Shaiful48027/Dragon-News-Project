import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {creatNewUser, setUser} = useContext(AuthContext)


    const handleSubmit = e =>{
        e.preventDefault();
        const form = new FormData(e.target);

        const name = form.get("name");
        const email = form.get("email")
        const password = form.get("password")

        creatNewUser(email, password)
        .then((result)=>{
            const user = result.user;
            setUser(user);
            console.log(user)
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
        })
        
    }
    return (
        <div className="card bg-white-100 w-full max-w-sm py-5 shrink-0 shadow-2xl mx-auto">
            <h2 className="text-[#403F3F] font-semibold text-2xl text-center mt-5">Register your account</h2>

            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered bg-slate-300" required name="name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="www." className="input input-bordered bg-slate-300" name="photo"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered bg-slate-300" name="email"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered bg-slate-300" name="password" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <h2 className="text-[#403F3F] font-medium text-md text-center">Allready Have An Account ? <Link className='text-red-500' to="/auth/login">Login</Link></h2>
        </div>
    );
};

export default Register;