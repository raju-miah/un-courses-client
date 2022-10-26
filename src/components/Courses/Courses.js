import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses)
    return (
        <div>
            <h2>this is courses</h2>
            <div className='courses'>
                <div className='left-side'>
                    <h2>Our top courses</h2>
                    {
                        courses.map(course =>
                            <p key={course.id}
                            >
                                <Link to={`/courses/${course.id}`}>{course.name}</Link>
                            </p>
                        )
                    }
                </div>
                <div className='right-side'>
                    {/* <h2>This is courses card details</h2> */}
                    <div className='card-parent'>
                        {courses.map(courseCard => <div className='card' key={courseCard.id}>

                            <img src={courseCard.img} alt="" />
                            <h3>{courseCard.name}</h3>
                            <p>{courseCard.title}</p>
                            <p>{courseCard.author_name}</p>
                            <div className='rating-student'>
                                <span>{courseCard.ratings}
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                </span>
                                <span>{courseCard.students}</span>
                            </div>

                            <Link to={`/courses/${courseCard.id}`}><button className='btn-details'>Details</button></Link>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;