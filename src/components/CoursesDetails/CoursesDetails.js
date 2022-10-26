import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';

const CoursesDetails = () => {
    const coursesDetails = useLoaderData();
    // console.log(coursesDetails)
    return (
        <div>
            {
                coursesDetails.map(courseDet => <div className='card-details' key={courseDet.id}>
                    <div className='card-details-left'>
                        <img src={courseDet.img} alt="" />
                        <h3>{courseDet.name}</h3>
                        <p>Author Name: {courseDet.author_name}</p>
                    </div>
                    <div className='card-details-right'>
                        <h3>Read Details About this page</h3>
                        <p>{courseDet.details}</p>
                        <Link to={`/coursesbuy/${courseDet.id}`}><button className='btn-buy'>Buy this Course</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CoursesDetails;