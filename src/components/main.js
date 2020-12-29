
import React from 'react';
import AboutPage from './aboutPage';
import SkilzzPage from './skillzPage';
import PortfolioPage from './portfolioPage';
import ArtPage from './artPage';
import ContactsPage from './contactsPage';
import Menu from './menu';
import {
  
    Switch,
    Route
  } from "react-router-dom";


class Main extends React.Component {
    state = {
        openNav : false
     }

openMenu = () => {

this.setState({openNav:true});
}        

closeMenu = () => {

this.setState({openNav:false})
}

  render() {

    return (
      <div>
          <Menu show={this.state.openNav} closeMenu={this.closeMenu} />
             <nav className="nav">
       <div className="nav__menu container">


    <div className="logo">
    <p>A n d r e w</p>
    </div>

      <div className="nav-burger__menu" style={{"cursor":"pointer"}} onClick={this.openMenu}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>



  </div>
</nav>

<div className="background__image container">
    <div className="imagin">
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
}

export default Main;