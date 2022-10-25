import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <nav className='navbar'>
            <h3 className='nav-logo'>logo</h3>
            <div>
                <h3 className='nav-text'><span className='text-un'>un</span>Courses</h3>
            </div>
            <ul className='nav-links'>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/courses'><li>COURSES</li></Link>
                <Link to='/faq'><li>FAQ</li></Link>
                <Link to='/blog'><li>BLOG</li></Link>
                <button className='nav-btn'><Link to='/login'><li>LOGIN</li></Link></button>
                <button className='nav-btn'><Link to='/signup'><li>SIGN UP</li></Link></button>
                <button className='nav-btn'><Link to='/dark'><li>DARK</li></Link></button>
                <li>{user?.displayName}</li>
            </ul>
        </nav>
    );
};

export default Header;