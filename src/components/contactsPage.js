
import React from 'react';


class Contacts extends React.Component {


  render() {

    return (
      
     <main className="flex_container-content fadeInSlow ">
    <div className="flex_item_left-content">
      <div className="page__header">
        <h1>Contacts</h1>
        <p>Hire me</p>
      </div>

    </div>
 
    <div className="flex_item_right-content">
      <div className="container">


      <div className="contacts__container">


      <div className="left__contacts">

        <div className="contacts__left-one">
          <h1>Location</h1>
          <p>Riga</p>

        </div>
        <div className="contacts__left-two">
          <h1>Github</h1>
          <a href="https://github.com/andrewburw">github.com/andrewburw</a>
        </div>
         </div>

         <div className="right__contacts">
           <div className="contacts__right-one">
             <h1>Email</h1>
             <p>andrejsburackovs@gmail.com</p>
            </div>
           <div className="contacts__right-two">
             <h1>LinkedIn</h1>
             <a href="https://www.linkedin.com/in/andrejs-burackovs-3219641b8/">linkedin.com</a>

           </div>

            </div>

      </div>
      <div className="sign">
        <img src="/personalpage/images/sign.png" alt="ab_sign" />

      </div>

    </div>
  </div>




  </main>
    
    );
  }
}

export default Contacts;