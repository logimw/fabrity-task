import Title from "./Title/Title";
import Button from "./Button/Button";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <Title h1>Dzień dobry</Title>
      <NavLink to="/login">
        <Button isPrimary>Zaloguj się</Button>
      </NavLink>
      <p>lub</p>
      <NavLink to="/register">
        <Button>Zarejestruj</Button>
      </NavLink>
    </>
  );
};

export default Intro;
