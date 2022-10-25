import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    const { logIn, googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handelGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handelSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div className='container'>
            <h2 className='form-text'>Login</h2>
            <form onSubmit={handelSubmit} className='form'>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button className='btn-login' type="submit">Login</button>
            </form>
            <button onClick={handelGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;