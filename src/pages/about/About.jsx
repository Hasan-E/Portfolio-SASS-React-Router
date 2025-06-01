import React from "react";
import "./About.scss"

const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">BIO</h1>
      <p>
        Wednesday Addams is a fictional character from the Addams Family
        multimedia franchise created by American cartoonist Charles Addams. She
        is typically portrayed as a morbid and emotionally reserved child that
        is fascinated by the macabre, often identified by her pale skin and
        black pigtails. Wednesday has been portrayed by several actresses in
        various films and television series, including Lisa Loring in the
        television series The Addams Family (1964), Christina Ricci in the
        feature films The Addams Family (1991) and Addams Family Values (1993),
        and Jenna Ortega in the streaming television series Wednesday (2022).
      </p>
      <div className="experience">
        <div className="xpCard">
          <h3 className="years">2024 - 2025</h3>
          <h3 className="place">CLARUSWAY</h3>
          <p className="job">Instructor & Full Stack Developer</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsam doloremque aliquam accusantium nostrum, exercitationem veritatis at iusto dolores dolorem?</p>
        </div>
        <div className="xpCard">
          <h3 className="years">2022 - 2024</h3>
          <h3 className="place">Google</h3>
          <p className="job">Front End Developer</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsam doloremque aliquam accusantium nostrum, exercitationem veritatis at iusto dolores dolorem?</p>
        </div>
        <div className="xpCard">
          <h3 className="years">2020 - 2022</h3>
          <h3 className="place">The Best Websites Co.</h3>
          <p className="job">Front End Developer</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsam doloremque aliquam accusantium nostrum, exercitationem veritatis at iusto dolores dolorem?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
