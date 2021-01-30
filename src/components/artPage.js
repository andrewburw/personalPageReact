
import React from 'react';
import ImgModal from './modalArt';

class Art extends React.Component {
         state = {
           showModal: false,
           imgSrc: ''
         }
  showModal = (e) => {
   

   this.setState({showModal: true});
   this.setState({imgSrc: e.target.src});


  }
          
  render() {

    return (
      <div>
        {this.state.showModal ? <ImgModal closeModal={()=> this.setState({showModal:false})} src={this.state.imgSrc} />: ''}
         <main className="flex_container-content fadeInfaster">
    <div className="flex_item_left-content">
      <div className="page__header">
        <h1>Art Gallery</h1>
        <p>My Art Gallery</p>
      </div>

    </div>
   
    <div className="flex_item_right-content">
   
      <div className="row">
        <div className="column showImgModal">
        <img src="../images/lightBox/personal_page.png" onClick={this.showModal} alt="andrey art work" />
          <img src="../images/lightBox/photo1.jpg" onClick={this.showModal} alt="andrey art work" />
          <img src="../images/lightBox/tank-main.png" onClick={this.showModal} alt="andrey art work"  />
          <img src="../images/lightBox/triangle_work.jpg" onClick={this.showModal} alt="andrey art work" />
          <img  src="../images/lightBox/kar_work.jpg" onClick={this.showModal} alt="andrey art work"/>
          <img src="../images/lightBox/dark_wood.jpg" onClick={this.showModal} alt="andrey art work"  />
        
        </div>
        <div className="column showImgModal">
          <img  src="../images/lightBox/planify.png" onClick={this.showModal} alt="andrey art work" />
          <img  src="../images/lightBox/gg_work.png" onClick={this.showModal} alt="andrey art work" />
          <img src="../images/lightBox/gg_blue.jpg" onClick={this.showModal} alt="andrey art work" />
          <img src="../images/lightBox/photo3.jpg" onClick={this.showModal} alt="andrey art work"/>
          <img src="../images/lightBox/bike_work.jpg" onClick={this.showModal} alt="andrey art work"/>
          <img  src="../images/lightBox/sea_work.jpg" onClick={this.showModal} alt="andrey art work"/>
          <img  src="../images/lightBox/minimal_workl.jpg" onClick={this.showModal} alt="andrey art work" />
        
        </div>
        <div className="column showImgModal">
          <img src="../images/lightBox/photo5.jpg" onClick={this.showModal} alt="andrey art work" />
          <img src="../images/lightBox/photo4.jpg" onClick={this.showModal} alt="andrey art work" />
          <img  src="../images/lightBox/dust_work.jpg" onClick={this.showModal} alt="andrey art work" />
          <img  src="../images/lightBox/hexagon_work.jpg" onClick={this.showModal} alt="andrey art work" />
          <img  src="../images/lightBox/radio_work.jpg" onClick={this.showModal} alt="andrey art work" />
          <img  src="../images/lightBox/space_work.jpg" onClick={this.showModal} alt="andrey art work" />

        </div>
      </div>
    </div>

  </main>

      </div>
    );
  }
}

export default Art;