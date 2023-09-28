import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Employee.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Employee = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "username" && password === "password") {
      navigate(`/login/Employee:${username}`);
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center gradient-bg bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>{" "}
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              className="form-control rounded-0"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>{" "}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="form-control rounded-0"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Employee;
