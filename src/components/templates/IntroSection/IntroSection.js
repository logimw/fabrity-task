import { Container, IntroWrapper } from "./IntroSection.styles";
import { useLocation } from "react-router-dom";

const IntroSection = ({ children }) => {
  let locatio = useLocation();
  console.log(locatio);
  return (
    <IntroWrapper>
      <Container />
      <Container>{children}</Container>
    </IntroWrapper>
  );
};

export default IntroSection;
