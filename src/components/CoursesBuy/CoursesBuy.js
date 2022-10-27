import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CoursesBuy.css';
import toast, { Toaster } from 'react-hot-toast';

const CoursesBuy = () => {
    const coursesBuy = useLoaderData();

    const notify = () => toast.success('Congratulations you are Successfully buy this course');

    return (
        <div>
            <h2>Buy this course</h2>
            {
                coursesBuy.map(buy => <div className='buy-card' key={buy.id}>
                    <div className='buy-course'>
                        <img src={buy.img} alt="" />
                        <h4>{buy.name}</h4>
                        <p className='price'>${buy.price}</p>
                        <p>by {buy.author_name}</p>
                        <button onClick={notify} className='btn-buy-now'>Buy Now</button>
                    </div>
                </div>)
            }
            <Toaster />
        </div>
    );
};

export default CoursesBuy;