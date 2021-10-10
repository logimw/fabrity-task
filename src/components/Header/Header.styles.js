import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-column: 2;
  min-height: 11.4rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  height: 15rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  .logo {
    width: 27.5rem;
  }

  nav {
    ul {
      list-style: none;
      display: flex;
      li {
        a {
          color: ${({ theme }) => theme.colors.black};
          text-decoration: none;
          padding: 1rem;
          &:not(:last-child) {
            margin-right: 2.5rem;
          }
          &.active {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }
`;
