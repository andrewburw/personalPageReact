
import React from 'react';


class PortfolioWork extends React.Component {

  closeModal = () => {

    this.props.closeModal()
  }
  render() {

    return (
    
          <div  className="modal" >


<div className="modal-content">
  <span className="close" onClick={this.closeModal}>Hide</span>
  <div className="modal__title">
    <h1>Trip Map</h1>
  </div>
  <div className="modal__subtitle">
    <h1>Draw your map.</h1>
  </div>
  <div className="modal_content">
    <div className="modal_item_left">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book</p>
      <div className="modal__tags">
        <p>Nodejs, React, Express , MongoDB</p>
      </div>
    </div>
    <div className="modal_item_right">

      <div className="modal__author-info">



        <ul className="modal__right-list">
          <li>Author:</li>
          <li>Github:</li>
          <li>Site:</li>
          <li>Complite:</li>
        </ul>


        <ul className="modal__right-list modal__right-list-list">
          <li>Andrew</li>
          <li><a href="1">Visit</a></li>
          <li><a href="1">Visit</a></li>
          <li>90%</li>
            </ul>
      </div>

    </div>
  </div>
</div>



</div>
     
    );
  }
}

export default PortfolioWork;