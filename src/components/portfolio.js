import React from 'react';
import portfolioData from '../portfolioData';
import '../styles/portfolio.css';

export const Portfolio = () => {

    return (
      <section id="portfolio">
          <h1>Featured Work: </h1>
          <div id="portfolio-wrapper">
          { 
            portfolioData.portfolio && portfolioData.portfolio.map((item)=>{
              return(
                <div className="portfolio-item">
                  <ul className="portfolio-items">
                    <li id="portfolio-item">
                        <img src={window.location.origin + `${item.imgurl}`} className="item-img"/>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                    </li>
                  </ul>
                </div>
              )
            })
          }
          </div>
  </section>
        );
  }

  export default Portfolio;
