import contentMyExpe  from "./content";
import React,{useState} from 'react';
import PortfolioModal from './modalPortfolio';
import useModal from "./hooks/useModal";
import BigModal from "./modalBig";

const  Portfolio = () => {
  const [state,setState] = useState({
    showWork : false,
    showWorkId: null
  })

  const [isShowing,showModal] = useModal('');         

const showWork = (e) => {
  let data = contentMyExpe.find(x => x.id ===  Number(e.target.value));
if ( Number(e.target.value) === 1 ||  Number(e.target.value) === 10 ) {
  setState({showWork:false,
    showWorkId: data });
    showModal();
} else {
 setState({showWork:true,
    showWorkId: data });
}
}
 
  let  bigModal = isShowing ? <BigModal isShowing={isShowing} data={state.showWorkId} hide={showModal} /> :'';
   
    return (
    
<main className="flex_container-content fadeInSlow ">
  { bigModal}
    <div className="flex_item_left-content">
      <div className="page__header">
        <h1>Portfolio</h1>
        <p>All about my works</p>
      </div>
      { state.showWork ? <PortfolioModal data={state.showWorkId} closeModal={()=>  setState({showWork:false})} /> : ''}
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
 
  <div className="work__box" key={i} >
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
                <button value={item['id']} onClick={showWork}>View info</button>
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


export default Portfolio;