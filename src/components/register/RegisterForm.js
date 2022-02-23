import "../../styles/Register.css";
import FormInput from "./FormInput";
import { useState } from "react";

export const RegisterForm = (props) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Enter first name",
      errorMessage: "First name is invalid",
      label: "First name",
      pattern: "^[A-Za-z]",
      required: true,
    },

    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Enter last name",
      errorMessage: "Invalid last name",
      label: "Last name",
      pattern: "^[A-Za-z]",
      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      errorMessage: "Email type not supported",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      errorMessage: "Password is invalid",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8, 20}$`,
      required: true,
    },
  ];

  const handleSumit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSumit}>
        <h1>Welcome!</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};
export default RegisterForm;
