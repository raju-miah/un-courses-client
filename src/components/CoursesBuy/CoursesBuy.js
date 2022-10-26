import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CoursesBuy.css';

const CoursesBuy = () => {
    const coursesBuy = useLoaderData();
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
                        <button className='btn-buy-now'>Buy Now</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CoursesBuy;