import contentMySkz  from "./content_skills";
import React from 'react';


class Skilzz extends React.Component {


  render() {

    return (
     
 <main className="flex_container-content">
    <div className="flex_item_left-content">
      <div className="page__header">
        <h1>Skills</h1>
        <p>What I am all about</p>
      </div>

    </div>
  
    <div className="flex_item_right-content flex_item_right_pdd20px">

      <div className="about__info about__info-0px container ">
        <p>I have three years of experience developing and supporting small applications (logging systems) in
           the environment of Libre Base & PostgreSQL database as my main job. There are also many projects  in 
           web technologies.In below or right section is quick overview of my main technical skill sets and technologies I use.
          Want to find out more about my expirience? Check out my project portfolio.</p>
        <br />
        <div className="skilzz__section">


          { Array.from( contentMySkz ).map((item, i) => {

return  (
  <div className="progress__box" key={i} style={{cursor: 'pointer'}}>
     <h5>{item['name']} <span className="progress__box-precent">{item['precentage']}%</span></h5>
       <div className="meter">
        <span style={{'width': item['precentage']+'%'}}><span className="progress"></span></span>
       </div>
     <span className="proggres__info">{item['description']}</span>
</div>
    
 )})}


        </div>

      </div>
    </div>







  </main>
   
    );
  }
}

export default Skilzz;