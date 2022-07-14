import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `connect`;
    navigate(path);
  };

  return (
    <div className="main">
      <div className="box">
        <h2>Login to your account</h2>
        <br />
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
        <button className="loginButton" onClick={routeChange}>
          Login
        </button>
        <h4>
          New to MyApp? <Link to="register">Sign up</Link>
        </h4>
      </div>
    </div>
  );
}

export default Login;
