import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <nav className='navbar'>
            {/* <img className='logo' src="https://i.ibb.co/RjrbD88/Minimalist-Simple-Initial-logo-2-removebg-preview.png" alt="" /> */}
            <div>
                <h3 className='nav-text'><span className='text-un'>un</span>Courses</h3>
            </div>
            <ul className={menu ? "nav-links-mobile" : "nav-links"} onClick={() => setMenu(false)}>

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

                <label className='switch'>
                    <input type="checkbox" />
                    <span className='slider'></span>
                </label>

            </ul>
            <button onClick={() => setMenu(!menu)} className='mobile-menu'>
                {
                    menu ?
                        <ImCross></ImCross>
                        : <FaBars></FaBars>
                }
            </button>
        </nav>
    );
};

export default Header;