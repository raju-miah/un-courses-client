import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <h2 className='form-text'>Login</h2>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
            </form>
            <button className='btn-login' type="submit">Login</button>
        </div>
    );
};

export default Login;