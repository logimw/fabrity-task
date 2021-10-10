import React from "react";
import { StyledMain } from "./MainWrapper.styles";

const MainWrapper = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default MainWrapper;
