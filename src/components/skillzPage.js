import contentMySkz from "./content_skills";
import { useState} from 'react';
/* *************************************************************
|
|
|                      skilzzPage.js file
|
|      Skilzz page in react hooks style,
|       
|      
|      More info: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/
const Skilzz = () => {
const [sort,setSort] = useState('all');
const [data,setData] = useState(contentMySkz)


const setSortFn = (e) => {
  setSort(e.target.dataset.sort)
   
  if (e.target.dataset.sort === 'all') {
   
    setData('');
    setData(contentMySkz);
   
  } else {

  setData(contentMySkz.filter(a =>  a.section === e.target.dataset.sort))
  }
}

    return (

      <main className="flex_container-content fadeInSlow ">
        <div className="flex_item_left-content">
          <div className="page__header">
            <h1>Skills</h1>
            <p>What I am all about</p>
          </div>

        </div>

        <div className="flex_item_right-content flex_item_right_pdd20px">

          <div className="about__info about__info-0px container ">
            <p>I have three years of experience developing and supporting small applications (logging systems) in
            the environment of Libre Base & PostgreSQL database as my main job. There are also many projects  in
            web technologies.In below or right section is quick overview of my main technical skill sets and technologies I use.
          Want to find out more about my expirience? Check out my project portfolio.</p>
            <br />
            <div className="skillz__sort-section">
            <ul className="skilzz__sort">
              <li className={`skilzz__sort-item ${sort === 'all' ? 'slilzz__sort-selected': '' }`} data-sort="all" onClick={setSortFn}>All</li>
              <li className={`skilzz__sort-item ${sort === 'frontend' ? 'slilzz__sort-selected': '' }`} data-sort="frontend" onClick={setSortFn}>Frontend</li>
              <li className={`skilzz__sort-item ${sort === 'backend' ? 'slilzz__sort-selected': '' }`} data-sort="backend" onClick={setSortFn}>Backend</li>
              <li className={`skilzz__sort-item ${sort === 'librarys' ? 'slilzz__sort-selected': '' }`} data-sort="librarys" onClick={setSortFn}>Librarys</li>
              <li className={`skilzz__sort-item ${sort === 'frameworks' ? 'slilzz__sort-selected': '' }`} data-sort="frameworks" onClick={setSortFn}>Frameworks</li>
              <li className={`skilzz__sort-item ${sort === 'other' ? 'slilzz__sort-selected': '' }`} data-sort="other" onClick={setSortFn}>Other</li>

            </ul>
            </div>
            <div className="skilzz__section">


              {Array.from(data).map((item, i) => {

                return (
                  <div className="progress__box" key={i} style={{ cursor: 'pointer' }}>
                    <h5>{item['name']} <span className="progress__box-precent">{item['precentage']}%</span></h5>
                    <div className="meter">
                      <span style={{ 'width': item['precentage'] + '%' }}><span className="progress"></span></span>
                    </div>
                    <span className="proggres__info">{item['description']}</span>
                  </div>

                )
              })}


            </div>

          </div>
        </div>

      </main>

    );
  }


export default Skilzz;