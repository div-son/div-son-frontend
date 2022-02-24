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
      label: "First name",
    },

    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Enter last name",
      label: "Last name",
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "password",
    },
  ];

  // const getJoke = () => {
  //   axios.get("https://div-son.herokuapp.com").then((response) => {
  //     console.log(response);
  //   });
  // };

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
