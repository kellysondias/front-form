import { Field, ErrorMessage } from "formik";

export const Input = ({ type, text, name, placeholder, icon }) => {
  return (
    <div>
      <label htmlFor={name}>
        {text} <i>{icon}</i> :
      </label>
      <Field
        className="field"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      ></Field>
      <ErrorMessage component="span" className="error" name={name} />
    </div>
  );
};
