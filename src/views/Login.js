import Button from "components/Button/Button";
import Title from "components/Title/Title";
import FormField from "components/Forms/FormField";
import { useState } from "react";
import { StyledLink, Wrapper } from "../components/Forms/Forms.styles";

const initialFormState = {
  login: "",
  password: "",
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Title h1>Zaloguj się</Title>
      <Wrapper as="form" onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="login"
          onChange={handleInputChange}
          id="login"
          value={formValues.login}
          label="Login"
        />
        <FormField
          type="password"
          name="password"
          onChange={handleInputChange}
          id="password"
          value={formValues.password}
          label="Hasło"
          className="divider"
        />
        <Button>Dalej</Button>
        <StyledLink to="/register">Chcę się zalogować</StyledLink>
      </Wrapper>
    </>
  );
};

export default Login;
