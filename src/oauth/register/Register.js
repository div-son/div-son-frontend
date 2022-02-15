import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";

export const Register = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Register</h2>
          <p className="welcome">Welcome!</p>
        </div>

        <form className="form-wrapper">
          <div className="form-group">
            <div className="inputIcon">
              <AiOutlineUser />
            </div>

            <label className="label">First name </label>
            <input
              placeholder="Enter first name"
              className="input"
              type="text"
              name="firstname"
            />
          </div>

          <div className="form-group">
            <div className="inputIcon">
              <BiUser />
            </div>
            <label className="label">Last name</label>
            <input
              placeholder="Enter last name"
              className="input"
              type="text"
              name="lastname"
            />
          </div>

          <div className="form-group">
            <div className="inputIcon">
              <BsTelephone />
            </div>
            <label className="label">Phone number</label>
            <input
              placeholder="Enter phone number"
              className="input"
              type="tel"
              name="phonenumber"
            />
          </div>

          <div className="form-group">
            <div className="inputIcon">
              <AiOutlineMail />
            </div>
            <label className="label">Email</label>
            <input
              placeholder="Enter email address"
              className="input"
              type="email"
              name="email"
            />
          </div>

          <div className="form-group">
            <div className="inputIcon">
              <CgPassword />
            </div>
            <label className="label">Password</label>
            <input
              placeholder="Enter password"
              className="input"
              type="text"
              name="password"
            />
          </div>

          <div>
            <button className="submit">Sign up</button>
            <br></br>
            <p className="link">
              Already have an account?
              <a href="#" className="loginHere">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
