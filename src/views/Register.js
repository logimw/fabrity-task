import { useState } from "react";
import Button from "components/Button/Button";
import Title from "components/Title/Title";
import { Divider, StyledLink, Wrapper } from "components/Forms/Forms.styles";
import FormField from "components/Forms/FormField";
import Checkbox from "../components/Forms/Checkbox";

const initialFormState = {
  login: "",
  password: "",
  name: "",
  email: "",
  agree: false,
};

const Register = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckbox = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Title h1>Zarejestruj się</Title>
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
        <Divider />
        <FormField
          type="text"
          name="name"
          onChange={handleInputChange}
          id="name"
          value={formValues.name}
          label="Imię i nazwisko"
        />
        <FormField
          type="email"
          name="email"
          onChange={handleInputChange}
          id="email"
          value={formValues.email}
          label="Adres e-mail"
        />
        <Checkbox
          name="agree"
          onChange={handleCheckbox}
          checked={formValues.agree}
        />
        <Button isPrimary>Załóż konto</Button>
        <StyledLink to="/login">Chcę się zalogować</StyledLink>
      </Wrapper>
    </>
  );
};

export default Register;
