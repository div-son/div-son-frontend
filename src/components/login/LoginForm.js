import React from "react";
import UserInput from "./UserInput";
import { useState } from "react";
import axios from "axios";

export const LoginForm = ({ props }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "password",
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
        <h1>Continue from where you left us!</h1>
        {inputs.map((input) => (
          <UserInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
