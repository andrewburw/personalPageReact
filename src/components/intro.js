import React from 'react';
import Menu from './menu';


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

//  <Menu show={this.state.openNav} closeMenu={this.closeMenu} />


    return (
      <div>
       <Menu show={this.state.openNav} closeMenu={this.closeMenu} />
      <div className="flex_container">

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


      <main className="flex_item_left container">
      <div className="main-slogan">
        <h1>Simple is beautiful</h1>

      </div>
       <div className="old__version">
         <a href="1">Old version.</a>
       </div>

    </main>
      <div className="flex_item_right">

   </div>
 </div>
      </div>
    );
  }
}

export default Main;