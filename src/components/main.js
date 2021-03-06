
import React, { useState } from 'react';
import AboutPage from './aboutPage';
import SkilzzPage from './skillzPage';
import PortfolioPage from './portfolioPage';
import ArtPage from './artPage';
import ContactsPage from './contactsPage';
import Menu from './menu';
import useProgressiveImage from './hooks/progressiveImg';
import {Switch, Route} from "react-router-dom";
/* *************************************************************
|
|
|                      main.js file
|
|       Main page in react hooks style,
|       
|      
|      More info: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const Main = () => {
  // ************************ /\ ****************************

  const [menu, toggleMenu] = useState(false);
  const src = useProgressiveImage({
    src:
      '../images/bg-cover2.jpg',
    fallbackSrc:
      '../images/bg-cover2-min.jpg',
  });
    
  return (
    <div>
      <Menu show={menu} closeMenu={toggleMenu} />
      <nav className="nav">
        <div className="nav__menu container">


          <div className="logo">
            <p>A n d r e w</p>
          </div>

          <div className="nav-burger__menu" style={{ "cursor": "pointer" }} onClick={toggleMenu}>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>



        </div>
      </nav>

      <div className="background__image container">

        <div className={src === undefined ?  'imagin thumb' : 'imagin full'}
          style={{ 'backgroundImage': 'url(' +  (src === undefined ? '../images/bg-cover2-min.jpg' : src) + ')' }}
        >
        </div>
      </div>


      <Switch>
        <Route path="/main/about" exact component={AboutPage} />
        <Route path="/main/skills" component={SkilzzPage} />
        <Route path="/main/portfolio" component={PortfolioPage} />
        <Route path="/main/art" component={ArtPage} />
        <Route path="/main/contacts" component={ContactsPage} />
      </Switch>


      <div className="footer">
      <a href="https://github.com/andrewburw"><i className="fab fa-github fab-cust fa-3x"></i></a>
      <a href="https://www.linkedin.com/in/andrejs-burackovs-3219641b8/"><i className="fab fab-cust fa-linkedin fa-3x"></i></a>
        <p>® 2020 Andrew. All Rights Reserved.</p>
      </div>


    </div>
  );
}


export default Main;


