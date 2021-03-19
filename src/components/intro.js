import React, { useState } from 'react';
import Menu from './menu';
import useProgressiveImage from './hooks/progressiveImg';
import Logo from './../custom/logo.svg';
/* *************************************************************
|
|
|                      intro.js file
|
|     Intro file w/ react hooks style
|     for better development and code organisation. 
|
|      
|      
|      More info: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const Intro = () => {
  // ************************ /\ ****************************

  const [menu, toggleMenu] = useState(false);
  const src = useProgressiveImage({
    src:
      'images/cover.jpg',
    fallbackSrc:
      'images/cover-min.jpg',
  });
//  <p>A n d r e w</p>
   
  return (
    <div>
      <Menu show={menu} closeMenu={toggleMenu} />
      <div className="flex_container">

        <nav className="nav">
          <div className="nav__menu container">


            <div className="logo">
            <img width="100" src={Logo} alt="logo" />
            </div>

            <div className="nav-burger__menu" style={{ "cursor": "pointer" }} onClick={toggleMenu}>

              <div className="burger__line"></div>
              <div className="burger__line"></div>
              <div className="burger__line"></div>
            </div>



          </div>
        </nav>


        <main className="flex_item_left container">
          <div className="main-slogan">
            <h1>Simple is beautiful</h1>

          </div>
          <div className="old__version">
            <a href="https://andrewburw.github.io/personal-page/">Old version.</a>
          </div>

        </main>

        <div className={src === undefined ? 'flex_item_right  thumb' : 'flex_item_right  full'}
          style={{ 'backgroundImage': 'url(' + (src === undefined ? 'images/cover-min.jpg' : src)  + ')' }}
        >

        </div>
      </div>
    </div>
  );
}


export default Intro;