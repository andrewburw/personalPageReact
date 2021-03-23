


const PortfolioFeed = () => {


 return <>
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

 
 </>

}


export default PortfolioFeed;