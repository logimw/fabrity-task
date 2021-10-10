import styled from "styled-components";
import hero from "assets/images/img.png";

export const IntroWrapper = styled.section`
  grid-column: 1 / -1;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.07);
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  flex: 0 0 50%;
  min-height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:first-child {
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &:last-child {
    background: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
