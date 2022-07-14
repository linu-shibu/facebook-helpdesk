import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="main">
      <div className="box">
        <h2>Create account</h2>
        <br />
        <div className="nameBox">
          <h4 className="boxText">Name</h4>
          <input type="text" className="inputBar" />
        </div>
        <div className="emailBox">
          <h4 className="boxText">Email</h4>
          <input type="email" className="inputBar" />
        </div>
        <div className="passBox">
          <h4 className="boxText">Password</h4>
          <input type="password" className="inputBar" />
        </div>
        <br />
        <input type="checkbox" id="userHist" name="userHist" value="" />
        <label htmlFor="userHist" id="userHist">
          Remember me
        </label>
        <br />
        <button className="registerButton">Register</button>
        <h4>
          Already have an account? <Link to="/">Login</Link>
        </h4>
      </div>
    </div>
  );
}

export default Register;
