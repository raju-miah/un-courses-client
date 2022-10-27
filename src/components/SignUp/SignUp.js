import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './SignUp.css';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
    const { singUp, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handelSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password)

        singUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset();
                handelUserProfile(name, photoURL);
                toast.success('You are Successfully signUp!')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    const handelUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='container-sin'>
            <h2 className='form-text'>Sign Up</h2>
            <form onSubmit={handelSubmit} className='form-signup'>
                <div className='form-control-s'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" required />
                </div>

                <div className='form-control-s'>
                    <label htmlFor="photoURL">PhotoURL</label>
                    <input type="text" name="photoURL" required />
                </div>

                <div className='form-control-s'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className='form-control-s'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <p className='error-m'>{error}</p>
                <button className='btn-login' type="submit">Sign Up</button>
            </form>
            <p><span className='dont-acc'>Already have an a account? </span><Link to='/login'>Login Now</Link> </p>
            <Toaster />
        </div>
    );
};

export default SignUp;