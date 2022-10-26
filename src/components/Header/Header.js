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
                <button className='nav-btn'><Link>DARK</Link></button>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/courses'><li>COURSES</li></Link>
                <Link to='/faq'><li>FAQ</li></Link>
                <Link to='/blog'><li>BLOG</li></Link>

                {
                    user?.uid ?
                        <>
                            {
                                user?.photoURL ?
                                    <div className="tooltip">
                                        <img className='user-img' src={user?.photoURL} alt="" />
                                        <span className="tooltiptext">{user.displayName
                                        }</span>
                                    </div>
                                    :
                                    <FaUser />
                            }
                            <button onClick={handelLogOut} className='nav-btn'>LOGOUT</button>
                        </>
                        :
                        <>
                            <button className='nav-btn'><Link to='/login'>LOGIN</Link></button>
                            <button className='nav-btn'><Link to='/signup'>SIGN UP</Link></button>
                        </>
                }

            </ul>
        </nav>
    );
};

export default Header;