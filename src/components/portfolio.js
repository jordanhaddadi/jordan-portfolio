import React from 'react';
import portfolioData from '../portfolioData';
import '../styles/portfolio.css';

export const Portfolio = () => {

    return (
      <section id="portfolio">
          <h1 id="portfolio-h1">Featured Work: </h1>
          <div id="portfolio-wrapper">
          { 
            portfolioData.portfolio && portfolioData.portfolio.map((item)=>{
              return(
                <div className="portfolio-item">
                  <ul className="row">
                    <li id="column">
                      <a href={item.live}>
                      <h2>{item.name}</h2></a>
                      <h5>{item.type}</h5>
                      <p id="app-description">{item.description}</p>
                        <a href={item.source}><p>Source Code</p></a>
                        <img src={window.location.origin + `${item.imgurl}`} className="item-img"/>
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
