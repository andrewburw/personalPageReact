
import React from 'react';


class About extends React.Component {


  render() {

    return (
      <main className="flex_container-content fadeInSlow ">
        <div className="flex_item_left-content">
      <div className="page__header">
        <h1>About Me</h1>
        <p>What I am all about</p>
      </div>

    </div>
  
    <div className="flex_item_right-content">



      <div className="author__image"><img src="/personalpage/images/myself.jpg " height="85" width="85" alt="Andrew Burw" /></div>

      <div className="about__info container">
       <p>Hi! A'm Andrew Results-oriented  Fullstack Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, 
         provide technical knowledge and expertise, build new websites from start to finish.</p>
        <br />
        <div className="about__list">

<div className="about__list">

  <ul className="about__list-list about_li">
    <li>Gender:</li>
    <li>Place of Birth:</li>
    <li>Language:</li>
  </ul>
</div>
          <div className="about__list">
            <ul className="about__list-list2 about_li">
              <li>Male.</li>
              <li>Riga.</li>
              <li>RU,LV,EN.</li>
            </ul>
        </div>
           </div>

      </div>
    </div>

   </main>
    );
  }
}

export default About;