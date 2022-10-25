import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './SignUp.css';

const SignUp = () => {
    const { singUp } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handelSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        singUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }
    return (
        <div className='container-sin'>
            <h2 className='form-text'>Sign Up</h2>
            <form onSubmit={handelSubmit} className='form'>
                <div className='form-control'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" />
                </div>

                <div className='form-control'>
                    <label htmlFor="photoURL">PhotoURL</label>
                    <input type="text" name="photoURL" />
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <button className='btn-login' type="submit">Sign Up</button>
            </form>
            <span>{error}</span>
        </div>
    );
};

export default SignUp;