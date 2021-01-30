import React, { useState } from 'react';
import Menu from './menu';
import useProgressiveImage from './hooks/progressiveImg';

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
      './images/cover.jpg',
    fallbackSrc:
      './images/cover-min.jpg',
  });


  return (
    <div>
      <Menu show={menu} closeMenu={toggleMenu} />
      <div className="flex_container">

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


        <main className="flex_item_left container">
          <div className="main-slogan">
            <h1>Simple is beautiful</h1>

          </div>
          <div className="old__version">
            <a href="https://andrewburw.github.io/personal-page/">Old version.</a>
          </div>

        </main>

        <div className={src === '../images/cover.jpg' ? 'flex_item_right  thumb' : 'flex_item_right  full'}
          style={{ 'backgroundImage': 'url(' + src + ')' }}
        >

        </div>
      </div>
    </div>
  );
}


export default Intro;