import React from 'react';
import "./Portfolio.css";
import PortfolioData from './PortfolioData';

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='portfolioContainer'>
{PortfolioData.map(({id,image,title,github,demo}) => {
  return(
<article key ={id} className='portfolioitems'>
<div className='portfolioimage'>
<img src={image} alt={title}/>
</div>
<h3>{title}</h3>
<div className='portfoliowords'>
         <a href={github} className='btn' target='blank'>Github</a>
         <a href={demo} className='btn btn-primary' target='blank'>Live demo</a>
        </div>
</article>
    
  )
})}      
</div>    
</section>
  )
}

export default Portfolio