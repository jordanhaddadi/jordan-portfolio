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
                      <a href={item.live}>
                        <img src={window.location.origin + `${item.imgurl}`} className="item-img"/>
                        <h2>{item.name}</h2></a>
                        <p>{item.description}</p>
                        <h5>{item.type}</h5>
                        <a href={item.source}><p>Source Code</p></a>
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
