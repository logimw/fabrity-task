import { CheckboxLabel, CheckboxWrapper } from "./Forms.styles";

const Checkbox = ({ onChange, checked, name }) => {
  return (
    <CheckboxWrapper>
      <input
        className="contact-form__checkbox"
        type="checkbox"
        id="agree"
        name={name}
        onChange={onChange}
        checked={checked}
        required
      />
      <CheckboxLabel htmlFor="agree">
        Wyrażam zgodę na lorem ipsum lorem ipsum
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
