import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png'
import Menu from '../../assets/menu.png';
 
const  Navbar = () => {
    //UseState Hook to handle the Mobile size screens on Menu click.
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src= {Logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-30} duration={500} className='desktopMenuListItem'>Clients</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img className='desktopMenuImg' src= { ContactImg } alt="" />
                Contact Me
            </button>
            <img src= {Menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} /> 
            <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-30} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-30} duration={500} className='listItem' onClick={() => setShowMenu(false)}>contact</Link>
            </div>
        </nav> 
    );
};
 
export default Navbar;