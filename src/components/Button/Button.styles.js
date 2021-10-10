import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 2.5rem 0;
  padding: 1rem 2.5rem;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 20px;
  font-weight: bold;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.primary};
  cursor: pointer;
  transition: all 300ms ease;
  width: 23rem;

  &:hover {
    background-color: ${({ primary, theme }) =>
      primary ? theme.colors.secondary : theme.colors.primary};
    border: 2px solid
      ${({ primary, theme }) =>
        primary ? theme.colors.secondary : theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    background-color: ${({ primary, theme }) => theme.colors.secondary};
  }
`;
