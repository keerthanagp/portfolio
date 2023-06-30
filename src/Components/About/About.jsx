import React from 'react';
import "./About.css";
import mypic from '../../assets/mypic.JPG'
import {BsFillCloudCheckFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='About'>
      <h4>Get To Know</h4>
      <h1>About Me</h1>
      <div className='aboutContainer'>
        <div className='aboutme'>
          <img src={mypic} alt='girl image'/>
          </div>
          <div className='para'>
        <p>Hi, I am Keerthana from Chennai with 2.8 years of working experience in Non-IT and I am excited about creating websites. Self interested in learning Frontend Developer.</p>
        <div className='Skills'>
          <h3>Skills I have</h3>
          <p><BsFillCloudCheckFill/> HTML</p>
          <p><BsFillCloudCheckFill/> CSS</p>
          <p><BsFillCloudCheckFill/> JavaScript</p>
          <p><BsFillCloudCheckFill/> Bootstrap</p>
          <p><BsFillCloudCheckFill/> React</p>
          <p><BsFillCloudCheckFill/> Mongodb</p>
          </div>
        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>
      
    </section>
  )
}

export default About