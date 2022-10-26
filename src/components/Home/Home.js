import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div>
                    <h1>Welcome to</h1>
                    <h2>unCourses</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo consectetur quam debitis possimus fugit exercitationem ducimus aliquam officia deserunt!</p>
                </div>
                <img src="https://i.ibb.co/hZ5X192/header.png" alt="" />
            </div>
            <Link to='/courses'><button className='see-our-courses'>See Our Courses</button></Link>
        </div>
    );
};

export default Home;