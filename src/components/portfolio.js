import React from 'react';
import portfolioData from '../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faInfoCircle, faMobileAlt, faLaptop, faCodeBranch} from '@fortawesome/free-solid-svg-icons'

import '../styles/portfolio.css';

const tools = <FontAwesomeIcon icon={faTools} size="lg" style={{color: "black"}}/>;
const info = <FontAwesomeIcon icon={faInfoCircle} size="lg" style={{color: "#01405d"}}/>;
const mobile = <FontAwesomeIcon icon={faMobileAlt} size="lg" style={{color: "#black"}}/>;
const web = <FontAwesomeIcon icon={faLaptop} size="lg" style={{color: "#black"}}/>;
const src = <FontAwesomeIcon icon={faCodeBranch} size="lg" style={{color: "#black"}}/>;


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
                        <h2>{item.name}</h2>
                        {mobile} + {web}
                        <h5>{item.type}</h5>
                      </a>
                      <div id="tech-tools">
                        {tools}
                        <p id="app-tech">{item.tech}</p>
                      </div>
                      <a href={item.source}>
                        {src}
                        <p>Source Code</p>
                      </a>
                      <a href={item.live}>
                      <img src={window.location.origin + `${item.imgurl}`} className="item-img" alt="screenshot"/>
                      </a>
                      <div id="app-info">
                        {info}
                        <p id="app-description">{item.description}</p>
                      </div>
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
