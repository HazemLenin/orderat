import { useState } from "react";
import "./Forminput.css";

const FormInput = (props) => {
  const [focused, setfocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputprops } = props;
  const handelFocus = (e) => {
    setfocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handelFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage} </span>
    </div>
  );
};

export default FormInput;
