import styled from "styled-components";

export const StyledTechnologyItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  padding: 4rem 0.5rem;

  .technology-logo {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 5rem;
      height: 2px;
      background: ${({ theme }) => theme.colors.black};
      transition: all 300ms ease;
      left: 50%;
      top: -15px;
      transform: translate(-50%);
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  &:hover img {
    filter: grayscale(0%);
  }
  &:hover p:before {
    background: ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 100%;
    max-width: 50%;
    filter: grayscale(100%);
    transition: all 300ms ease;
  }
`;
