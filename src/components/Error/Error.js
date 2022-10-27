import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div>
            <img className='error-img' src="https://i.ibb.co/80njYBM/undraw-Page-not-found-re-e9o6.png" alt="" />
            <div>
                <h3>404 page not found</h3>
                <p>check your internet</p>
            </div>
        </div>
    );
};

export default Error;