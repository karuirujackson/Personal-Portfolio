import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png';

function Contact() {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'> My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies. Some of the notable <br/> companies i have worked with includes:
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt="" className='clientImg' />
                <img src={Adobe} alt="" className='clientImg' />
                <img src={Microsoft} alt="" className='clientImg' />
                <img src={Facebook} alt="" className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type="text" className='name' placeholder='Your Name' />
                <input type="text" className='email' placeholder='Your Email'/>
                <textarea cols="30" rows="10" className='msg' name='message' placeholder='Your Message' ></textarea>
                <button className='submitBtn' value="send" type='submit'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt="Facebook" className='link' />
                    <img src={TwitterIcon} alt="Twitter" className='link' />
                    <img src={YouTubeIcon} alt="Youtube" className='link' />
                    <img src={InstagramIcon} alt="Instagram" className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
