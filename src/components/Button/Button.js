import { StyledButton } from "./Button.styles";

const Button = ({ children, isPrimary }) => {
  return <StyledButton primary={isPrimary}>{children}</StyledButton>;
};

export default Button;
