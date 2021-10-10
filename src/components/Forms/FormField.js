import { Input, Label } from "./Forms.styles";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const FormField = ({
  value,
  onChange,
  name,
  id,
  label,
  type = "text",
  ...props
}) => {
  return (
    <Wrapper>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={name}
        required
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default FormField;
