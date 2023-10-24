import React from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png'
 
const  Navbar = () => {
    return (
        <nav className='navbar'>
            <img src= {Logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
                <Link className='desktopMenuListItem'>Clients</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img className='desktopMenuImg' src= { ContactImg } alt="" />
                Contact Me
            </button>
        </nav> 
    );
};
 
export default Navbar;