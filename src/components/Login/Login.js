import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handelGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handelGithubLogin = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
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
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
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
                <p className='error-m'>{error}</p>
                <button className='btn-login' type="submit">Login</button>
            </form>
            <p><span className='dont-acc'>Dont't have an a account? </span><Link to='/signup'>create account now</Link> </p>
            <div>
                <button onClick={handelGoogleLogin} className='btn-google'>Login with Google</button>
                <button onClick={handelGithubLogin} className='btn-github'>Login with GitHub</button>
            </div>
        </div>
    );
};

export default Login;