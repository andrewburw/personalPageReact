
import React from 'react';
import AboutPage from './aboutPage';
import SkilzzPage from './skillzPage';
import PortfolioPage from './portfolioPage';
import ArtPage from './artPage';
import ContactsPage from './contactsPage';
import Menu from './menu';
import useProgressiveImage from './hooks/progressiveImg'
import {
 
  
    Switch,
    Route
  } from "react-router-dom";


 const Main  = () => {
// ************************ /\ ****************************


  const src = useProgressiveImage({
    src:
      '../images/bg-cover2.jpg',
    fallbackSrc:
      '../images/bg-cover2-min.jpg',
  });
  /* 
    state = {
        openNav : false
     }

openMenu = () => {

this.setState({openNav:true});
}        

closeMenu = () => {

this.setState({openNav:false})
}
*/
    

//    <Menu show={this.state.openNav} closeMenu={this.closeMenu} />
//      <div className="nav-burger__menu" style={{"cursor":"pointer"}} onClick={this.openMenu}>
 
// crutches 

return (
      <div>
     
             <nav className="nav">
       <div className="nav__menu container">


    <div className="logo">
    <p>A n d r e w</p>
    </div>

      <div className="nav-burger__menu" style={{"cursor":"pointer"}} >
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>



  </div>
</nav>

<div className="background__image container">
   
<div className={src === '../images/bg-cover2-min.jpg' ? 'imagin thumb':'imagin full '} 
style={{'backgroundImage': 'url("../images/bg-cover2.jpg")'}} 
src={src} > 
</div>
  </div>

 
      <Switch>
        <Route  path="/main/about" exact component={AboutPage} />
        <Route  path="/main/skills" component={SkilzzPage} />
        <Route  path="/main/portfolio" component={PortfolioPage} />
        <Route  path="/main/art" component={ArtPage} />
        <Route  path="/main/contacts" component={ContactsPage} />
      </Switch>
   
     
  <div className="footer">
         <p>® 2020 Andrew. All Rights Reserved.</p>
      </div>

      
      </div>
    );
  }


export default Main;


