import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext);

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        userLogin(email,password)
        .then(result =>{
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
            alert(error.code);
        });
    };


    return (
        <div className="card bg-white-100 w-full max-w-sm py-5 shrink-0 shadow-2xl mx-auto">
            <h2 className="text-[#403F3F] font-semibold text-2xl text-center mt-5">Login your account</h2>

            <form onSubmit={handleSubmit} className="card-body">
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
                    <input type="password" placeholder="password" className="input input-bordered bg-slate-300" name="password"/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <h2 className="text-[#403F3F] font-medium text-md text-center">Dont’t Have An Account ? <Link className='text-red-500' to="/auth/register">Register</Link></h2>
        </div>
    );
};

export default Login;