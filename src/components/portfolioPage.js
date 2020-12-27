import {contentMyExpe  } from "./content";
import React from 'react';
import PortfolioModal from './modalPortfolio';


class Portfolio extends React.Component {
            state = {
              showWork : false
            }



showWork = () => {

this.setState({showWork:true})


}

  render() {
//  <PortfolioModal/>
    return (
    
<main className="flex_container-content">
    <div className="flex_item_left-content">
      <div className="page__header">
        <h1>Portfolio</h1>
        <p>What I am all about</p>
      </div>
      {this.state.showWork ? <PortfolioModal closeModal={()=>  this.setState({showWork:false})} /> : ''}
    </div>
  
    <div className="flex_item_right-content flex_item_right_pdd20px">

      <div className="about__info about__info-0px container">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br />
        <div className="portfolio__section">

          <div className="work__box">
            <div className="picture">
              <div className="work__picture"></div>
            </div>
            <div className="work__container">


              <div className="work__title">
                <h1>Trip Map</h1>
              </div>
              <div className="work__text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a</p>
              </div>
              <div className="work__view">
                <button onClick={this.showWork}>View info</button>
              </div>
            </div>
          </div>


          <div className="work__box">
            <div className="picture">
              <div className="work__picture"></div>
            </div>
            <div className="work__container">


              <div className="work__title">
                <h1>Trip Map</h1>
              </div>
              <div className="work__text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a</p>
              </div>
              <div className="work__view">
                <button href="#">View info</button>
              </div>
            </div>
          </div>


          <div className="work__box">
            <div className="picture">
              <div className="work__picture"></div>
            </div>
            <div className="work__container">


              <div className="work__title">
                <h1>Trip Map</h1>
              </div>
              <div className="work__text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a</p>
              </div>
              <div className="work__view">
                <button href="#">View info</button>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>







  </main>
      
    );
  }
}

export default Portfolio;