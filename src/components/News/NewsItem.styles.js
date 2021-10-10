import styled from "styled-components";
import quote from "assets/images/Quotation-Symbol-PNG.png";

export const StyledNewsItem = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    position: relative;
    padding-left: 4.5rem;
    &::before {
      content: "";
      position: absolute;
      height: 3rem;
      width: 4rem;
      left: 0;
      background: url(${quote});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  img {
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
  }
  .date {
    margin-top: 2.5rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-bottom: 1rem;
  }
  .description {
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }
`;
