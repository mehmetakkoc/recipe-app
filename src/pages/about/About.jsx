import React from "react";
import { AboutContainer, InfoContainer, StyledImage } from "./AboutStyles";

import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>Akkoch</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Josh</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known HTML, CSS, JS, ReactJS, SQL,
          Python.
        </h4>
        <h2>
          <a href="mailto:josh.smith@clarusway.com">Send email</a> :
          josh.smith@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
