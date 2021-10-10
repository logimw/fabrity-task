import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Divider = styled.div`
  height: 5rem;
  width: 100%;
  position: relative;
  margin-top: -2.5rem;

  &:after {
    content: "";
    top: 50%;
    left: 50%;
    position: absolute;
    width: 7.5rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: translate(-50%, 50%);
  }
`;

export const Input = styled.input`
  padding: 1.8rem 2rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  border-radius: 5px;
  width: 30rem;
  font-size: 1.4rem;
  transition: all 300ms ease;

  &::placeholder {
    position: absolute;
    opacity: 0;
  }

  &:not(:placeholder-shown) {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:not(:placeholder-shown) + label {
    background: ${({ theme }) => theme.colors.white};
    transform: translateY(-200%);
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    outline: none;

    & + label {
      background: ${({ theme }) => theme.colors.white};
      transform: translateY(-200%);
    }
  }
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  padding: 0 0.5rem;
  transition: all 300ms ease;
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;

  input {
    // margin-right: 1rem;
    position: absolute;
    opacity: 0;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition: all 200ms ease;

    & + label {
      transition: all 200ms;
      position: relative;
      cursor: pointer;
      padding: 0 0 0 29px;
    }

    // Box.
    & + label:before {
      content: "";
      margin-right: 4px;
      margin-left: -30px;
      display: inline-block;
      transition: all 200ms;
      vertical-align: text-top;
      width: 16px;
      height: 16px;
      background: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
    }

    &:hover + label:before {
      background: ${({ theme }) => theme.colors.primary};
    }

    &:checked + label:before {
      background: ${({ theme }) => theme.colors.primary};
    }

    &:checked + label:after {
      content: "";
      position: absolute;
      left: 2px;
      top: 7px;
      background: ${({ theme }) => theme.colors.white};
      width: 2px;
      height: 3px;
      box-shadow: 2px 0 0 ${({ theme }) => theme.colors.white},
        4px 0 0 ${({ theme }) => theme.colors.white},
        4px -2px 0 ${({ theme }) => theme.colors.white},
        4px -4px 0 ${({ theme }) => theme.colors.white},
        4px -6px 0 ${({ theme }) => theme.colors.white},
        4px -8px 0 ${({ theme }) => theme.colors.white};
      transform: rotate(45deg);
    }
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.black};
`;
