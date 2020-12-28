import contentMyExpe  from "./content";
import React from 'react';
import PortfolioModal from './modalPortfolio';


class Portfolio extends React.Component {
            state = {
              showWork : false,
              showWorkId: null
            }



showWork = (e) => {
  let index = contentMyExpe.find(x => x.id ===  Number(e.target.value));

  this.setState({showWork:true,
    showWorkId: index });

}
 
 
  render() {
   
    return (
    
<main className="flex_container-content">
    <div className="flex_item_left-content">
      <div className="page__header">
        <h1>Portfolio</h1>
        <p>All about my works</p>
      </div>
      {this.state.showWork ? <PortfolioModal data={this.state.showWorkId} closeModal={()=>  this.setState({showWork:false})} /> : ''}
    </div>
  
    <div className="flex_item_right-content flex_item_right_pdd20px">

      <div className="about__info about__info-0px container">
        <p>In this section you can view some of my work. Some works are very simple, but some are quite large and took months of development.
           In the opening menu you can see more about the work and technologies used in the project.All projects and code you can view via 
           <a href="https://github.com/andrewburw" style={{color: 'black'}}> Github</a>.</p>
        <br />
        <div className="portfolio__section">

        




          { Array.from( contentMyExpe ).map((item, i) => {

return  (
 
  <div className="work__box" key={i}>
            <div className="picture">
              <img src={item['pictSRC']} height="117" width="117" alt={item['projectName']} />
            </div>
            <div className="work__container">


              <div className="work__title">
                <h1>{item['projectName']}</h1>
              </div>
              <div className="work__text">
                <p>{item['projectDescription']}</p>
              </div>
              <div className="work__view">
                <button value={item['id']} onClick={this.showWork}>View info</button>
              </div>
            </div>
          </div>
    
 )})}

        </div>

      </div>
    </div>
  </main>
      
    );
  }
}

export default Portfolio;