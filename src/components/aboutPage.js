
import React from 'react';


class About extends React.Component {


  render() {

    return (
      <main className="flex_container-content">
        <div className="flex_item_left-content">
      <div className="page__header">
        <h1>About Me</h1>
        <p>What I am all about</p>
      </div>

    </div>
  
    <div className="flex_item_right-content">



      <div className="author__image"></div>

      <div className="about__info container">
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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