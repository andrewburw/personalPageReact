
import React from 'react';


class Header extends React.Component {
  render() {
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
      </div>
    );
  }
}

export default Header;