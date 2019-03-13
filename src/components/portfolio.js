import React from 'react';
import portfolioData from '../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faInfoCircle, faTabletAlt} from '@fortawesome/free-solid-svg-icons'

import '../styles/portfolio.css';

const tools = <FontAwesomeIcon icon={faTools} size="lg" style={{color: "black"}}/>;
const info = <FontAwesomeIcon icon={faInfoCircle} size="lg" style={{color: "#01405d"}}/>;
const screen = <FontAwesomeIcon icon={faTabletAlt} size="lg" style={{color: "#black"}}/>;


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
                      {screen}
                      <h5>{item.type}</h5>
                      <div id="app-info">
                        {info}
                        <p id="app-description">{item.description}</p>
                      </div>
                      <div id="tech-tools">
                        {tools}
                        <p id="app-tech">{item.tech}</p>
                      </div>
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
