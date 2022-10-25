import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

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
                <button className='nav-btn'><Link to='/dark'><li>DARK</li></Link></button>

                {
                    user?.uid ?
                        <>
                            <li>
                                {user?.displayName}
                            </li>
                            <button onClick={handelLogOut}>Logout</button>
                        </>
                        :
                        <>
                            <button className='nav-btn'><Link to='/login'><li>LOGIN</li></Link></button>
                            <button className='nav-btn'><Link to='/signup'><li>SIGN UP</li></Link></button>
                        </>
                }
                {
                    user?.photoURL ?
                        <img style={{ height: '30px' }} src={user?.photoURL} alt="" />
                        :
                        <FaUser />
                }
            </ul>
        </nav>
    );
};

export default Header;