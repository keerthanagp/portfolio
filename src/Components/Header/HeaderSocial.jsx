import React from 'react';
import "../Header/Header.css";
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";

const HeaderSocial = () => {
  return (
    <div className='header-social'>
        <a href='https://linkedin.com' target='blank'><BsLinkedin/></a>
        <a href='https://github.com' target='blank'><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocial