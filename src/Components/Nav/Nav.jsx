import React, { useState } from 'react';
import "./Nav.css";
import {AiOutlineHome, AiOutlineContacts, AiOutlineUser} from "react-icons/ai"
import {BsBook} from "react-icons/bs"
import {RiServiceLine} from "react-icons/ri"


const Nav=()=>{
  const[activenav, setActivenav]=useState('#')
  return(
   <nav>
  <a href='#' onClick={()=>setActivenav('#')} className={activenav==='#'? 'active' :''}><AiOutlineHome/></a>
  <a href='#About' onClick={()=>setActivenav('#About')}className={activenav ==='#About'?'active' : ''}><AiOutlineUser/></a>
  <a href='#Portfolio' onClick={()=>setActivenav('#Portfolio')} className={activenav ==='#Portfolio' ? 'active' : ''}><BsBook/></a>
  <a href='#Contact' onClick={()=>setActivenav('#Contact')} className={activenav ==='#Contact' ? 'active' : ''}><RiServiceLine/></a>
   </nav>
  )
}
export default Nav;