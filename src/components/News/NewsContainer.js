import useFetch from "hooks/useFetch";
import NewsItem from "./NewsItem";
import { StyledNewsContainer } from "./NewsContainer.styles";
import { useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "components/LoadingSpinner";

const LoadMoreBtn = styled.button`
  font-weight: bold;
  text-decoration: none;
  font-size: 1.6rem;
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  position: relative;
  text-align: center;
  width: 100%;
  margin-top: 5rem;
`;

const NewsContainer = () => {
  const [count, setCount] = useState(2);
  const { data, loading } = useFetch("news");

  if (loading) return <LoadingSpinner />;
  return (
    <>
      <StyledNewsContainer>
        {data.slice(0, count).map((item, index) => {
          return <NewsItem article={item} key={index} />;
        })}
      </StyledNewsContainer>
      {data.length >= count && (
        <LoadMoreBtn onClick={() => setCount(count + 2)}>
          załaduj więcej &#8635;
        </LoadMoreBtn>
      )}
    </>
  );
};

export default NewsContainer;
