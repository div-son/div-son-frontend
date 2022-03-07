import React, { useState, useEffect } from "react";

const Regsiter = ({ history, match }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const visitor = { firstName, lastName, email, password };

    fetch(" http://localhost:8080/users ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visitor),
    });
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form onSubmit>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="Email"
                    placeholder="Enter Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="username"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-success" onClick={handleRegister}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;
