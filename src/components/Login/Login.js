import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../UsserContext/UserContext';
import './Login.css';

const Login = () => {
    const [error, setError] = useState();

    const { logIn } = useContext(AuthContext);

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
                <span> {error}</span>
                <button className='btn-login' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;