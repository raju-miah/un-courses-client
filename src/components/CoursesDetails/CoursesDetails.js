import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './CourseDetails.css';

const ref = React.createRef();

const CoursesDetails = () => {
    const coursesDetails = useLoaderData();
    // console.log(coursesDetails)
    return (
        <div>
            <h2>Welcome to Courses Details page</h2>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='btn-pdf' onClick={toPdf}>Download Pdf</button>}
            </Pdf>
            {
                coursesDetails.map(courseDet => <div ref={ref} className='card-details' key={courseDet.id}>
                    <div className='card-details-left'>
                        <img src={courseDet.img} alt="" />
                        <h3>{courseDet.name}</h3>
                        <p>by: {courseDet.author_name}</p>
                    </div>
                    <div className='card-details-right'>
                        <h3>Read Details About this page</h3>
                        <p>{courseDet.details}</p>
                        <Link to={`/coursesbuy/${courseDet.id}`}><button className='btn-buy'>Get premium access</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CoursesDetails;