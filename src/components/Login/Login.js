import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>This is login</h2>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;