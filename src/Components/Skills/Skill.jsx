import React from "react";
import "./Skill.css";
import UIDesign from "../../assets/assets/ui-design.png";
import webDesign from "../../assets/assets/website-design.png";
import AppDesign from "../../assets/assets/app-design.png";

function Skill() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly
        websites. I have a strong understanding of design and a keen eye for
        detail, I am proficient in HTML, CSS, and JavaScript, Python as well as
        design sofeare such as Adobe Photoshop and illuatrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/Ux Design</h2>
            <p>Creative UI/UX designer dedicated to crafting intuitive and visually stunning user experiences. Explore my portfolio for a glimpse into the seamless fusion of design and functionality.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>Web developer with a passion for coding seamless and responsive websites. Check out my portfolio to see how I turn ideas into functional and visually appealing online experiences.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Developer</h2>
            <p>App developer focused on turning ideas into innovative and user-friendly mobile experiences. Explore my portfolio for a glimpse into the world of apps where functionality meets design seamlessly</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
