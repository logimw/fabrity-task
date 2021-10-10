import { StyledTechnologyContainer } from "./TechnologyContainer.styles";
import { StyledTechnologyItem } from "./TechnologyItem.styles";
import webpack from "assets/svg/webpack.svg";
import js from "assets/svg/js.svg";
import npm from "assets/svg/Npm-logo.svg";
import html from "assets/svg/HTML5-logo.svg";

const TechnologiesContainer = () => {
  return (
    <StyledTechnologyContainer>
      <StyledTechnologyItem href="https://webpack.js.org" target="_blank">
        <div className="technology-logo">
          <img src={webpack} alt="Webpack" />
        </div>
        <p>Webpack</p>
      </StyledTechnologyItem>
      <StyledTechnologyItem href="https://www.javascript.com" target="_blank">
        <div className="technology-logo">
          <img src={js} alt="JavaScript" />
        </div>
        <p>JavaScript</p>
      </StyledTechnologyItem>
      <StyledTechnologyItem href="https://www.npmjs.com" target="_blank">
        <div className="technology-logo">
          <img src={npm} alt="Node Package Manager" />
        </div>
        <p>Node Package Manager</p>
      </StyledTechnologyItem>
      <StyledTechnologyItem href="https://html.spec.whatwg.org" target="_blank">
        <div className="technology-logo">
          <img src={html} alt="HTML" />
        </div>
        <p>HTML</p>
      </StyledTechnologyItem>
    </StyledTechnologyContainer>
  );
};

export default TechnologiesContainer;
