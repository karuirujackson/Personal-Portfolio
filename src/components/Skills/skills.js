import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className="skillDesc">I am a skilled and passionate Frontend Developer with experience in creating visually appealimg and user friendly web applications. I have a strong undrstanding of design and a keen eye to details. I am proficient in HTML, CSS, JavaScript, React.JS and Node.JS</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UI Design" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Design an interface that is intuitive, easy to navigate, and visually appealing.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="Web Design" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>Planning, conceptualizing, and arranging various elements such as layout, colors, graphics, <br/> fonts, and interactive features to deliver a visually appealing and user-friendly website.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="App Design" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Create the visual and interactive elements of a mobile application for users.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
