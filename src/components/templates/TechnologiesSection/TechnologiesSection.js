import React from "react";
import Title from "components/Title/Title";
import { SectionWrapper } from "../SectionWrapper.styles";
import TechnologiesContainer from "components/Technologies/TechnologiesContainer";

const TechnologiesSection = () => {
  return (
    <SectionWrapper>
      <div id="technologies">
        <Title>Nasze Technologie</Title>
      </div>
      <TechnologiesContainer />
    </SectionWrapper>
  );
};

export default TechnologiesSection;
