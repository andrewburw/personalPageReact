
import React from 'react';
import {Link} from "react-router-dom";

class Menu extends React.Component {

    closeMenu = () => {
        this.props.closeMenu()

    }
 
  render() {

    return (
      <div>
      <div  className="overlay" style={this.props.show ? {'width': '100%'} : {'width': '0%'}}>
      <button  className="closebtn link-button" onClick={this.closeMenu}>&times;</button>
      <div className="overlay-content">
     
     <Link to="/main/about" onClick={this.closeMenu}>About</Link>
     <Link to="/main/skills" onClick={this.closeMenu}>Skills</Link>
     <Link to="/main/portfolio" onClick={this.closeMenu}>Portfolio</Link>
     <Link to="/main/contacts" onClick={this.closeMenu}>Contacts</Link>
     <Link to="/main/art" onClick={this.closeMenu}>Art</Link>
   
  </div>
</div>
      </div>
    );
  }
}

export default Menu;