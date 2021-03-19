import ReactDOM from 'react-dom';
import React from 'react';

/* *************************************************************
|
|
|                      Big modal with full information
|
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/


const Modal = ({ isShowing, hide, data }) => {




  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>

      <div className="modal fadeInfaster">


        <div className="modal-content">
          <span className="close" onClick={hide}>Hide</span>
          <div className="modal__title">
            <h2>{data.projectName}</h2>
          </div>
          <div className="modal__subtitle">
            <h1>{data.projectSubTitle}</h1>
          </div>
          <div className="modal_content">
            <div className="modal_item_left">
              <div className="modal__big-logo"><img src={data.logoImage} alt="project logo" /></div>
              <p>{data.projectDescription}</p>
              <div className="modal__big-images">
              <img src={data.projectImage1} alt="project logo" />
              <img src={data.projectImage2} alt="project logo"  />
              <img src={data.projectImage3} alt="project logo" />
              <img src={data.projectImage4} alt="project logo" />
             {data.projectImage5 ?  <img src={data.projectImage5} alt="project logo" /> :''}
              </div>
              <p>{data.creationDescription}</p>

              <div className="modal__tags">
                <p>{data.technologyList.join("  ,")}</p>
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
                  <li><a href={data.links.github}>Visit</a></li>
                  <li><a href={data.links.projectSite}>Visit</a></li>
                  <li>{data.progress}%</li>
                </ul>
              </div>

            </div>
          </div>
        </div>



      </div>

    </React.Fragment>, document.body
  ) : null;
}

export default Modal;