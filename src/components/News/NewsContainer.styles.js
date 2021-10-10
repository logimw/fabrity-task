import styled from "styled-components";

export const StyledNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(39rem, 1fr));
  grid-gap: 5rem 2rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
