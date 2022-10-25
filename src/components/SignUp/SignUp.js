import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='container-sin'>
            <h2 className='form-text'>Sign Up</h2>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="" />
                </div>

                <div className='form-control'>
                    <label htmlFor="photoURL">PhotoURL</label>
                    <input type="text" name="photoURL" id="" />
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
            </form>
            <button className='btn-login' type="submit">Sign Up</button>
        </div>
    );
};

export default SignUp;