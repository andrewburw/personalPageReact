
import React from 'react';


class PortfolioWork extends React.Component {

  closeModal = () => {

    this.props.closeModal()
  }
  render() {
    
    return (
    
          <div  className="modal fadeInfaster">


<div className="modal-content">
  <span className="close" onClick={this.closeModal}>Hide</span>
  <div className="modal__title">
    <h1>{this.props.data.projectName}</h1>
  </div>
  <div className="modal__subtitle">
    <h1>{this.props.data.projectSubTitle}</h1>
  </div>
  <div className="modal_content">
    <div className="modal_item_left">
      <p>{this.props.data.projectDescription}</p>
      <p>{this.props.data.creationDescription}</p>
      <div className="modal__tags">
        <p>{this.props.data.technologyList.join("  ,")}</p>
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
          <li><a href={this.props.data.links.github}>Visit</a></li>
          <li><a href={this.props.data.links.projectSite}>Visit</a></li>
          <li>{this.props.data.progress}%</li>
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