import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(1.8rem, 1fr) minmax(45rem, 120rem) minmax(
      1.8rem,
      1fr
    );
  background-color: ${({ theme }) => theme.colors.blueLight};
  @media (max-width: 768px) {
    grid-template-columns: 1.2rem 1fr 1.2rem;
  }
`;
