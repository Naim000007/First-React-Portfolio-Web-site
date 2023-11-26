import React from "react";
import {useState} from "react";
import "./Work.css";
import Portfolio1 from "../../assets/assets/portfolio-1.png";
import Portfolio2 from "../../assets/assets/portfolio-2.png";
import Portfolio3 from "../../assets/assets/portfolio-3.png";
import Portfolio4 from "../../assets/assets/portfolio-4.png";
import Portfolio5 from "../../assets/assets/portfolio-5.png";
import Portfolio6 from "../../assets/assets/portfolio-6.png";

function Work() {
    const [isopen, setIsopen] = useState(false)
  return (
    <div>
      <section className="" id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="workDesc">
          I take pride in paying attention to the smallest details
        </span>
        <div className="worksImgs">
          <button className="project-btn">
            <img src={Portfolio1} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio2} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            {" "}
            <img src={Portfolio3} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio4} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio5} alt="" className="worksImg" />
          </button>
          <button className="project-btn">
            <img src={Portfolio6} alt="" className="worksImg" />
          </button>
        </div>
        <button  className={` ${isopen ? 'see-more' : 'hidden'} projectbutton`}>
        <div className="see-more ">
            <h2> 6 More Standout Projects</h2>
            <img src={Portfolio1} alt="" className="worksImg" />
         
          
            <img src={Portfolio2} alt="" className="worksImg" />
         
          
           
            <img src={Portfolio3} alt="" className="worksImg" />
         
            <img src={Portfolio4} alt="" className="worksImg" />
       
            <img src={Portfolio5} alt="" className="worksImg" />

            <img src={Portfolio6} alt="" className="worksImg" />
         
        </div>
          </button>
           
     

        <button className="protfolio-btn" onClick={()=> setIsopen(!isopen)}>{isopen ? 'See Less' : 'See More'}</button>

      </section>
      <div className="line"></div>
    </div>
  );
}

export default Work;
