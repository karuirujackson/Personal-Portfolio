import React from 'react';
import './intro.css';
import Bg from '../../assets/image.png';
import BtnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, <br/></span>
            <span className='introText'>I'm <span className='introName'>Jackson</span> <br />A Frontend Developer </span>
            <p className='introPara'>I am a skilled Frontend Developer with experience in creating visually appealing, <br/> interactive and user friendly web applications.</p>
            <Link>
                <button className='btn'>
                    <img src= { BtnImg } alt="Hire Me" className='btnImg'/>
                    Hire Me
                </button>
            </Link>
        </div>
        <img src= { Bg } alt="profile" className='bg'/>
    </section>
  )
}

export default Intro
