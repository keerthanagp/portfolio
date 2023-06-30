import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import HeaderSocial from "../Header/HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className='box'></div>
      <div className='container' id='Header'>
        <h4>Hello I'm</h4>
        <h1>Keerthana Perumal</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <p className='scrolldown'>Scroll down</p>
        <div className='box-square'></div>
      </div>
      <div className='square-colors'></div>
    </header>
  )
}

export default Header