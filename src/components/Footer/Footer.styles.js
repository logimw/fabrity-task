import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  grid-column: 1 / -1;
  min-height: 11.4rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;
