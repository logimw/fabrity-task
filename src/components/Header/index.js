import logo from "assets/images/logo.png";
import { StyledHeader } from "./Header.styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/">
        <img className="logo" src={logo} alt="Logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <a href="#news">Wiadomości</a>
          </li>
          <li>
            <a href="#technologies">Technologie</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
