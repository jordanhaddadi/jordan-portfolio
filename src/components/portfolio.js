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
          <h1 id="portfolio-h1">Featured Work</h1>
          <div id="portfolio-wrapper">
          { 
            portfolioData.portfolio && portfolioData.portfolio.map((item)=>{
              return(
                <div className="portfolio-item" id={item.key}>
                  <ul className="row">
                    <li id={item.key2}>
                      <a href={item.live} target="_blank" rel="noopener noreferrer">
                      <h2 id="app-name">{item.name}</h2>
                      </a>
                      {mobile} + {web}
                      <h5 id="app-type">{item.type}</h5>
                      <div id="tech-tools">
                        {tools}
                        <p id="app-tech">{item.tech}</p>
                      </div>
                      <a href={item.source} target="_blank" rel="noopener noreferrer">
                        {src}
                        <p id="src">Source Code</p>
                      </a>
                      <a href={item.live} target="_blank" rel="noopener noreferrer">
                      <img src={window.location.origin + `${item.imgurl}`} className="item-img" alt="screenshot"/>
                      </a>
                      <div id="app-info">
                        {info}
                        <p id="app-description">{item.description}</p>
                        <p id="app-description-sub">{item["description-sub"]}</p>
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
