import React, { useState } from "react";
import styled from "styled-components";
import logo from "assets/images/whh_html.png";
import burger from "assets/images/burger.png";
import { NavLink } from "react-router-dom";

const StyledMobileNav = styled.nav`
  height: 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.colors.blueLight};
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
  z-index: 99;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    display: flex;
  }
`;
const MenuBurger = styled.button`
  height: 5rem;
  width: 5rem;
  background: none;
  outline: none;
  border: none;
  position: absolute;
  right: 0;
`;

const MobileNavList = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    left: 0;
    height: calc(100vh - 5rem);
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    justify-content: center;
    li {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;
        padding: 2.5rem;
        font-size: 4rem;
        width: 100%;
        &:not(:last-child) {
          margin-right: 2.5rem;
        }
        &.active {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledMobileNav>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <MenuBurger onClick={() => setIsOpen(!isOpen)}>
          <img className="logo" src={burger} alt="Logo" />
        </MenuBurger>
        {isOpen && (
          <MobileNavList>
            <ul>
              <li>
                <a href="#news" onClick={() => setIsOpen(false)}>
                  Wiadomości
                </a>
              </li>
              <li>
                <a href="#technologies" onClick={() => setIsOpen(false)}>
                  Technologie
                </a>
              </li>
            </ul>
          </MobileNavList>
        )}
      </StyledMobileNav>
    </>
  );
};

export default SideBar;
