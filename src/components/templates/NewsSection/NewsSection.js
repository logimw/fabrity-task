import Title from "components/Title/Title";
import { SectionWrapper } from "../SectionWrapper.styles";
import NewsContainer from "components/News/NewsContainer";

const NewsSection = () => {
  return (
    <SectionWrapper>
      <div id="news">
        <Title>Wiadomości</Title>
      </div>
      <NewsContainer />
    </SectionWrapper>
  );
};

export default NewsSection;
