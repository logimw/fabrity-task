import { Wrapper } from "./MainTemplate.styles";
import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "./MainWrapper/MainWrapper";
import SideBar from "../SideBar";

const MainTemplate = ({ children }) => {
  const windowW = window.innerWidth;
  return (
    <Wrapper>
      <SideBar />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
